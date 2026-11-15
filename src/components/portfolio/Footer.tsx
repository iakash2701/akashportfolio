import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-4 sm:px-6 pb-10 pt-12 sm:pt-16 border-t border-border/50 bg-background/50 backdrop-blur-xl mt-16 sm:mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 mb-8 sm:mb-10">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-display text-lg sm:text-xl font-bold gradient-text">Akash I</h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
              AI & Machine Learning Engineer crafting intelligent, data-driven solutions and modern web applications.
            </p>
            <p className="text-xs sm:text-sm font-medium text-foreground break-all">
              akashmuthu27012007@gmail.com
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Me</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link>
              <Link to="/achievements" className="text-muted-foreground hover:text-primary transition-colors">Achievements</Link>
              <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors col-span-2">Resume</Link>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {[
                { Icon: Github, href: "https://github.com/iakash2701", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/iakash2701/", label: "LinkedIn" },
                { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=akashmuthu27012007@gmail.com", label: "Email" },
                { Icon: MessageCircle, href: "https://wa.me/919751413133", label: "WhatsApp" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-lg glass text-muted-foreground transition-all hover:text-primary hover:scale-110 active:scale-95 hover:shadow-[0_0_18px_oklch(0.85_0.17_200_/_0.5)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 h-px w-full" style={{ background: "var(--gradient-aurora)", opacity: 0.3 }} />
        
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:text-left sm:flex-row">
          <p className="text-[11px] sm:text-xs text-muted-foreground">
            &copy; {currentYear} Akash I. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-muted-foreground">
            Designed &amp; Developed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
