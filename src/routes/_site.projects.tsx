import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/_site/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Akash I | Machine Learning & Computer Vision Builds" },
      {
        name: "description",
        content:
          "Explore machine learning, computer vision, data analytics, and web projects built by Akash I, including RoboNEXUS AI task allocation, industrial safety intelligence, and YOLOv8 detection.",
      },
      { property: "og:title", content: "Projects — Akash I | Machine Learning & Computer Vision Builds" },
      {
        property: "og:description",
        content:
          "Explore machine learning, computer vision, data analytics, and web projects built by Akash I, including RoboNEXUS AI task allocation, industrial safety intelligence, and YOLOv8 detection.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/projects" },
      { name: "twitter:title", content: "Projects — Akash I | Machine Learning & Computer Vision Builds" },
      {
        name: "twitter:description",
        content:
          "Explore machine learning, computer vision, data analytics, and web projects built by Akash I, including RoboNEXUS AI task allocation, industrial safety intelligence, and YOLOv8 detection.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/projects" }],
  }),
  component: () => <Projects />,
});
