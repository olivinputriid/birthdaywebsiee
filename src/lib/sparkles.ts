const EMOJI = ["💖", "✨", "🌸", "🪄", "🧁", "🌱"];
const DOT_VARS = ["--primary-container", "--secondary-container", "--primary-fixed", "--primary", "--secondary"];

function animate(el: HTMLElement, transform: string, ms: number) {
  el.style.position = "fixed";
  el.style.pointerEvents = "none";
  el.style.zIndex = "9999";
  el.style.transition = `all ${ms}ms cubic-bezier(0.1, 0.8, 0.3, 1)`;
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    el.style.transform = transform;
    el.style.opacity = "0";
  });
  setTimeout(() => el.remove(), ms + 50);
}

export function burstEmoji(x: number, y: number) {
  for (let i = 0; i < 6; i++) {
    const s = document.createElement("span");
    s.textContent = EMOJI[Math.floor(Math.random() * EMOJI.length)] ?? "✨";
    s.style.left = `${x + (Math.random() * 60 - 30)}px`;
    s.style.top = `${y + (Math.random() * 20 - 10)}px`;
    s.style.fontSize = `${Math.floor(Math.random() * 14 + 14)}px`;
    animate(
      s,
      `translate(${(Math.random() - 0.5) * 120}px, ${-(Math.random() * 100 + 40)}px) scale(1.3) rotate(${Math.random() * 40 - 20}deg)`,
      900,
    );
  }
}

export function burstDots(x: number, y: number) {
  for (let i = 0; i < 18; i++) {
    const d = document.createElement("div");
    const size = Math.random() * 8 + 6;
    d.style.width = d.style.height = `${size}px`;
    d.style.borderRadius = "9999px";
    d.style.backgroundColor = `var(${DOT_VARS[Math.floor(Math.random() * DOT_VARS.length)]})`;
    d.style.left = `${x}px`;
    d.style.top = `${y}px`;
    const a = Math.random() * Math.PI * 2;
    const dist = Math.random() * 90 + 30;
    animate(d, `translate(${Math.cos(a) * dist}px, ${Math.sin(a) * dist - 25}px) scale(0)`, 850);
  }
}
