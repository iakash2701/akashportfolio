import { motion } from "framer-motion";
import { Code2, Database, Cpu, Network, Brain, Sparkles, GraduationCap, CheckCircle2, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";

const stats = [
  { label: "GPA", value: "8.22" },
  { label: "Internships", value: "9" },
  { label: "Hackathons", value: "4" },
  { label: "Projects", value: "12+" },
];

const floatIcons = [Code2, Database, Cpu, Network, Brain, Sparkles];

export function About({ previewOnly = false }: { previewOnly?: boolean }) {
  return (
    <section id="about" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting Intelligence"
          subtitle="A snapshot of who I am and what drives me."
          level="h1"
        />

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass relative overflow-hidden rounded-2xl p-5 sm:p-8 gradient-border md:p-10"
          >
            {floatIcons.map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -15, 0], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                className="absolute text-primary/30 hidden sm:block pointer-events-none"
                style={{ left: `${8 + i * 14}%`, top: `${15 + (i % 3) * 28}%` }}
              >
                <Icon className="h-8 w-8" />
              </motion.div>
            ))}

            <div className="relative space-y-6">
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground sm:text-lg">
                I am a B.Tech Artificial Intelligence and Machine Learning student at Panimalar Engineering College with hands-on experience in machine learning, deep learning, data analytics and web development. I enjoy taking projects from data preparation and model development to deployment and user-facing dashboards.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="glass rounded-xl p-3 sm:p-4 text-center">
                    <div className="font-display text-xl sm:text-2xl font-bold gradient-text">{s.value}</div>
                    <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick pitch */}
              <div className="rounded-xl border border-border/50 bg-background/50 p-4 sm:p-6 space-y-4">
                <h3 className="font-display text-lg sm:text-xl font-bold">Why Hire Me?</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>End-to-End Execution:</strong> From dataset gathering and preprocessing to deploying responsive web interfaces.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Fast Learner:</strong> Completed 9 diverse internships across AI, data analytics, web, and cybersecurity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Collaborative:</strong> Active hackathon competitor with proven track record in fast-paced problem solving.</span>
                  </li>
                </ul>
              </div>

              {/* Education block */}
              <div className="rounded-xl border border-border/50 bg-background/50 p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl font-bold mb-4">Education</h3>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-2">
                      <h4 className="font-semibold text-base sm:text-lg leading-snug">B.Tech Artificial Intelligence and Machine Learning</h4>
                      <span className="self-start shrink-0 font-mono text-[10px] sm:text-xs text-primary bg-primary/10 px-2 py-0.5 sm:py-1 rounded">2024 - 2028</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">Panimalar Engineering College, Chennai</p>
                    <p className="text-xs sm:text-sm text-primary font-semibold mt-1">CGPA: 8.22</p>
                  </div>
                </div>
              </div>

              {!previewOnly && (
                <div className="pt-2 flex justify-center">
                  <Link
                    to="/experience"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-colors hover:border-primary hover:text-primary active:scale-95"
                  >
                    <Award className="h-4 w-4 shrink-0" /> View My Journey & Experience
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
