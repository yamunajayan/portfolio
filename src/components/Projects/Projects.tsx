import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../../data/projects.json";

const Projects = () => {
  console.log(projectData);
  return (
    <section
      className="md:flex flex-col justify-center font-custom p-4 md:p-8 max-w-5xl lg:mx-auto text-gray-300"
      id="projects"
    >
      <div className="flex justify-center p-4">
        <h2 className="text-4xl md:text-5xl">PROJECTS</h2>
      </div>
      <div className="md:flex flex-wrap gap-3 justify-center">
        {projectData.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
