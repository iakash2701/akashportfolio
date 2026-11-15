import { createFileRoute } from "@tanstack/react-router";
import { Achievements } from "@/components/portfolio/Achievements";
import { Stats } from "@/components/portfolio/Stats";

export const Route = createFileRoute("/_site/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Akash I | Hackathons, Awards & Certifications" },
      {
        name: "description",
        content:
          "Achievements and verified certificates of Akash I — YHACK '26 National Hackathon, IEEEXtreme 19.0, FedEx Hackathon, Podar Hackathon, and academic honors.",
      },
      { property: "og:title", content: "Achievements — Akash I | Hackathons, Awards & Certifications" },
      {
        property: "og:description",
        content:
          "Achievements and verified certificates of Akash I — YHACK '26 National Hackathon, IEEEXtreme 19.0, FedEx Hackathon, Podar Hackathon, and academic honors.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/achievements" },
      { name: "twitter:title", content: "Achievements — Akash I | Hackathons, Awards & Certifications" },
      {
        name: "twitter:description",
        content:
          "Achievements and verified certificates of Akash I — YHACK '26 National Hackathon, IEEEXtreme 19.0, FedEx Hackathon, Podar Hackathon, and academic honors.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/achievements" }],
  }),
  component: () => (
    <>
      <Achievements />
      <Stats />
    </>
  ),
});
