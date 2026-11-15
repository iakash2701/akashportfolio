import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 9, suffix: "+", label: "Internships Completed" },
  { value: 12, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "+", label: "Hackathons" },
  { value: 8, suffix: ".22", label: "B.Tech CGPA" },
  { value: 25, suffix: "+", label: "Certifications" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const step = 25;
    const steps = dur / step;
    let s = 0;
    const t = setInterval(() => {
      s++;
      const val = Math.min(to, Math.round((s / steps) * to));
      setN(val);
      if (s >= steps) clearInterval(t);
    }, step);
    return () => clearInterval(t);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
      {n}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-8 sm:py-12 gradient-border"
        >
          <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {stats.map((s, idx) => (
              <div key={s.label} className={`text-center ${idx === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-xs sm:text-sm font-medium text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
