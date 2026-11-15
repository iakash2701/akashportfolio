import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/portfolio/Education";

export const Route = createFileRoute("/_site/education")({
  head: () => ({
    meta: [
      { title: "Education — Akash I | B.Tech Artificial Intelligence & Machine Learning" },
      {
        name: "description",
        content:
          "Academic background of Akash I — B.Tech in Artificial Intelligence & Machine Learning at Panimalar Engineering College (GPA 8.22).",
      },
      { property: "og:title", content: "Education — Akash I | B.Tech Artificial Intelligence & Machine Learning" },
      {
        property: "og:description",
        content:
          "Academic background of Akash I — B.Tech in Artificial Intelligence & Machine Learning at Panimalar Engineering College (GPA 8.22).",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/education" },
      { name: "twitter:title", content: "Education — Akash I | B.Tech Artificial Intelligence & Machine Learning" },
      {
        name: "twitter:description",
        content:
          "Academic background of Akash I — B.Tech in Artificial Intelligence & Machine Learning at Panimalar Engineering College (GPA 8.22).",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/education" }],
  }),
  component: () => <Education />,
});
