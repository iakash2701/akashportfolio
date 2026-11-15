import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/portfolio/Experience";

export const Route = createFileRoute("/_site/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Akash I | Internships in AI, ML & Data Analytics" },
      {
        name: "description",
        content:
          "Internship experience of Akash I across Bold Analytics, Bluestock, UptoSkills, RVNS, ApexPlanet, InternsForge, RINEX, and TANSAM.",
      },
      { property: "og:title", content: "Experience — Akash I | Internships in AI, ML & Data Analytics" },
      {
        property: "og:description",
        content:
          "Internship experience of Akash I across Bold Analytics, Bluestock, UptoSkills, RVNS, ApexPlanet, InternsForge, RINEX, and TANSAM.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/experience" },
      { name: "twitter:title", content: "Experience — Akash I | Internships in AI, ML & Data Analytics" },
      {
        name: "twitter:description",
        content:
          "Internship experience of Akash I across Bold Analytics, Bluestock, UptoSkills, RVNS, ApexPlanet, InternsForge, RINEX, and TANSAM.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/experience" }],
  }),
  component: () => <Experience />,
});
