export interface Wish {
  id: string;
  name: string;
  message: string;
  photo?: string | null;
  created_at: string;
  reactions: {
    favorite: number;
    celebration: number;
    smile: number;
  };
}

import { createWish, listWishes, reactToWish } from "./wishes.functions";

// Wishes used to be kept only in this browser's localStorage; any left there are
// uploaded once so they show up on every device.
const LEGACY_STORAGE_KEY = "jeje_birthday_wishes_v1";

let cache: Wish[] = [];

function emitUpdate(): void {
  window.dispatchEvent(new CustomEvent("wishes-updated", { detail: cache }));
}

export function getStoredWishes(): Wish[] {
  return cache;
}

async function uploadLegacyWishes(): Promise<void> {
  const raw = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!raw) return;
  let legacy: Wish[] = [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) legacy = parsed;
  } catch {
    // Unreadable data; nothing to recover.
  }
  // Oldest first so they keep their original order on the wall.
  for (const w of [...legacy].reverse()) {
    if (!w?.name?.trim() || !w?.message?.trim()) continue;
    await createWish({
      data: { name: w.name, message: w.message, photo: w.photo ?? null, createdAt: w.created_at },
    });
  }
  localStorage.removeItem(LEGACY_STORAGE_KEY);
}

let legacyUpload: Promise<void> | null = null;

export async function refreshWishes(): Promise<Wish[]> {
  if (typeof window === "undefined") return cache;
  try {
    legacyUpload ??= uploadLegacyWishes().catch((e) => {
      legacyUpload = null;
      console.error("Failed to upload locally saved wishes:", e);
    });
    await legacyUpload;
    cache = await listWishes();
    emitUpdate();
  } catch (e) {
    console.error("Failed to load wishes:", e);
  }
  return cache;
}

export async function addWish(name: string, message: string, photo?: string | null): Promise<void> {
  await createWish({ data: { name, message, photo: photo || null } });
  await refreshWishes();
}

export function updateWishReaction(
  wishId: string,
  reactionType: "favorite" | "celebration" | "smile",
): void {
  cache = cache.map((w) =>
    w.id === wishId
      ? { ...w, reactions: { ...w.reactions, [reactionType]: (w.reactions?.[reactionType] ?? 0) + 1 } }
      : w,
  );
  emitUpdate();
  reactToWish({ data: { id: wishId, type: reactionType } }).catch((e) =>
    console.error("Failed to save reaction:", e),
  );
}

export function compressImageFile(
  file: File,
  maxWidth = 800,
  maxHeight = 800,
  quality = 0.8,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const src = readerEvent.target?.result as string;
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(src);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error("Gagal membaca file gambar."));
      img.src = src;
    };
    reader.onerror = () => reject(new Error("Gagal memuat file gambar."));
    reader.readAsDataURL(file);
  });
}
