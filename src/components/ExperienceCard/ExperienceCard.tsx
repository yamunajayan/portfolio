import { Card, Heading, Stack } from "@chakra-ui/react";

interface Experience {
  id: number;
  job_title: string;
  company: string;
  start_date: string;
  end_date: string;
  location: string;

  job_description: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  console.log(experience);
  return (
    <div>
      <Stack className="py-2">
        <Card.Root
          size="sm"
          className="p-4 bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100"
        >
          <Card.Header>
            <Heading className="text-3xl">{experience.job_title}</Heading>
            <div className="flex justify-between">
              <div className="flex">
                <h3 className="text-xl">{experience.company}</h3>
                <h3 className="text-xl">, {experience.location}</h3>
              </div>
              <div className="flex">
                <h3 className="text-xl">{experience.start_date} </h3>
                <h3 className="text-xl">-</h3>
                <h3 className="text-xl">{experience.end_date}</h3>
              </div>
            </div>
          </Card.Header>
          <Card.Body color="fg.muted">
            <ul className="list-disc text-gray-100">
              {experience.job_description.map((description, index) => {
                return <li key={index}>{description}</li>;
              })}
            </ul>
          </Card.Body>
        </Card.Root>
      </Stack>
    </div>
  );
};

export default ExperienceCard;
