import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { 
    company: "Bold Analytics", 
    role: "Data Analyst Intern", 
    year: "2026 (Aug – Oct)",
    location: "Remote",
    points: [
      "Engaged in data cleaning, processing, and transformation of real-world datasets.",
      "Assisted in generating interactive business reports and exploratory data models.",
      "Collaborated with data science teams to optimize dashboard reporting pipelines."
    ],
    tech: ["Python", "Data Cleaning", "Data Analytics", "Power BI"]
  },
  { 
    company: "Bluestock Fintech", 
    role: "Data Analyst Intern", 
    year: "2026 (Jun – Aug)",
    location: "Remote",
    points: [
      "Extracted, cleaned, and analyzed mutual fund and stock market dataset trends.",
      "Built analytics dashboards and data models to evaluate portfolio risk profiles.",
      "Gained hands-on experience in financial market data structures and automated reporting."
    ],
    tech: ["Python", "Pandas", "Financial Analytics", "Power BI"]
  },
  { 
    company: "UptoSkills", 
    role: "Deep Learning Intern", 
    year: "2026 (Mar – Apr)",
    location: "Remote",
    points: [
      "Trained Convolutional Neural Networks for medical imaging datasets.",
      "Achieved 96.4% test accuracy with hyperparameter optimization.",
      "Deployed model weights as a lightweight inference REST API endpoint."
    ],
    tech: ["PyTorch", "TensorFlow", "CNN", "FastAPI"]
  },
  { 
    company: "RVNS Tech", 
    role: "AI & ML Intern", 
    year: "2026 (Feb – Mar)",
    location: "Remote",
    points: [
      "Engineered automated defect-detection pipeline using YOLOv8 architectures.",
      "Reduced inference latency by 35% through FP16 quantization.",
      "Handled annotation, augmentation, and model evaluation end-to-end."
    ],
    tech: ["YOLOv8", "OpenCV", "Quantization", "Python"]
  },
  { 
    company: "ApexPlanet", 
    role: "Web Development Intern", 
    year: "2025 (Nov – Dec)",
    location: "Remote",
    points: [
      "Built responsive client portals using React, TypeScript, and TailwindCSS.",
      "Integrated secure authentication with JWT and protected role-based routing.",
      "Maintained 99.8% uptime during production stress testing phases."
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js"]
  },
  { 
    company: "InternsForge", 
    role: "Cyber Security Intern", 
    year: "2025 (Oct – Nov)",
    location: "Remote",
    points: [
      "Conducted network vulnerability assessments and threat surface mapping.",
      "Drafted remediation policies following NIST cybersecurity framework guidelines.",
      "Simulated red-team brute-force attacks and hardened perimeter defenses."
    ],
    tech: ["Wireshark", "Nmap", "NIST", "Penetration Testing"]
  },
  { 
    company: "RINEX", 
    role: "Artificial Intelligence Intern", 
    year: "2025 (Aug – Sep)",
    location: "Remote",
    points: [
      "Developed NLP pipeline for customer sentiment classification.",
      "Leveraged HuggingFace Transformers for domain-specific fine-tuning.",
      "Integrated pipeline into a Streamlit interactive dashboard."
    ],
    tech: ["HuggingFace", "BERT", "Streamlit", "Scikit-Learn"]
  },
  { 
    company: "TANSAM × Siemens", 
    role: "Data Analytics Intern", 
    year: "2025 (Jun – Jul)",
    location: "Hybrid (Chennai)",
    points: [
      "Analyzed IoT telemetry from industrial sensors to flag equipment anomalies.",
      "Created Power BI dashboards providing real-time visibility into machine health.",
      "Reduced unplanned equipment downtime by 18% through predictive maintenance models."
    ],
    tech: ["Power BI", "IoT Telemetry", "Predictive Maintenance", "SQL"]
  },
  { 
    company: "National Small Industries Corporation (NSIC)", 
    role: "Cyber Security Intern", 
    year: "2025 (Jan – Feb)",
    location: "Chennai",
    points: [
      "Assisted in reviewing enterprise network traffic and firewall rules.",
      "Generated audit reports for management review.",
      "Learned industry-standard data handling and security protocols."
    ],
    tech: ["Power BI", "Excel", "Data Analytics"]
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Internships"
          subtitle="Hands-on roles across AI, ML, Web, Data, and Security."
          level="h1"
        />

        <div className="relative">
          {/* Center rail (desktop) / left rail (mobile) */}
          <div
            className="absolute top-2 bottom-2 w-[2px] left-3 sm:left-4 md:left-1/2 md:-translate-x-1/2"
            style={{
              background: "var(--gradient-aurora)",
              boxShadow: "0 0 12px oklch(0.65 0.26 295 / 0.6)",
            }}
          />

          <div className="space-y-6 sm:space-y-8">
            {items.map((it, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={it.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Dot on rail */}
                  <div
                    className="absolute top-5 z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full left-3 sm:left-4 -translate-x-1/2 md:left-1/2"
                    style={{
                      background: "var(--gradient-aurora)",
                      boxShadow: "0 0 16px oklch(0.85 0.17 200 / 0.8)",
                    }}
                  />

                  <div
                    className={`pl-8 sm:pl-10 md:pl-0 ${
                      isLeft ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"
                    }`}
                  >
                    <motion.div whileHover={{ y: -4 }} className="glass hover-glow rounded-xl p-4 sm:p-5">
                      <div
                        className={`mb-2 flex items-center gap-2 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <Briefcase className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="font-mono text-[11px] sm:text-xs text-muted-foreground">{it.year}</span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-semibold leading-snug">{it.company}</h3>
                      <p className="text-xs sm:text-sm font-medium text-primary mt-0.5">{it.role}</p>
                      
                      <div className={`mt-1 mb-3 flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground ${isLeft ? "md:justify-end" : ""}`}>
                        <MapPin className="h-3 w-3 shrink-0" />
                        {it.location}
                      </div>

                      <ul className={`ml-4 list-outside list-disc space-y-1.5 text-left text-xs sm:text-sm text-muted-foreground ${isLeft ? "md:text-left" : ""}`}>
                        {it.points.map((pt, idx) => (
                          <li key={idx} className="leading-relaxed">{pt}</li>
                        ))}
                      </ul>

                      <div className={`mt-4 flex flex-wrap gap-1.5 sm:gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {it.tech?.map((t) => (
                          <span key={t} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/40">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
