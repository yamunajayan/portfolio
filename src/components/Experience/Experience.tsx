import ExperienceCard from "../ExperienceCard/ExperienceCard";
import experienceData from "../../data/experience.json";

const Experience = () => {
  return (
    <section
      className="md:flex flex-col justify-center font-custom p-4 md:p-8 max-w-5xl lg:mx-auto text-gray-300"
      id="experience"
    >
      <div className="flex justify-center p-4">
        <h2 className="text-4xl md:text-5xl">EXPERIENCE</h2>
      </div>
      {experienceData.map((experience) => {
        return <ExperienceCard experience={experience} />;
      })}
    </section>
  );
};

export default Experience;