import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectCaseStudy } from "@/components/portfolio/ProjectCaseStudy";
import { projectsData } from "@/data/projects";
import { useEffect } from "react";

export const Route = createFileRoute("/_site/projects/$projectId")({
  loader: ({ params }) => {
    const currentIndex = projectsData.findIndex(p => p.id === params.projectId);
    if (currentIndex === -1) {
      throw notFound();
    }
    
    const project = projectsData[currentIndex];
    const previousId = currentIndex > 0 ? projectsData[currentIndex - 1].id : undefined;
    const nextId = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1].id : undefined;
    
    return { project, previousId, nextId };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project Not Found — Akash I Portfolio" }],
      };
    }
    const { project } = loaderData;
    const canonicalUrl = `https://akashgallery.vercel.app/projects/${params.projectId}`;
    return {
      meta: [
        { title: `${project.title} — Akash I | Project Case Study` },
        { name: "description", content: project.overview },
        { property: "og:title", content: `${project.title} — Akash I | Project Case Study` },
        { property: "og:description", content: project.overview },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: `${project.title} — Akash I | Project Case Study` },
        { name: "twitter:description", content: project.overview },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: ProjectCaseStudyPage,
});

function ProjectCaseStudyPage() {
  const { project, previousId, nextId } = Route.useLoaderData();
  
  // Scroll to top when navigating between projects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return <ProjectCaseStudy project={project} previousId={previousId} nextId={nextId} />;
}
