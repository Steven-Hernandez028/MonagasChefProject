import { useState, useEffect } from "react";
import { Box, Text, Button, Heading,Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../../assets/bg2.jpg";
import Navbar from "./Navbar";
import ArrowDown from "./Arrowdown";

const HeadingMotion = motion(Heading);


export const Home = () => {
  const [showTitles, setShowTitles] = useState(false);

  useEffect(() => {
    setShowTitles(true);
  }, []);

  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
      pl="10%"
      pr="10%"
    >

      <Navbar />

      <AnimatePresence>
        {showTitles && (
          <>
            <HeadingMotion
              as="h3"
              size="xl"
              color="color.font"
              mb="4"
              border={"2px solid #fff"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'M
            </HeadingMotion>
            <HeadingMotion
              as="h1"
              size="4xl"
              color="white"
              mb="10"
              border={"2px solid #f33"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3}}
            >
              Victor Monagas
            </HeadingMotion>
            <HeadingMotion
              as="h2"
              size="2xl"
              color="white"
              mr="8"
              border={"2px solid #f34"}
              alignSelf="end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A Chef with over 20 years of{" "}
              <Text color="color.font">experience</Text>
            </HeadingMotion>
          </>
        )}
              <motion.div
        animate={{ y: [0, 20, 0] }}
          style={{border:"1px solid #FFF", width:"100px", height:"100px", position:"absolute",top:"20%", left:"50%"}}
        transition={{ duration: 5, ease: "easeInOut", loop: Infinity }}
      >
        <ArrowDown />
      </motion.div>

      </AnimatePresence>

    </Box>
  );
};


//TODO probar este codigo para hacer un efecto parallax de los ttitulos


// import { Box, Heading, Text } from "@chakra-ui/react";
// import { motion, useViewportScroll } from "framer-motion";
// import { useEffect, useState } from "react";

// const ParallaxTitles = () => {
//   const [showTitles, setShowTitles] = useState(false);
//   const { scrollY } = useViewportScroll();

//   useEffect(() => {
//     const handleScroll = () => {
//       // Si el usuario ha bajado más de 100 píxeles, mostrar los títulos
//       setShowTitles(scrollY.current > 100);
//     };
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollY]);

//   return (
//     <Box
//       h="100vh"
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="start"
//       pl="10%"
//       pr="10%"
//       position="relative" // Añade posición relativa al contenedor principal
//     >
//       {/* Resto del código... */}

//       {/* Títulos */}
//       <motion.div
//         style={{
//           y: showTitles ? scrollY.current / 3 : 0, // Divide la posición actual del scroll por 3 para crear el efecto parallax
//           opacity: showTitles ? 1 : 0,
//         }}
//       >
//         <Heading
//           as="h3"
//           size="xl"
//           color="color.font"
//           mb="4"
//           border={"2px solid #fff"}
//         >
//           I'M
//         </Heading>
//         <Heading
//           as="h1"
//           size="4xl"
//           color="white"
//           mb="10"
//           border={"2px solid #f33"}
//         >
//           Victor Monagas
//         </Heading>
//         <Heading
//           as="h2"
//           size="2xl"
//           color="white"
//           mr="8"
//           border={"2px solid #f34"}
//           alignSelf="end"
//         >
//           A Chef with over 20 years of{" "}
//           <Text color="color.font">experience</Text>
//         </Heading>
//       </motion.div>

//       {/* Flecha hacia abajo */}
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         style={{
//           border: "1px solid #FFF",
//           width: "100px",
//           height: "100px",
//           position: "absolute",
//           top: "20%",
//           left: "50%",
//         }}
//         transition={{ duration: 5, ease: "easeInOut", loop: Infinity }}
//       >
//         <ArrowDown />
//       </motion.div>
//     </Box>
//   );
// };

// export default ParallaxTitles;
