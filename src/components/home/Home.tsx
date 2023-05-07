import { useState, useEffect } from "react";
import { Box, Text, Button, Heading,Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../../assets/bg2.jpg";
import Navbar from "./Navbar";

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

    {/* <Image 
    src={bg}
    alt="My Image"
    w="100%"
    h="100%"
    position="absolute"
    objectFit="cover"
    filter="grayscale(100%)"
    
    /> */}
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
      </AnimatePresence>
    </Box>
  );
};
