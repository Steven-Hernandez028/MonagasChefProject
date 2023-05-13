import { Box, Flex, Heading, Divider,Image } from "@chakra-ui/react";
import separator from '../../assets/separatorbgwhite.svg'
import Card from "./Card";
import { Separator } from "../miscelanous/Separator";

interface CardSectionProps {
  title: string;
  subtitle: string;
  cardsData: Array<{
    title: string;
    description: string;
    imageSrc: string;
  }>;
}

const CardWrapper: React.FC<CardSectionProps> = ({
  title,
  subtitle,
  cardsData,
}) => {
  return (
    <Flex
      flexDirection="column"
      justify={"center"}
      align={"center"}
    >
      <Heading as="h2" fontSize="4xl" textAlign="center" marginBottom="2rem" fontFamily="title" color="white">
        {title}
    
      </Heading>

        <Separator type = "white"   />
      <Heading
        as="h3"
        size="md"
        marginTop="2rem"
        marginBottom="1rem"
        textAlign="center"

        color="white"
        fontFamily="subtitle"
      >
        {subtitle}
      </Heading>

      <Flex justifyContent="center" flexWrap="wrap">
        {cardsData.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
      </Flex>
    </Flex>
  );
};


export default CardWrapper;