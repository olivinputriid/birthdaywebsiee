import { useEffect, useState } from "react";
import { getStoredWishes, Wish, addWish } from "@/lib/wishes-store";

const TAPES = ["bg-primary-container/40", "bg-secondary-fixed/50", "bg-tertiary-fixed/40"];
const NAMES = ["text-primary", "text-secondary", "text-tertiary"];
const TILTS = ["-rotate-1", "rotate-1", "-rotate-0.5"];

export async function submitWish(name: string, message: string, photo?: string | null): Promise<string | null> {
  const n = name.trim();
  const m = message.trim();
  if (!n || !m) return "Harap isi nama dan pesan ucapan Anda.";
  if (n.length > 60 || m.length > 1000) return "Nama atau pesan ucapan terlalu panjang.";
  await addWish(n, m, photo);
  return null;
}

export function WishWall() {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    setWishes(getStoredWishes());
    const handleUpdate = () => setWishes(getStoredWishes());
    window.addEventListener("wishes-updated", handleUpdate);
    return () => window.removeEventListener("wishes-updated", handleUpdate);
  }, []);

  if (!wishes.length) return null;

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">auto_stories</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Sticky Notes Pinboard</h2>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
          {wishes.length} Ucapan Masuk
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishes.map((w, i) => (
          <div
            key={w.id}
            className={`bg-surface-container-lowest/80 backdrop-blur-md p-6 rounded-3xl shadow-sm hover:shadow-md transition-all ${TILTS[i % 3]} hover:rotate-0 flex flex-col justify-between relative group`}
          >
            <div className={`absolute -top-2.5 left-8 w-16 h-4 ${TAPES[i % 3]} rounded-xs`} />
            <div>
              {w.photo && (
                <div className="mb-4 rounded-2xl overflow-hidden aspect-video bg-surface-container">
                  <img src={w.photo} alt={w.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex items-center justify-between mb-3 gap-2">
                <span className={`font-label-md text-label-md font-semibold ${NAMES[i % 3]} truncate`}>{w.name}</span>
                <span className="font-label-sm text-label-sm text-outline shrink-0">
                  {new Date(w.created_at).toLocaleDateString("id-ID", { month: "short", day: "numeric" })}
                </span>
              </div>
              <p className="font-headline-sm text-on-surface font-normal leading-relaxed text-sm whitespace-pre-line break-words">
                “{w.message}”
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 mt-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant">💌 Sealed</span>
              <span
                className="material-symbols-outlined text-xs text-primary group-hover:scale-125 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
