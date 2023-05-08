import { Box, Container } from '@chakra-ui/react'
import CardWrapper from './CardWrapper'
import cardsbg from '../../assets/cardbg2.jpg'


const cardsData = [
    {
      title: "Card 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis tristique magna, ac bibendum eros aliquam nec.",
      imageSrc: "https://via.placeholder.com/500x300",
    },
    {
      title: "Card 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis tristique magna, ac bibendum eros aliquam nec.",
      imageSrc: "https://via.placeholder.com/500x300",
    },
    {
      title: "Card 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis tristique magna, ac bibendum eros aliquam nec.",
      imageSrc: "https://via.placeholder.com/500x300",
    },
  ];

  

function Background()  {
  return (
    <Box
      backgroundImage={`url(${cardsbg})`}
      backgroundSize="cover"
      width = "100%"
      height="100%"
      filter="blur(.5px) grayscale(20%) brightness(.6)"
   
      backgroundRepeat="no-repeat"
      boxShadow="inset 10px 10px 50px rgba(0, 0, 0, .5)"

      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-1"
    >

    </Box>
  );
}

export const CardSection = () => {
  return (
    <Box textAlign="center" fontSize="xl" mb="100px" padding={20} position="relative">
      <Background/>
    <Container maxW="container.xl" >
      <CardWrapper
        title="My Skills"
        subtitle="Culinary prowess on display: My Skills in the Kitchen   "
        cardsData={cardsData}
      />
    </Container>
  </Box>

    )
}
