
import Aboutme from "./components/about us/Aboutme";
import spoonbg from "./assets/spoon.png";
import "./App.css";
import { CardSection } from "./components/card section/CardSection";
import { Home } from "./components/home/Home";
import { Image,Box } from "@chakra-ui/react";
import  bg  from  './assets/bg2.jpg';
import './App.css'




function Background()  {
  return (
    <Box
      backgroundImage={`url(${bg})`}
      backgroundSize="cover"
      width = "100%"
      height="100%"
      filter="blur(.5px) grayscale(20%) brightness(.6)"
      backgroundPosition="50"
      backgroundRepeat="no-repeat"
      boxShadow="inset 10px 10px 50px rgba(0, 0, 0, .5)"

      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-1"
    >

    </Box>
  );
}
//TODO hacer un componente separador color negro y blanco
//TODO: aplicar estos componentes a los subtitulos y los titulos
//TODO: trabajar el apartod de tarjetas 


const App= () => {
  return (
   

<Box>


  <Background/>
  <Home/>
      <Aboutme
        title="About Me"
        subtitle="Crafting Unforgettable Culinary Experiences - Chef-at-Home Services"  
        paragraph="I strive to provide the highest quality chef-at-home services that
        meet the needs and exceed the expectations of my clients. I take
        pride in using fresh, high-quality ingredients and applying
        innovative techniques to create unique and delicious dishes that
        represent Dominican and international culinary culture. I am
        committed to delivering exceptional service, with attention to
        detail and a focus on client satisfaction."
        imageSrc={spoonbg}
      />
    
    <CardSection/>


</Box>

   



  );
};

export default App;
