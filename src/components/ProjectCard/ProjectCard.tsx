import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import projectPhoto from "../../assets/photos/travel-itinerary-builder.png";

const ProjectCard = () => (
  <Card.Root flexDirection="column" overflow="hidden" maxW="30%">
    <Image
      objectFit="cover"
      src={projectPhoto}
      alt="Caffe Latte"
      className="opacity-40"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">LaVoyage Itinerary Builder</Card.Title>
        <Card.Description>
          An AI-powered app to create personalized travel itineraries based on
          destinations, days, and transportation options.
        </Card.Description>
        <HStack mt="4" className="flex flex-wrap">
          <Badge>React</Badge>
          <Badge>JavaScript</Badge>
          <Badge>Express.js</Badge>
          <Badge>Node.Js</Badge>
          <Badge>HTML</Badge>
          <Badge>CSS</Badge>
          <Badge>OpenAI Api</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button bg="blue.300" className="px-2">
          Github
        </Button>
        <Button bg="blue.300" className="px-2">
          Website
        </Button>
      </Card.Footer>
    </Box>
  </Card.Root>
);

export default ProjectCard;
