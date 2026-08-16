import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-32"
    >
      <SectionLabel number="01" label="Selected Work" withRule />

      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          reverse={i % 2 === 1}
          {...project}
        />
      ))}
    </section>
  );
}
