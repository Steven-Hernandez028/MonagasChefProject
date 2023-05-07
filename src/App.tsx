
import Aboutme from "./components/about us/Aboutme";
import spoonbg from "./assets/spoon.png";
import "./App.css";
import { CardSection } from "./components/card section/CardSection";
import { Home } from "./components/home/Home";
import { Image,Box } from "@chakra-ui/react";
import  bg  from  './assets/bg2.jpg';
import './App.css'


// title="Victor Monagas"
//         subtitle="Este es el mejor lugar para encontrar información sobre mí y lo que hago."
//         buttonText="Contacto"
//         buttonLink="/contacto"



function Background({ children } : any)  {
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



const App= () => {
  return (
   

<Box>


  <Background/>
  <Home/>
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


</Box>

   



  );
};

export default App;
