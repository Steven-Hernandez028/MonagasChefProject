import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import CardWrapper from './CardWrapper'
import cardsbg from '../../assets/cardsbg.png'


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
export const CardSection = () => {
  return (
    <Box textAlign="center" fontSize="xl" mb="100px" padding={20}   bgImage={cardsbg} backgroundSize="cover" bgRepeat="no-repeat" bgSize="100%" border="1px solid #f33">
    <Container maxW="container.xl" >
      <CardWrapper
        title="Tarjetas de información"
        subtitle="Estas son algunas tarjetas de información"
        cardsData={cardsData}
      />
    </Container>
  </Box>

    )
}
