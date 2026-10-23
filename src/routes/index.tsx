import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { burstEmoji, burstDots } from "@/lib/sparkles";
import jejePhoto from "@/assets/jeje-home.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Jeje ✨" },
      { name: "description", content: "A pastel scrapbook keepsake celebrating Jeje turning 20." },
      { property: "og:title", content: "Happy Birthday, Jeje ✨" },
      { property: "og:description", content: "A pastel scrapbook keepsake celebrating Jeje turning 20." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useEffect(() => {
    const btn = document.getElementById("sparkle-btn");
    const cd = document.getElementById("sparkle-count");
    if (!btn || !cd) return;
    let count = 240;
    const h = (e: MouseEvent) => {
      count += 1;
      cd.textContent = `✨ ${count} wishes popped`;
      burstEmoji(e.clientX, e.clientY);
    };
    btn.addEventListener("click", h);
    return () => btn.removeEventListener("click", h);
  }, []);
  void Link; void burstDots; void burstEmoji;
  return (
    <>
      <div className="flex flex-col w-full">
      
      <div className="relative w-full pb-space-xl">
      
      <section className="relative w-full rounded-[44px] bg-surface-container-lowest/90 backdrop-blur-md p-6 sm:p-10 md:p-14 shadow-[0_16px_36px_-6px_rgba(224,83,104,0.12),0_4px_16px_-2px_rgba(69,102,69,0.06)] overflow-hidden">
      
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary-fixed/40 blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-16 w-60 h-60 rounded-full bg-secondary-fixed/50 blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 md:mb-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low shadow-sm">
      <span className="material-symbols-outlined text-primary text-sm" style={{"fontVariationSettings": "'FILL' 1"}}>auto_awesome</span>
      <span className="font-label-md text-label-md tracking-wider uppercase text-primary">chapter 20 unlocked</span>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">october girlies</span>
      </div>
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary-container/40">
      <span className="material-symbols-outlined text-secondary text-sm">favorite</span>
      <span className="font-label-md text-label-md text-secondary tracking-normal">celebrating the lantam jeje #girlboss</span>
      </div>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
      
      <div className="lg:col-span-3 flex justify-center lg:justify-start">
      <div className="group relative transform -rotate-3 hover:rotate-0 transition-transform duration-300 ease-out">
      
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary-container/70 backdrop-blur-sm -rotate-2 z-20 shadow-sm opacity-90 rounded-sm"></div>
      
      <div className="p-3 pb-8 bg-surface-container-lowest rounded-2xl shadow-[0_8px_24px_-4px_rgba(69,102,69,0.12)] max-w-[210px] sm:max-w-[230px]">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container">
      <img alt="Jeje smiling in front of a glowing galaxy display" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="jeje8.png"/>
      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-tertiary text-xs" style={{"fontVariationSettings": "'FILL' 1"}}>favorite</span>
      <span className="font-label-sm text-label-sm text-tertiary">sweet 20</span>
      </div>
      </div>
      <div className="mt-3 text-center">
      <p className="font-headline-sm text-headline-sm text-on-surface-variant italic leading-none">sang sumatera yg dijawa</p>
      <p className="font-label-sm text-label-sm text-outline mt-1 tracking-widest uppercase">mem. 01</p>
      </div>
      </div>
      
      <span className="material-symbols-outlined absolute -bottom-3 -right-2 text-tertiary text-2xl drop-shadow-sm select-none">arrow_back_ios_new</span>
      </div>
      </div>
      
      <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-4">
      
      <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-secondary text-base">spa</span>
      <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant">special day celebration</span>
      <span className="material-symbols-outlined text-secondary text-base">spa</span>
      </div>
      
      <div className="flex flex-col items-center select-none">
      <h1 className="font-headline-xl text-[48px] sm:text-[62px] md:text-[76px] leading-[0.95] text-secondary italic tracking-tight font-normal">
                    happy birthday,
                  </h1>
      <div className="relative inline-block mt-1 sm:mt-2">
      <span className="font-headline-xl text-[64px] sm:text-[84px] md:text-[104px] leading-[0.88] text-tertiary tracking-tighter font-semibold lowercase drop-shadow-sm">
                      jeje
                    </span>
      
      <span className="absolute -top-2 -right-7 sm:-right-9 text-2xl sm:text-3xl animate-bounce">
                      🌸
                    </span>
      </div>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4 sm:mt-6 leading-relaxed">
                  Wishing endless Snoopy cuddles, fluffy gogumappang moments, sweet taro sips, refreshing Boost breaks, and a year overflowing with the coziest kind of magic. 🎀☁️💜
                </p>
      
      <div className="mt-6 flex items-center justify-center gap-3">
      <button className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-fixed hover:bg-primary-container text-on-primary-container font-label-md text-label-md transition-all shadow-[0_4px_14px_rgba(244,172,183,0.3)] hover:-translate-y-0.5 active:translate-y-0" id="sparkle-btn" type="button">
      <span className="material-symbols-outlined text-tertiary text-base group-hover:rotate-12 transition-transform" style={{"fontVariationSettings": "'FILL' 1"}}>celebration</span>
      <span>pop mini confetti!</span>
      </button>
      <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full" id="sparkle-count">
                    ✨ 240 wishes popped
                  </span>
      </div>
      </div>
      
      <div className="lg:col-span-3 flex justify-center lg:justify-end">
      <div className="group relative transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-out">
      
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary-fixed/80 backdrop-blur-sm rotate-3 z-20 shadow-sm opacity-90 rounded-sm"></div>
      
      <div className="p-3 pb-8 bg-surface-container-lowest rounded-2xl shadow-[0_8px_24px_-4px_rgba(224,83,104,0.12)] max-w-[210px] sm:max-w-[230px]">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container">
      <img alt="Jeje smiling in front of a glowing galaxy display" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500 saturate-[1.05]" src="jeje6.png"/>
      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-secondary text-xs">local_florist</span>
      <span className="font-label-sm text-label-sm text-secondary">birthday joy</span>
      </div>
      </div>
      <div className="mt-3 text-center">
      <p className="font-headline-sm text-headline-sm text-on-surface-variant italic leading-none">"J"</p>
      <p className="font-label-sm text-label-sm text-outline mt-1 tracking-widest uppercase">mem. 02</p>
      </div>
      </div>
      
      <div className="absolute -bottom-2 -left-3 bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm -rotate-6">
                    ★ golden hour
                  </div>
      </div>
      </div>
      </div>
      
      <div className="relative z-10 mt-10 pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 border-t-0">
      <div className="px-4 py-2 rounded-full bg-surface-container flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-secondary text-sm">cake</span>
      <span className="font-label-md text-label-md">gogumappang</span>
      </div>
      <div className="px-4 py-2 rounded-full bg-surface-container flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-primary text-sm">music_note</span>
      <span className="font-label-md text-label-md">Taylor Swift girlie</span>
      </div>
      <div className="px-4 py-2 rounded-full bg-surface-container flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-tertiary text-sm">star</span>
      <span className="font-label-md text-label-md">snoopy cuddler</span>
      </div>
      </div>
      </section>
      
      <section className="mt-8 md:mt-12 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
      
      <div className="md:col-span-7 bg-surface-container-low/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
      
      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary-container/20 flex items-center justify-center pointer-events-none select-none">
      <span className="material-symbols-outlined text-tertiary text-7xl opacity-30">mail</span>
      </div>
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-3">
      <span className="material-symbols-outlined text-xs">sentiment_satisfied</span>
      <span>a gentle whisper</span>
      </div>
      
      <h2 className="font-headline-md text-headline-md text-primary font-medium">
                  sorry it’s only a digital gift!
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-lg leading-relaxed">
                  Though this little keepsake may only exist in pixels for now, it carries a heart full of prayers, endless wishes, and all the good things this world could possibly bring your way. May life be gentle with you, may happiness find you in the smallest moments, and may beautiful things keep blooming in your days. Sending you all the love, warmth, and good wishes this little corner of the world can hold. ♡
                </p>
      </div>
      
      <div className="mt-6 flex items-center gap-3">
      <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
      <span className="font-body-sm text-body-sm text-secondary font-medium">hope you like it j!</span>
      </div>
      </div>
      
      <div className="md:col-span-5 bg-primary-fixed/30 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
      <div>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-fixed-variant font-bold">
                  Chapter Spotlight
                </span>
      <h3 className="font-headline-sm text-headline-sm text-on-primary-fixed mt-1">
                  Get to know the birthday girl!
                </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Who is JJ, the girl of the hour? Discover her little quirks, favorite things, sweetest obsessions, and all the tiny details that make her her. ♡
                </p>
      </div>
      
      <div className="mt-6">
      <Link className="group inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg tracking-wide hover:bg-tertiary transition-all duration-300 shadow-[0_6px_20px_rgba(135,78,88,0.25)] hover:shadow-[0_8px_24px_rgba(174,45,69,0.35)]" to="/profile">
      <span className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-primary-fixed" style={{"fontVariationSettings": "'FILL' 1"}}>face_retouching_natural</span>
      <span>who's the birthday girl?</span>
      </span>
      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
      </Link>
      </div>
      </div>
      </section>
      
      <section className="mt-6 w-full rounded-2xl bg-surface-container-high/60 backdrop-blur-sm p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-sm">
      <span className="material-symbols-outlined text-xl">draw</span>
      </div>
      <div>
      <p className="font-label-lg text-label-lg text-on-surface">Leave a warm note for Jeje</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Spread love, inside jokes, and lovely prayers on her guestbook wall.</p>
      </div>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
      <Link className="w-full sm:w-auto text-center px-5 py-2 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm" to="/wishes" search={{ write: 1 }}>
                Write a Message ✨
              </Link>
      </div>
      </section>
      </div>
      </div>
    </>
  );
}
