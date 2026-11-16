import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Dismiss loader after animation completes (video is 3.58s)
    const timer = setTimeout(() => {
      setDone(true);
    }, 3800);

    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        setTimeout(() => setDone(true), 400);
      };
      video.addEventListener("ended", handleEnded);
      video.play().catch(() => {});
      return () => {
        video.removeEventListener("ended", handleEnded);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background px-4 pointer-events-none"
        >
          {/* Subtle dark grid and mesh background matching portfolio theme */}
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0 mesh-bg opacity-70" />

          {/* Ambient aurora floating glow orbs */}
          <div
            className="pointer-events-none absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-30"
            style={{ background: "oklch(0.85 0.17 200 / 0.35)", top: "25%", left: "20%" }}
          />
          <div
            className="pointer-events-none absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-30"
            style={{ background: "oklch(0.65 0.26 295 / 0.35)", bottom: "25%", right: "20%" }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl">
            {/* The handwritten HELLO draw-on animation from reference video */}
            <div className="relative w-full flex items-center justify-center">
              <video
                ref={videoRef}
                muted
                playsInline
                autoPlay
                preload="auto"
                aria-label="HELLO"
                className="w-full max-w-[320px] xs:max-w-[420px] sm:max-w-[560px] md:max-w-[640px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_0_35px_oklch(0.85_0.17_200_/_0.5)]"
                style={{ mixBlendMode: "screen", filter: "brightness(1.15) contrast(1.1)" }}
              >
                <source src="/hello_anim.webm" type="video/webm" />
                <source src="/hello_anim.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
