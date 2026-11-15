import { motion } from "framer-motion";
import { Sparkles, Compass, Lightbulb, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const traits = [
  {
    Icon: Sparkles,
    title: "Relentless Curiosity",
    text: "Deeply interested in modern AI architectures, continuously experimenting with new LLM, vision, and analytics workflows.",
  },
  {
    Icon: Compass,
    title: "Real-World Focus",
    text: "Building solutions that address actual problems — from worker safety monitoring to computer vision traffic automation.",
  },
  {
    Icon: Lightbulb,
    title: "Engineering Rigor",
    text: "Emphasis on reproducible code, clean modular system architecture, and robust evaluation metrics across every project.",
  },
  {
    Icon: ShieldCheck,
    title: "Security & Reliability",
    text: "Combining machine learning with foundational cybersecurity principles to deliver dependable, production-ready pipelines.",
  },
];

export function Traits() {
  return (
    <section id="traits" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Core Strengths" title="How I Work" subtitle="Principles I bring to every team and project." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass hover-glow rounded-2xl p-5 sm:p-6"
            >
              <div className="mb-3.5 sm:mb-4 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl" style={{ background: "oklch(0.65 0.26 295 / 0.2)", border: "1px solid oklch(0.65 0.26 295 / 0.4)" }}>
                <t.Icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h4 className="font-display text-base sm:text-lg font-semibold leading-snug">{t.title}</h4>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
