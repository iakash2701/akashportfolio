import { createFileRoute } from "@tanstack/react-router";
import { Expertise } from "@/components/portfolio/Expertise";

export const Route = createFileRoute("/_site/expertise")({
  head: () => ({
    meta: [
      { title: "Technical Expertise — Akash I | AI & Engineering Capabilities" },
      {
        name: "description",
        content:
          "End-to-end expertise in Artificial Intelligence, predictive modeling, Computer Vision, data analytics, and modern web application development.",
      },
      { property: "og:title", content: "Technical Expertise — Akash I | AI & Engineering Capabilities" },
      {
        property: "og:description",
        content:
          "End-to-end expertise in Artificial Intelligence, predictive modeling, Computer Vision, data analytics, and modern web application development.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/expertise" },
      { name: "twitter:title", content: "Technical Expertise — Akash I | AI & Engineering Capabilities" },
      {
        name: "twitter:description",
        content:
          "End-to-end expertise in Artificial Intelligence, predictive modeling, Computer Vision, data analytics, and modern web application development.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/expertise" }],
  }),
  component: () => <Expertise />,
});
