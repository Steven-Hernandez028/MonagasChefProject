// // import spoonbg from "../assets/spoon.png";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

// function Aboutme() {
//   return (
//     <Box py={20} bg="gray.100">
//       <Container maxW="container.xl">
//         <Grid templateColumns={["1fr", "1fr","1fr 2fr"]}  templateRows={["1fr","1fr"]} gap={20}>

//           <Box order={[1,0,0]}>
//             <Text as="h2" fontSize="4xl" fontWeight="bold" mb={4} textAlign={"center"}>
//               Título de la sección
//             </Text>
//             <Text as="h3" fontSize="2xl" fontWeight="semibold" mb={6} textAlign={"center"}>
//               Subtítulo de la sección
//             </Text>
//             <Text fontSize="lg" mb={8} textAlign={"center"}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//               efficitur ligula sit amet ipsum semper consectetur. Donec id
//               sapien eget lorem malesuada dictum. Sed eget magna sed nunc
//               luctus tristique.
//             </Text>
//           </Box>
//           <Image src={spoonbg} alt="Section Image" />

//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Aboutme;

interface SectionProps {
  title: string;
  subtitle: string;
  paragraph: string;
  imageSrc: string;
}

const Aboutme: React.FC<SectionProps> = ({
  title,
  subtitle,
  paragraph,
  imageSrc,
}) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      textAlign={{ base: "center", md: "left" }}
      border="1px solid #000"
      backgroundColor="color.whitebase"
      padding={20}
    >
      <Box flex="4" order={{ base: "2", md: "2" }}>
        {/* <Heading as="h2" marginBottom="1rem">
          {title}
        </Heading>
        <Text marginBottom="1rem">{subtitle}</Text>
        <Text>{paragraph}</Text> */}

        <Text
          as="h2"
          fontSize="4xl"
          fontWeight="bold"
          mb={4}
          textAlign={"center"}
        >
          {title}
        </Text>
        <Text
          as="h3"
          fontSize="2xl"
          fontWeight="semibold"
          mb={6}
          textAlign={"center"}
        >
          {subtitle}
        </Text>
        <Text fontSize="lg" mb={8} textAlign={"center"}>
          {paragraph}
        </Text>
      </Box>

      <Box
        flex={{ base: "0", md: "1" }}
        order={{ base: "2", md: "1" }}
        margin={{ base: "2rem 0", md: "0 1rem 0 0" }}
        border="1px solid #f33"
      >
        <Image
          src={imageSrc}
          className="body__image"
          alt="Section image"
          width={"200px"}
        />
      </Box>
    </Flex>
  );
};

export default Aboutme;
