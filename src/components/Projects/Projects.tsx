import ProjectCard from "../ProjectCard/ProjectCard";
const Projects = () => {
  return (
    <section className="md:flex flex-col justify-center font-custom p-4 md:p-8 max-w-5xl lg:mx-auto text-gray-300">
      <div className="flex justify-center p-4">
        <h2 className="text-4xl md:text-5xl">PROJECTS</h2>
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
