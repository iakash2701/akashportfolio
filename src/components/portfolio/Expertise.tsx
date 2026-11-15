import { motion } from "framer-motion";
import { Brain, Cpu, Database, Shield, ArrowUpRight, BarChart3, LineChart, Network } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    Icon: Brain,
    title: "AI & Machine Learning Systems",
    color: "oklch(0.85 0.17 200)",
    desc: "End-to-end design and deployment of predictive modeling systems, neural networks, and computer vision pipelines using PyTorch and TensorFlow.",
    bullets: ["CNN & Vision Architectures", "Model Quantization & Inference", "FastAPI Endpoints"],
  },
  {
    Icon: BarChart3,
    title: "Data Analytics & Intelligence",
    color: "oklch(0.75 0.18 150)",
    desc: "Transforming raw data streams and telemetry into actionable business dashboards, executive metrics, and predictive insights.",
    bullets: ["Power BI dashboards", "SQL reporting & ETL", "Exploratory Data Analysis"],
  },
  {
    Icon: Network,
    title: "Web Engineering & Interfaces",
    color: "oklch(0.65 0.26 295)",
    desc: "Crafting modern, accessible, and responsive user interfaces that connect end users seamlessly to intelligent machine learning systems.",
    bullets: ["React & TypeScript", "TailwindCSS Styling", "REST API Integration"],
  },
  {
    Icon: Shield,
    title: "Security & Vulnerability Analysis",
    color: "oklch(0.7 0.2 25)",
    desc: "Applying core cybersecurity defense practices, traffic auditing, and threat mapping to ensure resilient software deployments.",
    bullets: ["Vulnerability assessments", "Network inspection", "NIST framework guidelines"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Expertise" title="Technical Capabilities" subtitle="How I add value and solve problems with data-driven engineering."
          level="h1" />
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass hover-glow relative overflow-hidden rounded-2xl p-5 sm:p-7"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
                style={{ background: s.color.replace(")", " / 0.3)") }}
              />
              <div className="relative">
                <div className="mb-3 sm:mb-4 flex items-center justify-between">
                  <div
                    className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl"
                    style={{ background: s.color.replace(")", " / 0.18)"), border: `1px solid ${s.color.replace(")", " / 0.35)")}` }}
                  >
                    <s.Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: s.color }} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground/60" />
                </div>
                <h3 className="font-display text-base sm:text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {s.bullets.map((b) => (
                    <span
                      key={b}
                      className="rounded-md border border-border/60 bg-muted/30 px-2 py-0.5 font-mono text-[10px] sm:text-xs text-muted-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
