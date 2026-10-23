import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { burstEmoji, burstDots } from "@/lib/sparkles";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Jeje Becoming 20 — Journey & Personas" },
      { name: "description", content: "A celebratory retrospective of Jeje turning 20: the #girlboss, the therapist friend, and the unforgettable soul everyone loves." },
      { property: "og:title", content: "Jeje Becoming 20 — Journey & Personas" },
      { property: "og:description", content: "A celebratory retrospective of Jeje turning 20: the #girlboss, the therapist friend, and the unforgettable soul everyone loves." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  useEffect(() => {
    const btn = document.getElementById("confetti-heart-btn");
    if (!btn) return;
    const h = () => {
      const r = btn.getBoundingClientRect();
      burstDots(r.left + r.width / 2, r.top + r.height / 2);
    };
    btn.addEventListener("click", h);
    return () => btn.removeEventListener("click", h);
  }, []);
  void Link; void burstDots; void burstEmoji;

  return (
    <>
      <div className="flex flex-col w-full pb-space-xl">

        <div className="w-full flex justify-between items-center px-margin-sm mb-space-sm select-none">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed text-label-sm font-label-sm tracking-wider uppercase">
            <span className="material-symbols-outlined text-xs">auto_awesome</span>
            <span>Chapter 20 Archive</span>
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Vol. 2024–2025</span>
          </div>
        </div>

       
        <div className="relative w-full rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-lg md:p-space-xl mb-space-xl overflow-hidden shadow-sm">
          <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary-fixed/40 blur-2xl"></div>
          <div className="pointer-events-none absolute -bottom-20 -left-12 w-60 h-60 rounded-full bg-secondary-fixed/35 blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="max-w-xl flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">spa</span>
                <span>Entering a brand new chapter 🌸</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-normal lowercase leading-tight">
                jeje becoming 20!
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                A gentle scrapbook of memories, quiet strength, spontaneous laughter, and all the warm little moments that shape who Jeje is.
              </p>
            </div>

            <div className="w-full md:w-auto flex md:flex-col gap-space-sm justify-between">
              <div className="flex-1 md:flex-initial flex items-center gap-space-sm p-space-sm px-space-md rounded-lg bg-surface/90 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-primary-container/60 flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-base">verified</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary leading-none">100%</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Unapologetic Girlboss</div>
                </div>
              </div>
              <div className="flex-1 md:flex-initial flex items-center gap-space-sm p-space-sm px-space-md rounded-lg bg-surface/90 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-secondary-container/70 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-base">favorite</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-secondary leading-none">Safe Space</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cherished by Everyone</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
   
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div className="relative bg-surface-container-low/70 p-space-lg rounded-lg">
              <div className="absolute -top-3 left-10 w-28 h-6 bg-primary-container/40 rounded-sm transform -rotate-2 pointer-events-none backdrop-blur-sm"></div>
              <div className="flex items-center gap-2 mb-space-xs">
                <span className="material-symbols-outlined text-primary text-xl">menu_book</span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Retrospective Note</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
                finding herself, at chapter 20
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Stepping into 20, Jeje is still her usual self: a little chaotic, stubborn about her principles, and always ready with a whole lecture whenever a guy starts causing trouble. Sometimes she's the friend everyone turns to for advice, and sometimes she's just as lost in her own plot twists. WKWK. But that's what makes her, her. Beneath all the jokes, strong opinions, and little quirks is a friend whose presence means more than she probably realizes. So, in this new chapter, may Jeje learn that she doesn't always have to be the person everyone runs to; she deserves a place where she can rest, too. Take your time, Je. You don't need to have everything figured out just yet. Keep growing, keep being your wonderfully chaotic self, and remember that there are people who want to stick around for every chapter ahead. ♡
              </p>
            </div>

            <div className="relative bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -top-4 right-6 px-space-md py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-1 shadow-sm transform rotate-1">
                <span className="material-symbols-outlined text-xs">shield</span>
                <span>Unshakable Principle</span>
              </div>
              <div className="flex items-center gap-2 mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-secondary">01. #Girlboss — Unshakable &amp; Independent</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Jeje is the textbook definition of someone with a spine of steel who refuses to be easily swayed or pushed around. She knows exactly what she wants, holds onto her principles with quiet confidence, and isn't afraid to stand on her own two feet. When she makes up her mind, she stands on business!
              </p>
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-xs text-primary">check_circle</span>
                <span>Firm, independent, and unapologetically principled</span>
              </div>
            </div>

            <div className="relative bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -top-4 right-6 px-space-md py-1 rounded-full bg-primary-fixed-dim text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-1 shadow-sm transform -rotate-1">
                <span className="material-symbols-outlined text-xs">forum</span>
                <span>Always Listening</span>
              </div>
              <div className="flex items-center gap-2 mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-primary">02. The Therapist Friend — The Ultimate Safe Space</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Whenever friends are spiraling, stressed over boys, or having an existential crisis, Jeje is the first person on speed dial. She's the master of listening without judgment and dropping sage advice that clears the fog—even if, hilariously enough, her own life is just as full of chaotic twists and unexpected plot turns!
              </p>
              <div className="bg-surface-container-low rounded-lg p-space-md flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-xl">format_quote</span>
                <p className="font-headline-sm text-body-lg text-primary italic font-normal">
                  “The wisest advisor when everyone else is losing their minds, even while navigating her own hilarious plot twists.”
                </p>
              </div>
            </div>

            <div className="relative bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -top-4 right-6 px-space-md py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-1 shadow-sm transform rotate-2">
                <span className="material-symbols-outlined text-xs">favorite</span>
                <span>Heart of Gold</span>
              </div>
              <div className="flex items-center gap-2 mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-tertiary">03. Softie in Disguise — A Big, Tender Heart</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                On the surface, she might carry herself like she's totally chill, nonchalant, or tough as nails. But anyone who truly knows her understands that beneath the casual exterior beats the softest, most tender heart. She quietly notices the smallest details and loves the people in her circle with the purest devotion.
              </p>
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm mt-2">
                <span className="material-symbols-outlined text-xs text-tertiary">check_circle</span>
                <span>Acts tough on the outside, sweetest softie on the inside</span>
              </div>
            </div>

            <div className="relative bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -top-4 right-6 px-space-md py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-1 shadow-sm transform -rotate-1">
                <span className="material-symbols-outlined text-xs">psychology</span>
                <span>Sweet Complexity</span>
              </div>
              <div className="flex items-center gap-2 mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-primary">04. A Little Unpredictable — Conviction Meets Overthinking</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                One of Jeje's most endearing contradictions: by daylight, she can be utterly unshakable in her convictions, yet when the night quiets down, she can spiral into deep midnight overthinking. But it's this very duality that makes her human, authentic, and wonderfully relatable.
              </p>
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm mt-2">
                <span className="material-symbols-outlined text-xs text-primary">check_circle</span>
                <span>Unshakably confident by day, midnight overthinker by night</span>
              </div>
            </div>

            <div className="relative bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -top-4 right-6 px-space-md py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-1 shadow-sm transform rotate-1">
                <span className="material-symbols-outlined text-xs">spa</span>
                <span>Comforting Aura</span>
              </div>
              <div className="flex items-center gap-2 mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-secondary">05. The Kind of Person People Remember</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Jeje never has to shout or fight for the spotlight to be noticed. People remember her for something far rarer: the effortless warmth and peace she brings into any room. Being around her just feels like taking a deep, safe breath—comfortable, easy, and like coming home.
              </p>
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm mt-2">
                <span className="material-symbols-outlined text-xs text-secondary">check_circle</span>
                <span>Never chasing attention, yet impossibly unforgettable</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-lg lg:sticky lg:top-24">
            <div className="relative bg-surface-container-lowest p-5 pb-8 rounded-xl shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary-container/60 rounded-sm transform rotate-1 pointer-events-none shadow-xs"></div>
              
              <div className="overflow-hidden rounded-lg bg-surface-container aspect-square mb-4 shadow-inner">
                <img
                  alt="Jeje portrait"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  src="/jeje2.png"
                />
              </div>
              
              <div className="flex items-center justify-between px-1">
                <span className="font-headline-sm text-headline-sm text-on-surface italic">
                  our #girlboss star • chapter 20
                </span>
                <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  favorite
                </span>
              </div>
            </div>

            <div className="relative bg-secondary-fixed/30 p-space-md rounded-xl backdrop-blur-md shadow-sm transform rotate-1">
              <div className="absolute -top-3 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-sm">push_pin</span>
              </div>
              <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">edit_note</span>
                <span>Friend's Sticky Note</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-snug">
                “May your twenties be overflowing with sweet iced taro, warm fluffy gogumappang, endless Snoopy cuddles, effortless #girlboss wins, and zero unnecessary drama! Happy 20th Jeje ♡”
              </p>
            </div>

            <div className="grid grid-cols-2 gap-space-sm">
              <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl mb-1">sentiment_satisfied</span>
                <div className="font-headline-sm text-headline-sm text-primary">Go-To Advisor</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Ranked #1</div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center justify-center">
                <span className="material-symbols-outlined text-secondary text-2xl mb-1">favorite</span>
                <div className="font-headline-sm text-headline-sm text-secondary">Comforting Aura</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Unforgettable</div>
              </div>
            </div>

            <div className="relative bg-primary-fixed/20 p-space-md rounded-xl flex items-center justify-between gap-space-sm shadow-sm">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-lg">auto_awesome</span>
                </div>
                <div>
                  <div className="font-label-lg text-label-lg text-primary font-semibold">Leave a Sparkle</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Tap heart to shower pastel love &amp; confetti</div>
                </div>
              </div>
              <button
                aria-label="Send Birthday Sparkles"
                className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-sm focus:outline-none cursor-pointer"
                id="confetti-heart-btn"
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  favorite
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
