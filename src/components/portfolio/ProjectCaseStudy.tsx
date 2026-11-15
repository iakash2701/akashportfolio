import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Layers, Target, Database, Activity, Code2, AlertTriangle, Lightbulb } from "lucide-react";
import { Link } from "@tanstack/react-router";

export interface ProjectData {
  id: string;
  title: string;
  overview: string;
  problemStatement: string;
  objective: string;
  role: string;
  dataset: string;
  architecture: string;
  tech: string[];
  developmentProcess: string;
  technicalApproach: string;
  results: string;
  challenges: string;
  solutions: string;
  keyLearning: string;
  github: string;
  demo: string | null;
  Icon: any;
  accent: string;
}

export function ProjectCaseStudy({ project, previousId, nextId }: { project: ProjectData, previousId?: string, nextId?: string }) {
  const accentColor = project.accent || "oklch(0.65 0.26 295)";

  return (
    <article className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-30" />
      
      <div className="mx-auto max-w-4xl relative z-10">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8 active:scale-95">
          <ArrowLeft className="h-4 w-4 shrink-0" /> Back to Projects
        </Link>
        
        {/* 1. Project Hero */}
        <header className="mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-6">
            <div className="p-3.5 sm:p-4 rounded-2xl glass w-fit" style={{ background: `linear-gradient(135deg, ${accentColor.replace(')', ' / 0.2)')}, transparent)` }}>
              <project.Icon className="h-8 w-8 sm:h-10 sm:w-10 text-foreground" />
            </div>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">{project.title}</h1>
          </motion.div>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            {project.overview}
          </motion.p>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3 sm:gap-4">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95 shadow-lg" style={{ background: "var(--gradient-aurora)", boxShadow: `0 0 20px ${accentColor.replace(')', ' / 0.3)')}` }}>
                <ExternalLink className="h-4 w-4 shrink-0" /> Live Demo
              </a>
            )}
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl glass border border-border px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-colors hover:border-primary hover:text-primary active:scale-95">
              <Github className="h-4 w-4 shrink-0" /> View Source
            </a>
          </motion.div>
        </header>

        {/* 2. Quick Overview Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="glass p-5 sm:p-6 rounded-2xl border-l-4" style={{ borderColor: accentColor }}>
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-1">My Role</h3>
            <p className="font-semibold text-base sm:text-lg">{project.role}</p>
          </div>
          <div className="glass p-5 sm:p-6 rounded-2xl border-l-4 sm:col-span-2" style={{ borderColor: accentColor }}>
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-lg bg-background/50 border border-border px-2.5 py-1 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. Deep Dive Sections */}
        <div className="space-y-8 sm:space-y-12">
          {/* Problem & Objective */}
          <Section icon={<Target className="h-5 w-5 text-primary" />} title="Problem & Objective">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass p-5 sm:p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-destructive tracking-wider uppercase">The Problem</span>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.problemStatement}</p>
              </div>
              <div className="glass p-5 sm:p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-primary tracking-wider uppercase">The Goal</span>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.objective}</p>
              </div>
            </div>
          </Section>

          {/* Data & Architecture */}
          <Section icon={<Database className="h-5 w-5 text-accent" />} title="Data & Architecture">
            <div className="glass p-5 sm:p-6 rounded-2xl space-y-4">
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-1.5">Dataset / Inputs</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.dataset}</p>
              </div>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-sm sm:text-base mb-1.5">System Architecture</h4>
                <div className="p-3 sm:p-4 rounded-xl bg-background/50 font-mono text-xs sm:text-sm text-primary overflow-x-auto leading-relaxed whitespace-pre-wrap sm:whitespace-normal">
                  {project.architecture}
                </div>
              </div>
            </div>
          </Section>

          {/* Engineering Workflow */}
          <Section icon={<Code2 className="h-5 w-5 text-emerald-400" />} title="Engineering Workflow">
            <div className="glass p-5 sm:p-6 rounded-2xl space-y-6">
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1.5">Development Process</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.developmentProcess}</p>
              </div>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-base sm:text-lg mb-1.5">Technical Approach</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.technicalApproach}</p>
              </div>
            </div>
          </Section>

          {/* Challenges & Solutions */}
          <Section icon={<AlertTriangle className="h-5 w-5 text-amber-400" />} title="Challenges & Solutions">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass p-5 sm:p-6 rounded-2xl border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <span className="h-2 w-2 rounded-full bg-destructive" /> Challenge
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.challenges}</p>
              </div>
              <div className="glass p-5 sm:p-6 rounded-2xl border border-emerald-500/20">
                <h4 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Solution
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.solutions}</p>
              </div>
            </div>
          </Section>

          {/* Results & Key Learning */}
          <Section icon={<Lightbulb className="h-5 w-5 text-yellow-300" />} title="Impact & Key Learning">
            <div className="glass p-5 sm:p-6 rounded-2xl space-y-4">
              <div>
                <h4 className="font-display text-lg sm:text-xl font-semibold mb-2">Key Results</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.results}</p>
              </div>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-base sm:text-lg mb-1.5 text-primary">Key Learning</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.keyLearning}</p>
              </div>
            </div>
          </Section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-border flex justify-between items-center gap-4 text-xs sm:text-sm">
          {previousId ? (
            <Link to={`/projects/${previousId}`} className="font-semibold text-muted-foreground hover:text-primary transition-colors active:scale-95">
              &larr; Previous Project
            </Link>
          ) : <div />}
          
          {nextId ? (
            <Link to={`/projects/${nextId}`} className="font-semibold text-muted-foreground hover:text-primary transition-colors active:scale-95 text-right">
              Next Project &rarr;
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
        <div className="p-1.5 sm:p-2 rounded-lg glass">{icon}</div>
        <h2 className="font-display text-xl sm:text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
