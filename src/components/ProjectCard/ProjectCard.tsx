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
    <Card.Root flexDirection="column" overflow="hidden" maxW="30%">
      <Image
        objectFit="cover"
        src={project.projectPhoto}
        alt="Caffe Latte"
        className="opacity-70 hover:opacity-100"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{project.projectName}</Card.Title>
          <Card.Description>{project.description}</Card.Description>
          <HStack mt="4" className="flex flex-wrap">
            {project.tools.map((tool, index) => {
              return <Badge key={index}>{tool}</Badge>;
            })}
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Link to={project.githubLink}>
            <Button bg="blue.300" className="px-2">
              Github
            </Button>
          </Link>
          <Link to={project.websiteLink}>
            <Button bg="blue.300" className="px-2">
              Website
            </Button>
          </Link>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default ProjectCard;
