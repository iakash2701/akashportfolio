import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, FolderOpen, Mail, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";

const EMAIL = "akashmuthu27012007@gmail.com";
const WHATSAPP = "919751413133";
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent("Hi Akash, I visited your portfolio.")}`;

function HelloTyping() {
  const target = "HELLO";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayed(target.slice(0, index));
      if (index >= target.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block gradient-text font-bold tracking-normal">
      {displayed}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 mesh-bg" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-48 w-48 sm:h-72 sm:w-72 animate-float rounded-full bg-cyan/30 blur-3xl" style={{ background: "oklch(0.85 0.17 200 / 0.25)" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[15%] h-56 w-56 sm:h-96 sm:w-96 animate-float rounded-full blur-3xl" style={{ background: "oklch(0.65 0.26 295 / 0.25)", animationDelay: "2s" }} />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto lg:mx-0 lg:justify-self-start"
        >
          <div className="relative">
            <div className="absolute inset-0 -m-3 sm:-m-4 animate-glow rounded-full" style={{ background: "var(--gradient-aurora)", filter: "blur(40px)", opacity: 0.5 }} />
            <div className="relative rounded-full p-[2.5px] sm:p-[3px]" style={{ background: "var(--gradient-aurora)" }}>
              <div className="rounded-full bg-background p-1 sm:p-1.5">
                <img
                  src={profile}
                  alt="Akash I — AI & Machine Learning Student"
                  fetchPriority="high"
                  width={400}
                  height={400}
                  className="h-56 w-56 xs:h-64 xs:w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-4 sm:space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] sm:text-xs font-medium tracking-wide text-muted-foreground text-left max-w-full">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" />
            <span className="leading-tight">Open to AI/ML internships and research collaborations</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
            Hi, I'm <span className="gradient-text">Akash.</span>
          </h1>
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground/90 leading-snug">
            <HelloTyping /> & Machine Learning undergraduate building practical computer vision, analytics, predictive-maintenance and web applications.
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3 pt-2 lg:justify-start">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50"
              style={{ background: "var(--gradient-aurora)" }}
            >
              <FolderOpen className="h-4 w-4 shrink-0" /> View Projects
            </Link>
            <a
              href="/Akash_I_Resume.pdf"
              download="Akash_I_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold transition-all hover:scale-105 hover:border-primary/50"
            >
              <Download className="h-4 w-4 shrink-0" /> Download Resume
            </a>
            <a
              href="/Akash_I_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold transition-all hover:border-border/80"
            >
              View Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold transition-all hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4 shrink-0" /> Contact Me
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 lg:justify-start">
            {[
              { Icon: Github, href: "https://github.com/iakash2701", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/iakash2701/", label: "LinkedIn" },
              { Icon: Mail, href: gmailUrl, label: "Gmail" },
              { Icon: MessageCircle, href: whatsappUrl, label: "WhatsApp" },
              { Icon: Instagram, href: "https://instagram.com/theiakash", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl glass text-muted-foreground transition-all hover:text-primary hover:scale-110 hover:shadow-[0_0_20px_oklch(0.85_0.17_200_/_0.5)] active:scale-95"
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
