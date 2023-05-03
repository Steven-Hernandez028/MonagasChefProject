import { Box, Flex, Heading, Divider } from "@chakra-ui/react";
import Card from "./Card";

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
    <Box


    >
      <Heading as="h2" size="lg" textAlign="center" marginBottom="2rem">
        {title}
      </Heading>

      <Divider />
      <Heading
        as="h3"
        size="md"
        marginTop="2rem"
        marginBottom="1rem"
        textAlign="center"
      >
        {subtitle}
      </Heading>

      <Flex justifyContent="center" flexWrap="wrap">
        {cardsData.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
      </Flex>
    </Box>
  );
};


export default CardWrapper;