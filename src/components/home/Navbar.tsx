import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Center,
  useMediaQuery,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { MdCall } from "react-icons/md";
import Logo from "../../assets/logo.png";

import { MenuButton } from "./MenuButton";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hidden: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const menuButtonStyle = {
  marginLeft: "2rem",
  position: "relative",
};

const noDecoration = {
  textDecoration: "none",
};

const Navbar: React.FC = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(scrollPosition > 100);
  }, [scrollPosition]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
      bg="rgba(0,0,0,.6)"
      color="white"
      py="4"
      px="8"
    >
      <Flex justify={isLargerThan768 ? "center" : "end"} alignItems={"center"}>
        {isLargerThan768 ? (
          <Box border="1px solid #fff" width="70%">
            <Flex>
              <Box width="100px" height="70px" pos="relative" top="-10px">
                <Center>
                  <Image src={Logo} position="relative" width="100%" />
                </Center>
              </Box>
              <Link
                as={RouterLink}
                to="/home"
                color="white"
                fontWeight="bold"
                mt="25"
                ml="55"
                style={noDecoration}
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/aboutme"
                color="white"
                fontWeight="bold"
                mt="25"
                ml="35"
                style={noDecoration}
              >
                About Me
              </Link>
              <Link
                as={RouterLink}
                to="/dishes"
                color="white"
                fontWeight="bold"
                mt="25"
                ml="35"
                style={noDecoration}
              >
                Dishes
              </Link>

              <Link
                as={RouterLink}
                to="/contact"
                color="white"
                fontWeight="bold"
                mt="25"
                ml="35"
                style={noDecoration}
              >
                Contact
              </Link>
              <Flex
                width="45%"
                position="relative"
                justify={"end"}
                border="1px solid #fff"
              >
                <Button
                  rightIcon={<MdCall />}
                  bg="color.primary"
                  position="absolute"
                  size="md"
                  mt="3"
                  _hover={{ bg: "#bb7848" }}
                  borderRadius={50}
                >
                  Book Now
                </Button>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <Flex justify={"space-between"} width="100%">
            <Box
              transition={"all .3s ease"}
              width={isScrolled ? "50px" : "60px"}
              height={isScrolled ? "30px" : "50px"}
              pos="relative"
              top={isScrolled ? "-10px" : "-0px"}
            >
              <Center>
                <Image
                  src={Logo}
                  position="relative"
                  width="100%"
                  height="100%"
                />
              </Center>
            </Box>

            <MenuButton
              isOpen={isOpen}
              onClick={handleToggle}
              style={menuButtonStyle}
              color="white"
            />

            <AnimatePresence>
              {isOpen && (
                <MotionBox
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  position="absolute"
                  top="70px"
                  left="0"
                  right="0"
                  bg="rgba(0,0,0,.8)"
                  color="white"
                  py="4"
                >
                  <Flex direction="column">
                    <MotionLink
                      as={RouterLink}
                      to="/contacto"
                      color="white"
                      fontWeight="bold"
                      my="2"
                      mx="4"
                      onClick={handleToggle}
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                    >
                      Home
                    </MotionLink>
                    <MotionLink
                      as={RouterLink}
                      to="/inicio"
                      color="white"
                      fontWeight="bold"
                      my="2"
                      mx="4"
                      onClick={handleToggle}
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                    >
                      About Me
                    </MotionLink>

                    <MotionLink
                      as={RouterLink}
                      to="/inicio"
                      color="white"
                      fontWeight="bold"
                      my="2"
                      mx="4"
                      onClick={handleToggle}
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                    >
                      Contact
                    </MotionLink>

                    <MotionLink
                      as={RouterLink}
                      to="/inicio"
                      color="white"
                      fontWeight="bold"
                      my="2"
                      mx="4"
                      onClick={handleToggle}
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                    >
                      My dishes
                    </MotionLink>
                  </Flex>
                </MotionBox>
              )}
            </AnimatePresence>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
