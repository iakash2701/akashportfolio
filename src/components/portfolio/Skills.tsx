import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Globe, Wrench, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    title: "AI & Machine Learning",
    Icon: Cpu,
    color: "oklch(0.85 0.17 200)",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLOv8", "Scikit-Learn", "Hugging Face", "Deep Learning", "CNNs", "XAI", "Pandas", "NumPy"],
  },
  {
    title: "Data Analytics & BI",
    Icon: Database,
    color: "oklch(0.75 0.18 150)",
    skills: ["Power BI", "SQL", "MySQL", "Excel Advanced", "Data Modeling", "DAX", "Predictive Analytics", "Exploratory Data Analysis"],
  },
  {
    title: "Web & Full Stack",
    Icon: Globe,
    color: "oklch(0.65 0.26 295)",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Node.js", "FastAPI", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    Icon: Wrench,
    color: "oklch(0.8 0.15 80)",
    skills: ["Git & GitHub", "Vercel", "Linux", "VS Code", "Jupyter Notebook", "Postman", "Streamlit"],
  },
  {
    title: "Cyber Security & Fundamentals",
    Icon: Shield,
    color: "oklch(0.7 0.2 25)",
    skills: ["Network Security", "Wireshark", "Nmap", "Vulnerability Assessment", "NIST Framework", "Information Security"],
  },
  {
    title: "Core Competencies",
    Icon: Terminal,
    color: "oklch(0.7 0.2 250)",
    skills: ["Problem Solving", "Algorithm Design", "Mathematical Modeling", "Research & Documentation", "Agile Collaboration"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="Tech Arsenal" subtitle="Tools and frameworks I use to build, analyze, and secure."
          level="h1" />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass relative overflow-hidden rounded-2xl p-5 sm:p-7"
              style={{ boxShadow: `inset 0 0 0 1px oklch(1 0 0 / 0.06)` }}
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
                style={{ background: `${g.color.replace(")", " / 0.3)")}` }}
              />
              <div className="relative">
                <div className="mb-4 sm:mb-6 flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl shrink-0"
                    style={{ background: `${g.color.replace(")", " / 0.2)")}`, border: `1px solid ${g.color.replace(")", " / 0.4)")}` }}
                  >
                    <g.Icon className="h-5 w-5" style={{ color: g.color }} />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold leading-snug">{g.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {g.skills.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="rounded-full border px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium transition-all hover:bg-muted/50"
                      style={{ 
                        borderColor: `${g.color.replace(")", " / 0.3)")}`,
                        background: `${g.color.replace(")", " / 0.05)")}`,
                        color: `${g.color.replace(")", " / 0.95)")}`
                      }}
                    >
                      {s}
                    </motion.span>
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
