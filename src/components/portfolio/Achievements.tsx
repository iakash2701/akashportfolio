import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const certificates = [
  // Global & Major Hackathons
  { src: "/certificates/yhack.jpeg", title: "YHACK '26 National Hackathon", issuer: "IEEE Robotics & Automation Society", date: "Sep 2026", desc: "Participated in the 24-hour national level hackathon at Panimalar Engineering College." },
  { src: "/certificates/ieee-xtreme-hackthon-1.jpg", title: "IEEEXtreme 19.0 Participant", issuer: "IEEE", date: "Oct 2025", desc: "Competed in the 24-hour global coding contest solving complex algorithmic challenges." },
  { src: "/certificates/fedex-hackthon-1.jpg", title: "Smart Logistics Ideathon", issuer: "FedEx", date: "Jul 2025", desc: "Shortlisted among top teams for predictive shipment routing prototype." },
  { src: "/certificates/podar-hackthon-1.jpg", title: "National Level AI Hackathon", issuer: "Podar Learn School", date: "May 2025", desc: "Finalist for AI-based student attendance and emotion recognition system." },

  // Specialized AI, ML & Technical Certifications
  { src: "/certificates/oracle.jpg", title: "Oracle Cloud Infrastructure Gen AI Professional", issuer: "Oracle", date: "2025", desc: "Professional credential demonstrating expertise in generative AI services and LLM deployment." },
  { src: "/certificates/gemini.jpg", title: "Build Real-World AI Apps with Gemini and Imagen", issuer: "Google Cloud", date: "2025", desc: "Hands-on certification for multi-modal AI integration using Google Cloud APIs." },
  { src: "/certificates/cyber-panimalar.jpg", title: "Cyber Security Fundamentals", issuer: "Panimalar Engineering College", date: "2025", desc: "Foundational training in security architecture, risk management, and network defense." },
  { src: "/certificates/springboard.jpg", title: "Machine Learning with Python", issuer: "Springboard", date: "2025", desc: "Comprehensive coursework on supervised, unsupervised, and deep learning architectures." },
  { src: "/certificates/accenture-1.jpg", title: "Developer Virtual Experience", issuer: "Accenture", date: "2025", desc: "Completed engineering simulations covering architecture and debugging." },
  { src: "/certificates/hcl-guvi-certification-1.png", title: "Python Advanced Development", issuer: "HCL & GUVI", date: "2025", desc: "Recognized for high-proficiency problem solving in algorithmic Python." },
  { src: "/certificates/hcl-guvi-certification--2.png", title: "Full Stack Fundamentals", issuer: "HCL & GUVI", date: "2025", desc: "Web stack implementation, database management, and API design." },
  { src: "/certificates/tansam.jpg", title: "Data Analytics Specialization", issuer: "TANSAM × Siemens", date: "2025", desc: "Industry-driven program in smart manufacturing and IoT data analytics." },
  { src: "/certificates/intern-forge-1.jpg", title: "Cybersecurity Analyst Certificate", issuer: "InternsForge", date: "2025", desc: "Verified internship completion in threat analysis and network vulnerability testing." },

  // Entrepreneurship & Foundation Credentials
  { src: "/certificates/wadhwani-1.jpg", title: "Entrepreneurship & Innovation: Ignite", issuer: "Wadhwani Foundation", date: "2025", desc: "Certified for business model innovation and customer problem validation." },
  { src: "/certificates/wadhwani-2.jpg", title: "NextGen Employability Skills", issuer: "Wadhwani Foundation", date: "2025", desc: "Professional communication, strategic leadership, and collaborative execution." },

  // Co-Curricular, Academic & Competitions
  { src: "/certificates/maths-club.jpg", title: "Mathematical Modeling Competition", issuer: "Maths Club", date: "2025", desc: "Recognition in computational and applied mathematical problem solving." },
  { src: "/certificates/tata-quiz-certificate.png", title: "Tata Crucible Campus Quiz", issuer: "Tata Sons", date: "2025", desc: "Participated in the premier national business knowledge competition." },
  { src: "/certificates/campuscrew-100k.png", title: "CampusCrew 100K Contributor", issuer: "CampusCrew", date: "2025", desc: "Awarded for exceptional technical content and developer community contributions." },
  { src: "/certificates/reverb-rush.jpg", title: "Reverb Rush National Event", issuer: "Reverb Rush", date: "2025", desc: "Active participation in inter-collegiate technical symposium." },
  { src: "/certificates/poster.jpg", title: "Technical Poster Presentation", issuer: "PEC Symposium", date: "2025", desc: "Presented research concept on zero-harm industrial safety algorithms." },
  { src: "/certificates/cancer.jpg", title: "Healthcare AI Awareness Initiative", issuer: "Healthcare Outreach", date: "2025", desc: "Community engagement supporting predictive AI healthcare detection." },
  { src: "/certificates/savetha.jpg", title: "Inter-College Technical Meet", issuer: "Saveetha University", date: "2025", desc: "Represented college in coding sprints and algorithmic challenges." },
  { src: "/certificates/savetha2.png", title: "AI Innovation Challenge", issuer: "Saveetha University", date: "2025", desc: "Developed and showcased machine learning model prototype." },
  { src: "/certificates/semseter-1.jpg", title: "First Year Academic Excellence", issuer: "Panimalar Engineering College", date: "2024", desc: "Consistent top-tier academic performance in B.Tech AI & ML curriculum." },
  { src: "/certificates/akash-12th-mark-sheet-1.jpg", title: "Higher Secondary (12th) Certificate", issuer: "State Board", date: "2024", desc: "Completed with distinction in Mathematics and Science." },
  { src: "/certificates/akash-10th-mark-sheet-1.jpg", title: "Secondary School (10th) Certificate", issuer: "State Board", date: "2022", desc: "Academic excellence award." },
];

export function Achievements() {
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayCertificates = showAll ? certificates : certificates.slice(0, 8);

  return (
    <section id="achievements" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Certificates & Recognition"
          subtitle="A collection of certifications, hackathons, and milestones."
          level="h1"
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3.5 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {displayCertificates.map((c, i) => (
            <motion.button
              key={c.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.04 }}
              whileHover={{ y: -4 }}
              onClick={() => setOpen(i)}
              className="glass hover-glow group relative overflow-hidden rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-primary/40 active:scale-95"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={c.src}
                  alt={c.title + " - " + c.issuer + " Certificate"}
                  loading="lazy"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3.5 sm:p-4">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-medium tracking-wider text-primary uppercase">{c.date}</span>
                </div>
                <h3 className="font-display text-xs sm:text-sm font-semibold leading-snug line-clamp-2">{c.title}</h3>
                <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground truncate">{c.issuer}</p>
              </div>
            </motion.button>
          ))}
        </div>
        
        {certificates.length > 8 && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-colors hover:border-primary hover:text-primary active:scale-95"
            >
              {showAll ? "Show Less" : "Load More Certificates"}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-background/85 p-3 sm:p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border"
            >
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur hover:bg-background active:scale-95 shadow-md"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <div className="bg-black/40 flex items-center justify-center p-2">
                <img
                  src={displayCertificates[open].src}
                  alt={displayCertificates[open].title + " - " + displayCertificates[open].issuer + " Certificate"}
                  loading="lazy"
                  className="max-h-[60vh] sm:max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="border-t border-border p-4 sm:p-5">
                <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <h3 className="font-display text-base sm:text-xl font-bold leading-snug">{displayCertificates[open].title}</h3>
                  <span className="self-start shrink-0 rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] sm:text-xs font-semibold text-muted-foreground">{displayCertificates[open].date}</span>
                </div>
                <p className="mb-2 text-xs sm:text-sm font-medium text-primary">{displayCertificates[open].issuer}</p>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{displayCertificates[open].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
