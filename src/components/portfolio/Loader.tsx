import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              className="h-24 w-24 rounded-full border-4 border-transparent"
              style={{
                borderTopColor: "oklch(0.85 0.17 200)",
                borderRightColor: "oklch(0.65 0.26 295)",
                boxShadow: "0 0 30px oklch(0.65 0.26 295 / 0.6)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center font-display font-bold gradient-text">
              AI
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
