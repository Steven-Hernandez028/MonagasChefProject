import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Heading,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import bg from "../../assets/bg2.jpg";
import Navbar from "./Navbar";
import ArrowDown from "./Arrowdown";

const HeadingMotion = motion(Heading);






export const Home = () => {
  const [showTitles, setShowTitles] = useState(false);

  
  const {  scrollY } = useScroll();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");




  useEffect(() => {
    setShowTitles(true);
  }, [scrollY]);

  return (
    <>
      <Box
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        pl="15%"
        pr="15%"
        position="relative"
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
         
              fontFamily="title"
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
            
              fontFamily="title"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Victor Monagas
            </HeadingMotion>
            <HeadingMotion
              as="h2"
              size="2xl"
              color="white"
              mr="8"
                     
              fontFamily="title"
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
        </AnimatePresence>
      </Box>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        style={{
          width: "100px",
          height: "40px",
          position: "relative",
          top: "-60px",
          left: isLargerThan768 ? "45%" : "39%",

        }}
        transition={{ duration: 5, ease: "easeInOut", loop: Infinity }}
      >
        <ArrowDown />
      </motion.div>
    </>
  );
};

//TODO probar este codigo para hacer un efecto parallax de los ttitulos





