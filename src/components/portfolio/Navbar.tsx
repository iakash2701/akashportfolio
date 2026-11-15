import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Experience", to: "/experience" as const },
  { label: "About", to: "/about" as const },
  { label: "Achievements", to: "/achievements" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.documentElement.classList.remove("light");
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="mx-auto flex h-[68px] sm:h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg sm:text-xl font-bold tracking-tight" aria-label="Home">
          <span className="gradient-text">Akash I</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-lg px-5 py-2 text-sm font-semibold transition-all border ${
                  active 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          
          <Link
            to="/resume"
            className="ml-1 relative rounded-lg px-5 py-2 text-sm font-semibold transition-all bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20"
          >
            Resume
          </Link>
        </div>

        <button 
          className="grid h-10 w-10 place-items-center rounded-lg border border-border/40 glass text-foreground lg:hidden transition-colors hover:border-primary active:scale-95" 
          onClick={() => setOpen(!open)} 
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border/60 bg-background/95 backdrop-blur-2xl shadow-2xl lg:hidden max-h-[calc(100vh-68px)] overflow-y-auto"
        >
          <div className="flex flex-col gap-1.5 p-4">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active 
                      ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20" 
                      : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              to="/resume"
              className="mt-2 rounded-xl px-4 py-3 text-left text-sm font-semibold text-primary bg-primary/15 border border-primary/30 transition-colors hover:bg-primary/25"
            >
              Resume Page
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
