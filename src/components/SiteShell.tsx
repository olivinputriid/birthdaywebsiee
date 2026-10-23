import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const AVATAR = "/jeje1.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/profile", label: "Profile" },
  { to: "/journey", label: "Journey" },
  { to: "/wishes", label: "Wishes" },
] as const;

const base = "px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all";
const idle = "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface";
const active = "bg-primary-container text-on-primary-container shadow-sm";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-fixed/35 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl" />
        <div className="absolute bottom-12 left-1/4 w-72 h-72 rounded-full bg-tertiary-fixed/30 blur-3xl" />
      </div>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4 px-margin">
        <div className="h-16 w-full max-w-[1120px] mx-auto bg-surface/70 backdrop-blur-xl rounded-full px-space-md py-space-xs flex items-center justify-between shadow-md">
          <div className="flex items-center gap-space-sm pl-space-xs">
            <Link to="/" className="flex items-center gap-1.5">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight">jj birthday dashboard</span>
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-space-xs px-space-xs py-1 rounded-full bg-surface-container-low/60 backdrop-blur-md">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className={base}
                activeProps={{ className: active }}
                inactiveProps={{ className: idle }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-space-sm pr-space-xs">
            <Link
              to="/wishes"
              className="hidden sm:inline-flex items-center gap-1 px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm tracking-wide uppercase hover:bg-tertiary transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-sm">favorite</span>
              <span>Send Wish</span>
            </Link>
            <div className="p-0.5 rounded-full bg-surface-container-highest shadow-sm flex items-center justify-center">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={AVATAR} />
            </div>
          </div>
        </div>
      </header>
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1 rounded-full bg-surface/80 backdrop-blur-xl shadow-md">
        {NAV.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: true }}
            className={base}
            activeProps={{ className: active }}
            inactiveProps={{ className: idle }}
          >
            {n.label}
          </Link>
        ))}
      </nav>
      <main className="relative z-10 w-full pt-16">
        <div className="max-w-[1120px] mx-auto px-margin pt-space-lg">{children}</div>
      </main>
      <footer className="relative z-10 w-full bg-surface-container-low/80 backdrop-blur-md mt-space-xl py-space-xl pb-24 md:pb-space-xl">
        <div className="max-w-[1120px] mx-auto px-margin flex flex-col sm:flex-row items-center justify-between gap-space-md text-center sm:text-left">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-sm text-headline-sm text-primary">happy birthday jeje</span>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-primary text-sm">celebration</span>
            <span>Crafted with warm memories &amp; loves • your buddy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
