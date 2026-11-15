import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed -z-[5] h-[500px] w-[500px] rounded-full opacity-40 blur-3xl transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
        background: "radial-gradient(circle, oklch(0.7 0.22 255 / 0.5), transparent 70%)",
      }}
      aria-hidden
    />
  );
}
