import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ParticleField } from "@/components/portfolio/ParticleField";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/_site")({
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <div className="relative min-h-screen overflow-x-clip w-full">
      <ParticleField />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
