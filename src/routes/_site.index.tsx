import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Akash I | AI & ML Student | Machine Learning, Computer Vision & Data Analytics" },
      {
        name: "description",
        content:
          "Portfolio of Akash I — B.Tech AI & ML student at Panimalar Engineering College developing machine learning, deep learning, computer vision, and data analytics solutions.",
      },
      { property: "og:title", content: "Akash I | AI & ML Student | Machine Learning, Computer Vision & Data Analytics" },
      {
        property: "og:description",
        content:
          "Portfolio of Akash I — B.Tech AI & ML student at Panimalar Engineering College developing machine learning, deep learning, computer vision, and data analytics solutions.",
      },
      { property: "og:url", content: "https://akashgallery.vercel.app/" },
      { name: "twitter:title", content: "Akash I | AI & ML Student | Machine Learning, Computer Vision & Data Analytics" },
      {
        name: "twitter:description",
        content:
          "Portfolio of Akash I — B.Tech AI & ML student at Panimalar Engineering College developing machine learning, deep learning, computer vision, and data analytics solutions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akashgallery.vercel.app/" }],
  }),
  component: () => (
    <>
      <Hero />
    </>
  ),
});
