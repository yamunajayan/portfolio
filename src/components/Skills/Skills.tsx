import skillsData from "../../data/skillsdata.json";

const Skills = () => {
  return (
    <section className="md:flex justify-between font-custom p-4 md:p-8 max-w-6xl lg:mx-auto text-white">
      {Object.entries(skillsData.SKILLS).map(([category, data], index) => {
        return (
          <div key={index} className={` p-4 rounded-2xl`}>
            <h2
              className={`border-white text-center p-4 rounded-2xl ${
                index % 3 === 0
                  ? "bg-purple-400 hover:bg-green-500"
                  : index % 3 === 1
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {category}
            </h2>
            {Object.entries(data).map(([item, values], key) => {
              return (
                <div key={key}>
                  <h3 className="text-sm my-4 py-1 rounded-t-lg text-center bg-gray-600">
                    {item}
                  </h3>
                  <div className="flex flex-wrap">
                    {values.map((value) => {
                      return <p className="text-xs p-2">{value}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
