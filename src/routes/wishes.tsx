import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useTransition } from "react";
import { burstEmoji, burstDots } from "@/lib/sparkles";
import {
  Wish,
  getStoredWishes,
  refreshWishes,
  addWish,
  updateWishReaction,
  compressImageFile,
} from "@/lib/wishes-store";
import { WishWall } from "@/components/WishWall";

export const Route = createFileRoute("/wishes")({
  head: () => ({
    meta: [
      { title: "Warm Wishes for Jeje 💌" },
      { name: "description", content: "Kirimkan ucapan hangat dan foto kenangan untuk ulang tahun Jeje ke-20." },
      { property: "og:title", content: "Warm Wishes for Jeje 💌" },
      { property: "og:description", content: "Kirimkan ucapan hangat dan foto kenangan untuk ulang tahun Jeje ke-20." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  validateSearch: (s: Record<string, unknown>) =>
    ({ write: s["write"] === 1 || s["write"] === "1" ? (1 as const) : undefined }) as { write?: 1 },
  component: WishesPage,
});

const DEFAULT_PHOTO =
  "jeje1.png";

const TAPES = [
  "bg-primary-container/40 -rotate-2 left-10",
  "bg-secondary-fixed/50 rotate-2 right-14",
  "bg-tertiary-fixed/50 -rotate-1 left-1/3",
  "bg-primary-fixed-dim/40 rotate-2 right-8",
];

const AVATAR_COLORS = [
  "bg-primary-container text-on-primary-container",
  "bg-secondary-container text-on-secondary-container",
  "bg-tertiary-container text-on-tertiary-container",
  "bg-primary-fixed text-on-primary-fixed",
];

const TILTS = ["rotate-[-1.5deg]", "rotate-[1.2deg]", "rotate-[-0.8deg]", "rotate-[1.5deg]"];

function WishesPage() {
  const { write } = Route.useSearch();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Form state
  const [senderName, setSenderName] = useState("");
  const [wishMessage, setWishMessage] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [isSubmitting, startTransition] = useTransition();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load wishes
  useEffect(() => {
    refreshWishes().then(setWishes);
    const handleWishesUpdate = () => {
      setWishes(getStoredWishes());
    };
    window.addEventListener("wishes-updated", handleWishesUpdate);
    return () => window.removeEventListener("wishes-updated", handleWishesUpdate);
  }, []);

  // Open modal if search param write=1
  useEffect(() => {
    if (write) {
      setIsModalOpen(true);
    }
  }, [write]);

  const handleNext = () => {
    if (wishes.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % wishes.length);
    }
  };

  const handlePrev = () => {
    if (wishes.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + wishes.length) % wishes.length);
    }
  };

  const handlePhotoSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setPhotoError("Harap pilih file gambar (JPG, PNG, atau WEBP).");
      return;
    }

    setPhotoError(null);
    try {
      const compressedDataUrl = await compressImageFile(file, 800, 800, 0.82);
      setSelectedPhoto(compressedDataUrl);
    } catch (err) {
      console.error("Gagal memproses gambar:", err);
      setPhotoError("Gagal memproses gambar. Silakan coba file lain.");
    }
  };

  const handleRemovePhoto = () => {
    setSelectedPhoto(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !wishMessage.trim()) return;

    startTransition(async () => {
      await addWish(senderName, wishMessage, selectedPhoto);
      setShowSuccessToast(true);
      setCurrentIndex(0); // Focus on newly added wish
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setShowSuccessToast(false);
      setSenderName("");
      setWishMessage("");
      setSelectedPhoto(null);
      setPhotoError(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }, 300);
  };

  const handleReaction = (
    e: React.MouseEvent<HTMLButtonElement>,
    wishId: string,
    type: "favorite" | "celebration" | "smile",
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    if (type === "favorite") burstEmoji(x, y);
    else burstDots(x, y);

    updateWishReaction(wishId, type);
  };

  const activeWish = wishes[currentIndex] ?? null;

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative w-full pb-16">
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary-fixed-dim/30 rounded-full blur-3xl -z-10" />

          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-space-sm mb-space-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed/60 backdrop-blur-md shadow-sm">
              <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                favorite
              </span>
              <span className="font-label-md text-label-md text-on-primary-container tracking-wider uppercase">
                Memories &amp; Affection
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
              Warm Wishes &amp; Love for Jeje 💌
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              happy Birthday je, this is from us with much loves
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 font-label-sm text-label-sm text-on-secondary-fixed">
                <span className="material-symbols-outlined text-xs">cake</span> 20th Milestone
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed/40 font-label-sm text-label-sm text-on-tertiary-fixed">
                <span className="material-symbols-outlined text-xs">local_florist</span> {wishes.length} Kartu Ucapan
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-xs">edit_note</span> Tulis Ucapan &amp; Foto
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            {wishes.length > 0 ? (
              <>
                <div className="flex items-center justify-between px-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md text-on-surface-variant">Card</span>
                    <span className="font-headline-sm text-headline-sm text-primary">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="font-label-md text-label-md text-outline-variant">/</span>
                    <span className="font-label-md text-label-md text-outline">
                      {String(wishes.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Wish"
                      className="w-10 h-10 rounded-full bg-surface-container-lowest/80 backdrop-blur-md shadow-sm hover:shadow-md flex items-center justify-center text-primary transition-all active:scale-95"
                    >
                      <span className="material-symbols-outlined text-xl">arrow_back</span>
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Wish"
                      className="w-10 h-10 rounded-full bg-primary text-on-primary shadow-sm hover:shadow-md flex items-center justify-center transition-all active:scale-95 hover:bg-primary-fixed-variant"
                    >
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl p-1 md:p-3">
                  {activeWish && (
                    <div className="w-full flex flex-col md:flex-row bg-surface-container-lowest/85 backdrop-blur-xl rounded-3xl shadow-[0_10px_28px_-4px_rgba(224,83,104,0.12),0_4px_10px_-2px_rgba(61,53,52,0.04)] p-6 md:p-8 relative transition-all duration-300">
                      <div
                        className={`absolute -top-3 ${TAPES[currentIndex % TAPES.length]} w-24 h-6 rounded-sm backdrop-blur-sm pointer-events-none shadow-xs`}
                      />

                      <div className="w-full md:w-5/12 flex flex-col items-center mb-6 md:mb-0">
                        <div
                          className={`w-full max-w-[260px] bg-surface-container-lowest p-3 pb-8 rounded-2xl shadow-sm ${TILTS[currentIndex % TILTS.length]} transition-transform duration-300 hover:rotate-0 flex flex-col items-center`}
                        >
                          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container">
                            <img
                              alt={`Foto kenangan dari ${activeWish.name}`}
                              className="w-full h-full object-cover"
                              src={activeWish.photo || DEFAULT_PHOTO}
                            />
                            <div className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full p-1 shadow-xs">
                              <span className="material-symbols-outlined text-primary text-sm">stars</span>
                            </div>
                            <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full text-primary font-label-sm text-label-sm">
                              {activeWish.photo ? "🤍 sweet memory" : "🎂 happy 20th"}
                            </div>
                          </div>
                          <div className="w-full mt-4 text-center">
                            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate px-1">
                              {activeWish.name}
                            </p>
                            <span className="font-label-sm text-label-sm text-outline">
                              {new Date(activeWish.created_at).toLocaleDateString("id-ID", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-7/12 md:pl-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className={`w-12 h-12 rounded-full ${AVATAR_COLORS[currentIndex % AVATAR_COLORS.length]} flex items-center justify-center font-bold text-xl uppercase shadow-xs`}
                            >
                              {activeWish.name.charAt(0) || "J"}
                            </div>
                            <div>
                              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                {activeWish.name}
                              </h3>
                              <p className="font-label-sm text-label-sm text-on-surface-variant">
                                Kartu ucapan untuk Jeje tersayang 🤍
                              </p>
                            </div>
                          </div>

                          <div className="relative mt-2">
                            <span className="font-serif text-5xl leading-none text-primary/20 select-none block -mb-4">
                              “
                            </span>
                            <p className="font-body-lg text-body-lg text-on-surface font-normal leading-relaxed whitespace-pre-line break-words pl-2">
                              {activeWish.message}
                            </p>
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => handleReaction(e, activeWish.id, "favorite")}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high/60 hover:bg-surface-container-highest transition-all text-tertiary active:scale-90"
                              title="Kirim Love"
                            >
                              <span
                                className="material-symbols-outlined text-sm text-tertiary"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                favorite
                              </span>
                              <span className="font-label-sm text-label-sm font-semibold">
                                {activeWish.reactions?.favorite ?? 0}
                              </span>
                            </button>

                            <button
                              onClick={(e) => handleReaction(e, activeWish.id, "celebration")}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high/60 hover:bg-surface-container-highest transition-all text-secondary active:scale-90"
                              title="Rayakan!"
                            >
                              <span className="material-symbols-outlined text-sm text-secondary">
                                celebration
                              </span>
                              <span className="font-label-sm text-label-sm font-semibold">
                                {activeWish.reactions?.celebration ?? 0}
                              </span>
                            </button>

                            <button
                              onClick={(e) => handleReaction(e, activeWish.id, "smile")}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high/60 hover:bg-surface-container-highest transition-all text-primary active:scale-90"
                              title="Peluk Manis"
                            >
                              <span className="material-symbols-outlined text-sm text-primary">
                                sentiment_satisfied
                              </span>
                              <span className="font-label-sm text-label-sm font-semibold">
                                {activeWish.reactions?.smile ?? 0}
                              </span>
                            </button>
                          </div>

                          <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-sm text-primary">mark_email_read</span>
                            <span>Sealed with warmth</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {wishes.length > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {wishes.map((w, idx) => (
                      <button
                        key={w.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentIndex
                            ? "w-8 bg-primary"
                            : "w-2.5 bg-surface-container-highest hover:bg-primary/50"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full flex flex-col md:flex-row items-center bg-surface-container-lowest/85 backdrop-blur-xl rounded-3xl shadow-[0_10px_28px_-4px_rgba(224,83,104,0.12),0_4px_10px_-2px_rgba(61,53,52,0.04)] p-8 md:p-12 relative">
                <div className="absolute -top-3 left-10 w-24 h-6 rounded-sm bg-primary-container/40 -rotate-2 backdrop-blur-sm pointer-events-none shadow-xs" />

                <div className="w-full md:w-5/12 flex flex-col items-center mb-6 md:mb-0">
                  <div className="w-full max-w-[240px] bg-surface-container-lowest p-3 pb-6 rounded-2xl shadow-sm rotate-[-1deg] flex flex-col items-center border border-dashed border-primary/30">
                    <div className="w-full aspect-square rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-primary/60 p-4 text-center">
                      <span className="material-symbols-outlined text-4xl mb-2 text-primary">add_a_photo</span>
                      <span className="font-label-sm text-label-sm">Foto Kenanganmu</span>
                      <span className="font-label-sm text-xs text-outline mt-1">Bisa diunggah di form</span>
                    </div>
                    <div className="w-full mt-3 text-center">
                      <p className="font-headline-sm text-sm text-on-surface font-semibold">Slot Kartu Pertama</p>
                      <span className="font-label-sm text-xs text-outline">Menunggu ucapanmu ✨</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-7/12 md:pl-6 text-center md:text-left flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed/40 text-primary font-label-sm text-label-sm w-fit mx-auto md:mx-0 mb-3">
                    <span className="material-symbols-outlined text-xs">edit</span> Belum Ada Ucapan
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary font-bold">
                    Jadilah yang Pertama Menuliskan Doa!
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed max-w-md">
                    Kotak kartu ucapan Jeje masih siap diisi. Unggah foto momen terindahmu bersama Jeje dan sampaikan harapan terbaik untuk babak ke-20 tahunnya.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-8 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-fixed-variant transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base">favorite</span>
                      <span>Tulis Ucapan &amp; Pasang Foto Sekarang</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <WishWall />
          </div>
        </div>

        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/30 backdrop-blur-sm transition-all duration-300 ${
            isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div
            className={`relative w-full max-w-lg bg-surface-container-lowest/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 md:p-8 transform transition-all duration-300 max-h-[90vh] overflow-y-auto ${
              isModalOpen ? "scale-100" : "scale-95"
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-outline-variant/30">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                  Pastel Guestbook
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">
                  Pen a Wish &amp; Photo for Jeje 🌸
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors active:scale-90"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
              {/* Photo Upload Area */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between">
                  <span>Foto Kenangan Bersama Jeje (Opsional)</span>
                  <span className="text-xs text-outline">JPG, PNG, WEBP</span>
                </label>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoSelect}
                  accept="image/*"
                  className="hidden"
                />

                {!selectedPhoto ? (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-outline-variant/60 hover:border-primary/60 bg-surface-container-low/50 hover:bg-surface-container-low transition-all rounded-2xl p-5 flex flex-col items-center justify-center gap-1.5 text-center group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-xl">add_photo_alternate</span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface font-medium">
                      Pilih atau Unggah Foto
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Klik di sini untuk menyematkan foto manis ke kartu ucapan
                    </span>
                  </button>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface-container-low p-3 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-surface-container shadow-xs">
                      <img src={selectedPhoto} alt="Preview Foto" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-label-md text-sm font-semibold text-on-surface truncate">
                        Foto Siap Disematkan!
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Akan tampil di frame polaroid kartu ucapanmu.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-xs font-semibold text-primary hover:underline"
                        >
                          Ganti Foto
                        </button>
                        <span className="text-xs text-outline">•</span>
                        <button
                          type="button"
                          onClick={handleRemovePhoto}
                          className="text-xs font-semibold text-destructive hover:underline"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {photoError && <p className="text-xs text-destructive">{photoError}</p>}
              </div>

              {/* Name Input */}
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="senderName">
                  Nama atau Nama Panggilan Anda *
                </label>
                <input
                  id="senderName"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline-variant"
                  placeholder="e.g. Mia, Teman Sekelas, Sahabat SMA"
                  required
                  maxLength={60}
                  type="text"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="wishMessage">
                  Pesan &amp; Doa Hangat untuk Jeje *
                </label>
                <textarea
                  id="wishMessage"
                  value={wishMessage}
                  onChange={(e) => setWishMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none placeholder:text-outline-variant"
                  placeholder="Tuliskan ucapan ulang tahun, doa terbaik, kenangan lucu, atau pesan manismu..."
                  required
                  maxLength={1000}
                  rows={4}
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-sm text-primary">lock_open</span>
                  <span>Langsung tampil di kartu</span>
                </div>
                <button
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-fixed-variant transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                  type="submit"
                >
                  <span>{isSubmitting ? "Menyimpan..." : "Sealed & Send"}</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </form>

            {/* Success Overlay */}
            {showSuccessToast && (
              <div className="absolute inset-0 bg-surface-container-lowest/95 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-3 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Wish Sealed with Love! ✨
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xs">
                  Kartu ucapan dan fotomu telah tersematkan di deck ulang tahun ke-20 Jeje. Terima kasih sudah berbagi cinta!
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="mt-5 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-fixed-variant transition-all shadow-sm"
                >
                  Lihat Kartu Ucapan 💌
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
