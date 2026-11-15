import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/portfolio/Skills";

export const Route = createFileRoute("/_site/skills")({
  head: () => ({
    meta: [
      { title: "Technical Skills — Akash I | AI, ML, Python, SQL & Power BI" },
      {
        name: "description",
        content:
          "Technical skill set of Akash I — Machine Learning, Deep Learning, Computer Vision, Python, TensorFlow, PyTorch, React, SQL, and Power BI.",
      },
      { property: "og:title", content: "Technical Skills — Akash I | AI, ML, Python, SQL & Power BI" },
      {
        property: "og:description",
        content:
          "Technical skill set of Akash I — Machine Learning, Deep Learning, Computer Vision, Python, TensorFlow, PyTorch, React, SQL, and Power BI.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/skills" },
      { name: "twitter:title", content: "Technical Skills — Akash I | AI, ML, Python, SQL & Power BI" },
      {
        name: "twitter:description",
        content:
          "Technical skill set of Akash I — Machine Learning, Deep Learning, Computer Vision, Python, TensorFlow, PyTorch, React, SQL, and Power BI.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/skills" }],
  }),
  component: () => <Skills />,
});
