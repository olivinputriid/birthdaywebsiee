import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { burstEmoji, burstDots } from "@/lib/sparkles";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Meet Jeje — Profile & Keepsake" },
      { name: "description", content: "Get to know Jeje’s favorites, little quirks, and sweet memories as she turns 20." },
      { property: "og:title", content: "Meet Jeje — Profile & Keepsake" },
      { property: "og:description", content: "Get to know Jeje’s favorites, little quirks, and sweet memories as she turns 20." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const on = (el: Element | null, ev: string, fn: EventListener) => {
      if (!el) return;
      el.addEventListener(ev, fn);
      cleanups.push(() => el.removeEventListener(ev, fn));
    };
    const sc = document.getElementById("sparkle-count");
    on(document.getElementById("sparkle-btn"), "click", ((e: MouseEvent) => {
      if (sc) sc.textContent = String((Number(sc.textContent) || 0) + 1);
      burstEmoji(e.clientX, e.clientY);
    }) as EventListener);
    const saveBtn = document.getElementById("save-note-btn");
    const note = document.getElementById("personal-note") as HTMLTextAreaElement | null;
    const status = document.getElementById("save-status");
    on(saveBtn, "click", () => {
      if (!note || !saveBtn || !note.value.trim()) return;
      status?.classList.remove("hidden"); status?.classList.add("inline-flex");
      saveBtn.textContent = "Updated!";
      setTimeout(() => { status?.classList.add("hidden"); status?.classList.remove("inline-flex"); saveBtn.textContent = "Pin to Keepsake"; }, 3000);
    });
    const car = document.getElementById("memory-carousel");
    on(document.getElementById("scroll-prev"), "click", () => car?.scrollBy({ left: -300, behavior: "smooth" }));
    on(document.getElementById("scroll-next"), "click", () => car?.scrollBy({ left: 300, behavior: "smooth" }));
    return () => cleanups.forEach((c) => c());
  }, []);
  void Link; void burstDots; void burstEmoji;
  return (
    <>
      <div className="flex flex-col w-full">
      <section className="relative w-full py-space-md sm:py-space-xl">
      <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg">
      <div className="flex items-center gap-space-xs">
      <span className="px-space-md py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1 shadow-sm">
      <span className="material-symbols-outlined text-xs" style={{"fontVariationSettings": "'FILL' 1"}}>favorite</span>
                Profile &amp; Keepsake
              </span>
      <span className="text-outline text-body-sm font-body-sm hidden sm:inline">•</span>
      <span className="text-on-surface-variant text-body-sm font-body-sm hidden sm:inline">Chapter 20 Edition</span>
      </div>
      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm bg-surface-container-high/60 backdrop-blur-md px-3 py-1.5 rounded-full">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
      <span>Celebrating Jeje Today</span>
      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
      <div className="lg:col-span-5 relative flex flex-col items-center">
      
      <div className="absolute -top-5 left-4 z-20 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shadow-md -rotate-6 flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">local_florist</span>
      <span>Sunshine Soul</span>
      </div>
      <div className="absolute -bottom-4 right-6 z-20 px-3.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm shadow-md rotate-3 flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">cake</span>
      <span>Turning 20 ✨</span>
      </div>
      
      <div className="relative w-full max-w-[380px] bg-surface-container-lowest p-space-md pb-space-xl rounded-xl shadow-[0_12px_32px_-4px_rgba(224,83,104,0.18),0_4px_12px_-2px_rgba(107,142,106,0.08)] transition-transform duration-500 hover:-translate-y-1.5 hover:rotate-1 group">
      
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-primary-container/80 backdrop-blur-sm -rotate-2 rounded-sm shadow-sm pointer-events-none z-10 flex items-center justify-center">
      <span className="w-16 h-[1px] bg-primary/20"></span>
      </div>
      
      <div className="absolute -top-3 right-6 z-20 pointer-events-none">
      <svg className="text-outline-variant drop-shadow-sm" fill="none" height="42" viewBox="0 0 24 42" width="24">
      <path d="M7 11V31C7 34.3137 9.68629 37 13 37C16.3137 37 19 34.3137 19 31V7C19 4.23858 16.7614 2 14 2C11.2386 2 9 4.23858 9 7V30C9 31.6569 10.3431 33 12 33C13.6569 33 15 31.6569 15 30V12" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2"></path>
      </svg>
      </div>
      
      <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-surface-container">
      <img alt="Jeje" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/jeje1.png"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
      </div>
      
      <div className="pt-space-md text-center">
      <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">Jelita • "Jeje"</h3>
      <p className="font-headline-sm text-on-surface-variant italic text-sm mt-0.5">our radiant birthday star</p>
      </div>
      </div>
      
      <div className="mt-space-md flex items-center gap-space-xs">
      <button className="px-space-md py-1.5 rounded-full bg-surface-container-high hover:bg-primary-fixed text-primary transition-all font-label-md text-label-md flex items-center gap-1 shadow-sm" id="sparkle-btn">
      <span className="material-symbols-outlined text-sm">auto_awesome</span>
      <span>Send Sparkles (<span id="sparkle-count">142</span>)</span>
      </button>
      </div>
      </div>
      
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      
      <div className="bg-surface-container-low/90 backdrop-blur-md p-space-lg rounded-xl shadow-[0_4px_20px_-2px_rgba(224,83,104,0.06)] flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs">
      <div>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">The Birthday Star</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Meet Jeje</h2>
      </div>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed/60 text-on-primary-fixed-variant font-label-md text-label-md">
      <span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 1"}}>cake</span>
      <span>20th Celebration</span>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
      <div className="p-space-md rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-primary">
      <span className="material-symbols-outlined text-lg">verified</span>
      <span className="font-label-md text-label-md font-semibold">#Girlboss</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs">
        Punya pendirian teguh dan nggak gampang disetir orang. Tahu batas diri, berprinsip kokoh, and always stands on business!
      </p>
      </div>

      <div className="p-space-md rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-secondary">
      <span className="material-symbols-outlined text-lg">forum</span>
      <span className="font-label-md text-label-md font-semibold">The Therapist Friend</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs">
        Paling jago kasih nasihat bijak tiap ada yang stres, walaupun hidupnya sendiri kadang masih penuh plot twist tak terduga.
      </p>
      </div>

      <div className="p-space-md rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-tertiary">
      <span className="material-symbols-outlined text-lg">favorite</span>
      <span className="font-label-md text-label-md font-semibold">Softie in Disguise</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs">
        Kelihatannya santai atau cuek dari luar, tapi aslinya berhati lembut dan diam-diam paling tulus peduli sama orang terdekat.
      </p>
      </div>

      <div className="p-space-md rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-primary">
      <span className="material-symbols-outlined text-lg">psychology</span>
      <span className="font-label-md text-label-md font-semibold">A Little Unpredictable</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs">
        Kadang yakin dan mantap banget sama prinsipnya, tapi kadang bisa tiba-tiba overthinking dan merenung sendiri di malam hari.
      </p>
      </div>

      <div className="p-space-md rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-secondary">
      <span className="material-symbols-outlined text-lg">spa</span>
      <span className="font-label-md text-label-md font-semibold">Comforting Presence</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs">
        Bukan karena haus jadi pusat perhatian, tapi karena kehadirannya selalu bikin orang lain merasa aman, nyaman, dan tenang.
      </p>
      </div>

      <div className="p-space-md rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-tertiary">
      <span className="material-symbols-outlined text-lg">local_florist</span>
      <span className="font-label-md text-label-md font-semibold">Things She Adores</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs">
        Snoopy, gogumappang, taro drinks, Boost, quality time, dan her lovely familyyyyy ♡
      </p>
      </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-space-xs">
      <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">verified</span> #Girlboss
      </span>
      <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">forum</span> The Therapist
      </span>
      <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">local_cafe</span> Taro Obsessed
      </span>
      <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">pets</span> Snoopy Lover
      </span>
      <span className="px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">spa</span> Safe Space
      </span>
      </div>
      </div>
      
      <div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_4px_18px_-2px_rgba(224,83,104,0.08)] flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-base">edit_note</span>
      </div>
      <div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">A Note for Jeje</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Tap below to write or personalize your warm wish</p>
      </div>
      </div>
      <span className="font-label-sm text-label-sm text-secondary hidden items-center gap-1" id="save-status">
      <span className="material-symbols-outlined text-xs">check</span> Saved
                  </span>
      </div>
      <div className="relative mt-space-xs">
      <textarea className="w-full p-space-md rounded-lg bg-surface-container-low/70 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-all placeholder:text-outline resize-none" id="personal-note" placeholder="Dear Jeje, wishing you the most magical 20th year full of big laughs, endless iced taro, and beautiful sunset memories..." rows={3}></textarea>
      </div>
      <div className="flex items-center justify-between pt-1">
      <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-xs">lock_open</span>
      <span>Visible in her keepsake memory book</span>
      </div>
      <button className="px-space-md py-1.5 rounded-full bg-primary hover:bg-on-tertiary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wide transition-all shadow-sm" id="save-note-btn">
                    Pin to Keepsake
                  </button>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="relative w-full py-space-xl flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
      <div>
      <div className="flex items-center gap-1.5 text-secondary mb-1">
      <span className="material-symbols-outlined text-base">collections_bookmark</span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider">Memory Scrapbook</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Little Moments &amp; Sweet Memories</h2>
      </div>
      
      <div className="flex items-center gap-2">
      <button aria-label="Previous memories" className="w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-surface-container shadow-sm flex items-center justify-center text-on-surface-variant hover:text-primary transition-all" id="scroll-prev">
      <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <button aria-label="Next memories" className="w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-surface-container shadow-sm flex items-center justify-center text-on-surface-variant hover:text-primary transition-all" id="scroll-next">
      <span className="material-symbols-outlined">arrow_forward</span>
      </button>
      </div>
      </div>
      
      <div className="flex gap-space-md overflow-x-auto pb-space-md pt-2 px-1 scroll-smooth snap-x snap-mandatory" id="memory-carousel" style={{"scrollbarWidth": "none"}}>
      
      <div className="flex-shrink-0 w-64 sm:w-72 bg-surface-container-lowest p-space-md pb-space-lg rounded-xl shadow-[0_4px_16px_rgba(224,83,104,0.08)] snap-start group hover:-translate-y-1 transition-transform relative">
      <div className="absolute -top-2 left-6 w-16 h-4 bg-secondary-fixed/70 -rotate-3 rounded-xs pointer-events-none z-10"></div>
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-space-sm">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Aesthetic candid 35mm film photo of a cheerful young woman ordering iced taro latte at a sunlit wooden minimalist cafe in Kyoto with soft plants in background" src="/jeje2.png"/>
      </div>
      <div className="text-center pt-1">
      <p className="font-headline-sm text-headline-sm text-on-surface">"Jeje Humas"</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">gajah mada menginspirasi</span>
      </div>
      </div>
      
      <div className="flex-shrink-0 w-64 sm:w-72 bg-surface-container-lowest p-space-md pb-space-lg rounded-xl shadow-[0_4px_16px_rgba(224,83,104,0.08)] snap-start group hover:-translate-y-1 transition-transform relative">
      <div className="absolute -top-2 right-6 w-16 h-4 bg-primary-container/70 rotate-2 rounded-xs pointer-events-none z-10"></div>
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-space-sm">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Warm spontaneous laughter candid shot of an Asian young woman throwing her head back laughing happily in a cozy park picnic setting with soft pastel blankets and picnic treats" src="jeje3.png"/>
      </div>
      <div className="text-center pt-1">
      <p className="font-headline-sm text-headline-sm text-on-surface">"jeje siap pulang pkl"</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">ini jeje la dk tahan balek</span>
      </div>
      </div>
      
      <div className="flex-shrink-0 w-64 sm:w-72 bg-surface-container-lowest p-space-md pb-space-lg rounded-xl shadow-[0_4px_16px_rgba(224,83,104,0.08)] snap-start group hover:-translate-y-1 transition-transform relative">
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-tertiary-fixed/60 -rotate-1 rounded-xs pointer-events-none z-10"></div>
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-space-sm">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Ethereal golden hour portrait of a young girl gazing at seaside sunset, hair gently blowing in coastal breeze, warm amber soft glow, dreamy film grain aesthetic" src="/jeje4.png"/>
      </div>
      <div className="text-center pt-1">
      <p className="font-headline-sm text-headline-sm text-primary">"jeje mode nyari makan"</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">hampir tiap malam</span>
      </div>
      </div>
      
      <div className="flex-shrink-0 w-64 sm:w-72 bg-surface-container-lowest p-space-md pb-space-lg rounded-xl shadow-[0_4px_16px_rgba(224,83,104,0.08)] snap-start group hover:-translate-y-1 transition-transform relative">
      <div className="absolute -top-2 left-8 w-16 h-4 bg-secondary-fixed/70 rotate-3 rounded-xs pointer-events-none z-10"></div>
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-space-sm">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="jeje5.png"/>
      </div>
      <div className="text-center pt-1">
      <p className="font-headline-sm text-headline-sm text-on-surface">"jeje ke museum"</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">this is a selfie of j mendatangi sesepuh purba</span>
      </div>
      </div>
      
      <div className="flex-shrink-0 w-64 sm:w-72 bg-surface-container-lowest p-space-md pb-space-lg rounded-xl shadow-[0_4px_16px_rgba(224,83,104,0.08)] snap-start group hover:-translate-y-1 transition-transform relative">
      <div className="absolute -top-2 right-8 w-18 h-4 bg-primary-fixed/80 -rotate-2 rounded-xs pointer-events-none z-10"></div>
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-space-sm">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="jeje7.png"/>
      </div>
      <div className="text-center pt-1">
      <p className="font-headline-sm text-headline-sm text-on-surface">"daily pap j"</p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Here comes the 20th!</span>
      </div>
      </div>
      </div>
      </section>
      
      
      </div>
    </>
  );
}
