import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { projectsData } from "@/data/projects";

export function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const displayProjects = featuredOnly ? projectsData.slice(0, 3) : projectsData;

  return (
    <section id="projects" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading 
          eyebrow="Projects" 
          title={featuredOnly ? "Featured Projects" : "All Projects"} 
          subtitle="Real builds backed by my GitHub repositories."
          level={featuredOnly ? "h2" : "h1"}
        />

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayProjects.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group glass flex flex-col relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-40 sm:h-44 shrink-0 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${p.accent.replace(")", " / 0.5)")} , transparent 60%), radial-gradient(circle at 70% 70%, oklch(0.65 0.26 295 / 0.4), transparent 60%), oklch(0.16 0.04 270)`,
                    }}
                  />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="relative grid h-full place-items-center">
                    <p.Icon className="h-12 w-12 sm:h-16 sm:w-16 text-foreground/80 drop-shadow-[0_0_20px_oklch(0.85_0.17_200_/_0.6)]" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold leading-snug">{p.title}</h3>
                    <p className="text-xs text-primary font-medium mt-1">Role: {p.role}</p>
                  </div>
                  
                  <div className="space-y-2 text-xs sm:text-sm text-muted-foreground flex-1 leading-relaxed">
                    <p><strong className="text-foreground/80">Problem:</strong> {p.problemStatement}</p>
                    <p><strong className="text-foreground/80">Solution:</strong> {p.objective}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4 mt-auto">
                    <Link to={`/projects/${p.id}`} className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--gradient-aurora)] px-3 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95 shadow-lg">
                      Read Case Study <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {p.demo ? (
                      <>
                        <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary active:scale-95">
                          <ExternalLink className="h-3 w-3 shrink-0" /> Demo
                        </a>
                        <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary active:scale-95">
                          <Github className="h-3 w-3 shrink-0" /> GitHub
                        </a>
                      </>
                    ) : (
                      <a href={p.github} target="_blank" rel="noreferrer" className="col-span-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary active:scale-95">
                        <Github className="h-3 w-3 shrink-0" /> View Repository
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {featuredOnly && (
          <div className="mt-10 sm:mt-12 flex flex-col xs:flex-row justify-center gap-3 sm:gap-4">
            <Link to="/projects" className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/50 text-primary px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground active:scale-95">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://github.com/iakash2701?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold transition-colors hover:border-primary hover:text-primary active:scale-95">
              <Github className="h-4 w-4" /> View GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
