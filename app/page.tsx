import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen p-5 sm:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <Hero />
      <ExperienceSection />
      <ProjectsSection />

      {/* Links */}
      <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-sm">
        <a href="mailto:etiennelee123@gmail.com">etiennelee123@gmail.com</a>
        <a href="https://github.com/EtienneLee" target="_blank">
          github
        </a>
        <a href="https://linkedin.com/in/etienne-lee-" target="_blank">
          linkedin
        </a>
      </footer>
    </main>
  );
}
