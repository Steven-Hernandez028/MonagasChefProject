import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import bg from "./assets/bg.png";
import Aboutme from "./components/Aboutme";
import spoonbg from "./assets/spoon.png";
import "./App.css";
import { CardSection } from "./components/CardSection";

interface HomeSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}
const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  return (
    <>
      <Box
        bg="blue.500"
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        bgImage={bg}
      >
        <Navbar />
        <Heading as="h3" size="xl" color="white" mb="4" ml="8" border={"2px solid #fff"}>
          I'M
        </Heading>
        <Heading as="h1" size="4xl" color="white" mb="4" ml="8" border={"2px solid #f33"}>
          {title}
        </Heading>
        <Text fontSize="lg" color="white" textAlign="center">
          {subtitle}
        </Text>
        <Button
          mt="8"
          colorScheme="blue"
          variant="outline"
          size="lg"
          as="a"

          href={buttonLink}
        >
          {buttonText}
        </Button>
      </Box>

      <Aboutme
        title="Título de la sección"
        subtitle="Subtítulo de la sección"
        paragraph="I strive to provide the highest quality chef-at-home services that
        meet the needs and exceed the expectations of my clients. I take
        pride in using fresh, high-quality ingredients and applying
        innovative techniques to create unique and delicious dishes that
        represent Dominican and international culinary culture. I am
        committed to delivering exceptional service, with attention to
        detail and a focus on client satisfaction. At our core, i believe
        that great food is about more than just nourishment; it's about
        creating lasting memories and fostering meaningful connections.
        That's why i am committed to providing not just great food, but also
        exceptional service and a warm, welcoming atmosphere that makes my
        clients feel at home."
        imageSrc={spoonbg}
      />
    
    <CardSection/>
    </>


  );
};

export default HomeSection;
