import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../../data/projects.json";
import { RefObject } from "react";

interface RefProps {
  refProp: RefObject<HTMLElement>;
}

const Projects = ({ refProp }: RefProps) => {
  console.log(projectData);
  return (
    <section
      className="md:flex flex-col justify-center font-custom p-4 md:p-8 max-w-5xl lg:mx-auto text-gray-300"
      id="projects"
      ref={refProp}
    >
      <div className="flex justify-center px-4 py-8">
        <h2 className="text-4xl md:text-5xl">PROJECTS</h2>
      </div>
      <div className="md:flex flex-wrap gap-3 justify-between">
        {projectData.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
