import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const certs = [
  { title: "Deep Learning Specialization", issuer: "UptoSkills", tag: "AI" },

  { title: "Web Development", issuer: "ApexPlanet", tag: "Web" },
  { title: "Cyber Security Essentials", issuer: "InternsForge", tag: "Security" },
  { title: "Artificial Intelligence", issuer: "RINEX", tag: "AI" },
  { title: "Data Analytics", issuer: "TANSAM × Siemens", tag: "Data" },
  { title: "IEEEXtreme 19.0", issuer: "IEEE", tag: "Contest" },
  { title: "Power BI Mastery", issuer: "Coursera", tag: "Data" },
  { title: "TensorFlow Developer", issuer: "Google", tag: "AI" },
];

export function Certifications() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certifications" title="Credentials" subtitle="A growing collection of verified achievements." />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {certs.map((c, i) => (
            <motion.button
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setOpen(i)}
              className="glass hover-glow mb-5 block w-full break-inside-avoid rounded-xl p-5 text-left transition-transform hover:scale-[1.02]"
              style={{ aspectRatio: i % 3 === 0 ? "4/3" : i % 3 === 1 ? "1/1" : "5/4" }}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-lg" style={{ background: "var(--gradient-aurora)" }}>
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {c.tag}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-background/80 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-lg rounded-2xl p-8"
            >
              <button onClick={() => setOpen(null)} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <div className="mb-4 grid h-16 w-16 place-items-center rounded-xl" style={{ background: "var(--gradient-aurora)" }}>
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold">{certs[open].title}</h3>
              <p className="mt-1 text-muted-foreground">Issued by {certs[open].issuer}</p>
              <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground">
                Certificate preview placeholder — upload an image for full preview.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
