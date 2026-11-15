import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Akash I | Get in Touch" },
      {
        name: "description",
        content:
          "Connect with Akash I for AI/ML internships, research collaborations, data analytics, or engineering projects. Email, LinkedIn, WhatsApp, and GitHub.",
      },
      { property: "og:title", content: "Contact — Akash I | Get in Touch" },
      {
        property: "og:description",
        content:
          "Connect with Akash I for AI/ML internships, research collaborations, data analytics, or engineering projects. Email, LinkedIn, WhatsApp, and GitHub.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/contact" },
      { name: "twitter:title", content: "Contact — Akash I | Get in Touch" },
      {
        name: "twitter:description",
        content:
          "Connect with Akash I for AI/ML internships, research collaborations, data analytics, or engineering projects. Email, LinkedIn, WhatsApp, and GitHub.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/contact" }],
  }),
  component: () => <Contact />,
});
