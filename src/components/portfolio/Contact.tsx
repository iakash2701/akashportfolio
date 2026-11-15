import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Using FormSubmit.co standard endpoint
      const response = await fetch("https://formsubmit.co/ajax/akashmuthu27012007@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Failed to send message. Please reach out via WhatsApp or direct Email.");
      }
    } catch (err) {
      toast.error("Network error. Please try WhatsApp or email directly.");
    } finally {
      setSending(false);
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=919751413133&text=${encodeURIComponent("Hi Akash, I'd like to connect regarding an opportunity.")}`;
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=akashmuthu27012007@gmail.com";

  const cards = [
    { Icon: Mail, label: "Email", value: "akashmuthu27012007@gmail.com", href: gmailUrl },
    { Icon: Phone, label: "Phone", value: "+91 97514 13133", href: "tel:+919751413133" },
    { Icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India", href: null },
    { Icon: MessageCircle, label: "WhatsApp", value: "+91 97514 13133", href: whatsappUrl },
  ];

  return (
    <section id="contact" className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's Build Together" subtitle="Open to internships, collaborations, and freelance work."
          level="h1" />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr,1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3.5 sm:space-y-4"
          >
            {cards.map((c) => {
              const inner = (
                <>
                  <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-lg shrink-0" style={{ background: "var(--gradient-aurora)" }}>
                    <c.Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{c.label}</div>
                    <div className="truncate text-xs sm:text-sm font-medium">{c.value}</div>
                  </div>
                </>
              );
              const cls = "glass hover-glow flex items-center gap-3.5 sm:gap-4 rounded-xl p-3.5 sm:p-4";
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
              ) : (
                <div key={c.label} className={cls}>{inner}</div>
              );
            })}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg, oklch(0.7 0.18 150), oklch(0.65 0.2), 165))", boxShadow: "0 0 25px oklch(0.7 0.18 150 / 0.5)" }}
              >
                <MessageCircle className="h-4 w-4 shrink-0" /> Chat on WhatsApp
              </a>
              
              <a
                href="/Akash_I_Resume.pdf"
                download="Akash_I_Resume.pdf"
                className="flex w-full items-center justify-center gap-2 rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold transition-transform hover:scale-105 active:scale-95 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass space-y-4 rounded-2xl p-5 sm:p-7 gradient-border"
          >
            <input type="hidden" name="_subject" value="New message from your portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {/* Honeypot for basic spam protection */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            <div>
              <label className="mb-1.5 block text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground font-medium" htmlFor="name">Name</label>
              <input id="name" name="name" required className="w-full rounded-lg border border-border bg-input/50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground font-medium" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-border bg-input/50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground font-medium" htmlFor="subject">Subject</label>
              <input id="subject" name="subject" required className="w-full rounded-lg border border-border bg-input/50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground font-medium" htmlFor="msg">Message</label>
              <textarea id="msg" name="msg" required rows={4} className="w-full resize-none rounded-lg border border-border bg-input/50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30" />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-60"
              style={{ background: "var(--gradient-aurora)", boxShadow: "0 0 25px oklch(0.65 0.26 295 / 0.45)" }}
            >
              <Send className="h-4 w-4 shrink-0" /> {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
