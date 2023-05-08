import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import bg2 from "../../assets/logobg.png";
import { MdCall } from "react-icons/md";

interface SectionProps {
  title: string;
  subtitle: string;
  paragraph: string;
  imageSrc: string;
}

function Background() {
  return (
    <Box
      backgroundImage={`url(${bg2})`}
      position="absolute"
      backgroundSize="cover"
      width="100%"
      height="100%"
      filter="blur(1px)  opacity(20%)"
      backgroundRepeat="no-repeat"
      boxShadow="inset 10px 10px 50px rgba(0, 0, 0, .5)"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={"1"}
    ></Box>
  );
}

const Aboutme: React.FC<SectionProps> = ({
  title,
  subtitle,
  paragraph,
  imageSrc,
}) => (
  <Flex
    direction={{ base: "column", md: "row" }}
    alignItems={{ base: "center", md: "flex-start" }}
    textAlign={{ base: "center", md: "left" }}
    position="relative"
    backgroundColor="color.whitebase"
    padding={20}
  >
    <Flex
      flex="5"
      order={{ base: "2", md: "2" }}
      zIndex={5000}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Text
        as="h2"
        fontSize="4xl"
        fontWeight="bold"
        mb={4}
        textAlign={"center"}
        fontFamily="title"
      >
        {title}
      </Text>
      //TODO aplicar el separador color negro
      <Text
        as="h3"
        fontSize="xl"
        fontWeight="semibold"
        mb={6}
        textAlign={"center"}
        fontFamily="subtitle"
      >
        {subtitle}
      </Text>
      <Text
        fontSize="lg"
        mb={8}
        textAlign={"center"}
        fontFamily="subtitle"
        zIndex="500"
        width={"80%"}

      >
        {paragraph}
      </Text>

      <Flex width="100%" position="relative" justify={"center"}>
        <Button
          bg="color.primary"
          position="absolute"
          size="lg"
          fontFamily="subtitle"
          mt="0"
          _hover={{ bg: "#bb7848" }}
          borderRadius={50}
          color="white"
        >
          Read More
        </Button>
      </Flex>
    </Flex>

    <Box
      flex={{ base: "0", md: "1" }}
      order={{ base: "2", md: "1" }}
      margin={{ base: "2rem 0", md: "0 1rem 0 0" }}
    >
      <Image
        src={imageSrc}
        className="body__image"
        alt="Section image"
        width={"200px"}
      />
    </Box>

    <Background />
  </Flex>
);

export default Aboutme;
