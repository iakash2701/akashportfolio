import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      // Small pause after drawing completes before fading out loader
      setTimeout(() => setDone(true), 600);
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {
      // Fallback if autoplay is blocked
      setTimeout(() => setDone(true), 2500);
    });

    // Safety timeout in case video stalls
    const fallbackTimer = setTimeout(() => {
      setDone(true);
    }, 4500);

    return () => {
      video.removeEventListener("ended", handleEnded);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-4"
        >
          <div className="relative flex flex-col items-center justify-center w-full max-w-2xl">
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
