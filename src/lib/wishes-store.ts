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

const STORAGE_KEY = "jeje_birthday_wishes_v1";

export function getStoredWishes(): Wish[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to load wishes from storage:", e);
    return [];
  }
}

export function saveWishes(wishes: Wish[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    window.dispatchEvent(new CustomEvent("wishes-updated", { detail: wishes }));
  } catch (e) {
    console.error("Failed to save wishes to storage:", e);
  }
}

export async function addWish(name: string, message: string, photo?: string | null): Promise<Wish> {
  const newWish: Wish = {
    id: "wish_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    name: name.trim(),
    message: message.trim(),
    photo: photo || null,
    created_at: new Date().toISOString(),
    reactions: {
      favorite: 1,
      celebration: 0,
      smile: 0,
    },
  };

  const existing = getStoredWishes();
  const updated = [newWish, ...existing];
  saveWishes(updated);
  return newWish;
}

export function updateWishReaction(
  wishId: string,
  reactionType: "favorite" | "celebration" | "smile",
): void {
  const existing = getStoredWishes();
  const index = existing.findIndex((w) => w.id === wishId);
  if (index === -1) return;

  const currentCount = existing[index].reactions?.[reactionType] ?? 0;
  existing[index] = {
    ...existing[index],
    reactions: {
      ...existing[index].reactions,
      [reactionType]: currentCount + 1,
    },
  };

  saveWishes(existing);
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
