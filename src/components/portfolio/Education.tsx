import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    Icon: GraduationCap,
    meta: "2024 – 2028 | Chennai",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    place: "Panimalar Engineering College",
    detail: "Current CGPA: 8.22. Focused on Deep Learning, Statistical Machine Learning, and Computer Vision.",
  },
  {
    Icon: Award,
    meta: "2022 – 2024 | State Board",
    title: "Higher Secondary Certificate (HSC - 12th)",
    place: "State Board Examination",
    detail: "Graduated with 83.3%. Core emphasis on Advanced Mathematics, Physics, and Computer Science.",
  },
  {
    Icon: BookOpen,
    meta: "2021 – 2022 | State Board",
    title: "Secondary School Leaving Certificate (SSLC - 10th)",
    place: "State Board Examination",
    detail: "Scored 85.2%. Foundational science, mathematics, and analytical reasoning.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Academic Path" subtitle="Where my foundation in AI & engineering was built."
          level="h1" />
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass hover-glow relative overflow-hidden rounded-2xl p-5 sm:p-6 gradient-border"
            >
              <div className="mb-3.5 sm:mb-4 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl" style={{ background: "var(--gradient-aurora)" }}>
                <it.Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{it.meta}</div>
              <h3 className="mt-1 font-display text-base sm:text-lg font-semibold leading-snug">{it.title}</h3>
              <p className="text-xs sm:text-sm text-primary font-medium mt-0.5">{it.place}</p>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{it.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
