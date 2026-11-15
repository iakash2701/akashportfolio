import { createFileRoute } from "@tanstack/react-router";
import { Resume } from "@/components/portfolio/Resume";

export const Route = createFileRoute("/_site/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Akash I | AI & Machine Learning Engineer" },
      {
        name: "description",
        content:
          "Download and preview the professional resume of Akash I — AI & Machine Learning student with experience in Python, computer vision, data analytics, and full stack development.",
      },
      { property: "og:title", content: "Resume — Akash I | AI & Machine Learning Engineer" },
      {
        property: "og:description",
        content:
          "Download and preview the professional resume of Akash I — AI & Machine Learning student with experience in Python, computer vision, data analytics, and full stack development.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/resume" },
      { name: "twitter:title", content: "Resume — Akash I | AI & Machine Learning Engineer" },
      {
        name: "twitter:description",
        content:
          "Download and preview the professional resume of Akash I — AI & Machine Learning student with experience in Python, computer vision, data analytics, and full stack development.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/resume" }],
  }),
  component: () => <Resume />,
});
