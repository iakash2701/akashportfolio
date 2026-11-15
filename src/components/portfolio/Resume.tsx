import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const RESUME_URL = "/Akash_I_Resume.pdf";

export function Resume() {
  return (
    <section id="resume" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Resume" title="Preview & Download" subtitle="Take a look at my resume, then grab a copy."
          level="h1" />

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          >
            <Eye className="h-4 w-4 shrink-0" /> View Resume
          </a>
          <a
            href={RESUME_URL}
            download="Akash-I-Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95"
            style={{ background: "var(--gradient-aurora)" }}
          >
            <Download className="h-4 w-4 shrink-0" /> Download Resume
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass gradient-border relative overflow-hidden rounded-2xl p-1.5 sm:p-2"
        >
          <iframe 
            src={`${RESUME_URL}#toolbar=0&view=FitH`} 
            title="Resume Preview"
            className="h-[65vh] sm:h-[80vh] w-full rounded-xl border-0 bg-background"
          />
        </motion.div>
      </div>
    </section>
  );
}
