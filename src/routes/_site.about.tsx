import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Traits } from "@/components/portfolio/Traits";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — Akash I | AI & ML Student" },
      {
        name: "description",
        content:
          "About Akash I — B.Tech Artificial Intelligence & Machine Learning student at Panimalar Engineering College (GPA 8.22) with 9 internships and 4 hackathons.",
      },
      { property: "og:title", content: "About — Akash I | AI & ML Student" },
      {
        property: "og:description",
        content:
          "About Akash I — B.Tech Artificial Intelligence & Machine Learning student at Panimalar Engineering College (GPA 8.22) with 9 internships and 4 hackathons.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/about" },
      { name: "twitter:title", content: "About — Akash I | AI & ML Student" },
      {
        name: "twitter:description",
        content:
          "About Akash I — B.Tech Artificial Intelligence & Machine Learning student at Panimalar Engineering College (GPA 8.22) with 9 internships and 4 hackathons.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/about" }],
  }),
  component: () => (
    <>
      <About />
      <Traits />
    </>
  ),
});
