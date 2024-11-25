import skillsData from "../../data/skillsdata.json";

const Skills = () => {
  return (
    <section
      className="flex flex-col justify-center font-custom p-4 md:p-8 max-w-5xl lg:mx-auto text-gray-300"
      id="skills"
    >
      <div className="flex justify-center p-4">
        <h2 className="text-4xl md:text-5xl">SKILLS</h2>
      </div>
      <div className="md:flex">
        {Object.entries(skillsData.SKILLS).map(([category, data], index) => {
          return (
            <div key={index} className={`p-3 rounded-2xl`}>
              <h2
                className={`border-white text-center p-4 rounded-2xl ${
                  index % 3 === 0
                    ? "bg-purple-500 hover:bg-purple-700 bg-gradient-to-b from-purple-900 to-purple-500"
                    : index % 3 === 1
                    ? "bg-blue-500 hover:bg-blue-700 bg-gradient-to-b from-blue-900 to-blue-400"
                    : "bg-red-500 hover:bg-red-700 bg-gradient-to-b from-red-900 to-red-400"
                }`}
              >
                {category}
              </h2>
              {Object.entries(data).map(([item, values], key) => {
                return (
                  <div key={key}>
                    <h3 className="text-sm lg:text-base my-4 py-1 rounded-t-lg text-center bg-gray-600">
                      {item}
                    </h3>
                    <div className="flex flex-wrap">
                      {values.map((value, index) => {
                        return (
                          <p className="text-xs lg:text-base p-2" key={index}>
                            {value}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
