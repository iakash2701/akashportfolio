import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  level = "h2",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  level?: "h1" | "h2";
}) {
  const HeadingTag = level;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mb-10 sm:mb-14 max-w-2xl text-center px-1"
    >
      <div className="mb-3 sm:mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-primary">
        {eyebrow}
      </div>
      <HeadingTag className="font-display text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight leading-tight">
        <span className="gradient-text">{title}</span>
      </HeadingTag>
      {subtitle && <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
