import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
interface Project {
  id: number;
  projectName: string;
  projectPhoto: string;
  tools: string[];
  githubLink: string;
  websiteLink: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card.Root
      flexDirection="column"
      overflow="hidden"
      className="md:w-[30%] bg-gradient-to-b from-blue-900 to-gray-900 text-gray-100 hover:border-white hover:border-2"
    >
      <Image
        objectFit="cover"
        src={project.projectPhoto}
        alt="Caffe Latte"
        className="opacity-70 hover:opacity-100 h-[200px] w-full object-cover"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2" className="text-xl">
            {project.projectName}
          </Card.Title>
          <Card.Description className="text-gray-300">
            {project.description}
          </Card.Description>
          <HStack mt="4" className="flex flex-wrap">
            {project.tools.map((tool, index) => {
              return <Badge key={index}>{tool}</Badge>;
            })}
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Link to={project.githubLink}>
            <Button bg="blue.500" className="px-2 hover:bg-blue-700">
              Github
            </Button>
          </Link>
          {project.websiteLink && (
            <Link to={project.websiteLink}>
              <Button bg="blue.500" className="px-2 hover:bg-blue-700">
                Website
              </Button>
            </Link>
          )}
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default ProjectCard;
