import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Center,
  useMediaQuery,
  IconButton,
  Icon,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from '../assets/logo.png'

const Navbar: React.FC = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

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
      bg="gray.800"
      color="white"
      py="4"
      px="8"
    >
      <Flex justify={isLargerThan768 ? "start" : "end"} alignItems={"center"}>
        {isLargerThan768 ? (
          <Box>
            <Flex>
            <Box width="100px" height="70px" pos="relative" top="-10px">
 
              </Box>
              <Link
                as={RouterLink}
                to="/home"
                color="white"
                fontWeight="bold"
                mt="25"
    
                ml="20"
                
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/aboutme"
                color="white"
                fontWeight="bold"
                mt="25"
         
                ml="20"
              >
                About Me
              </Link>
              <Center>
                  <Image src={Logo} position="relative" width="100%"/>
                  {/* <Heading as="h1" size="md">
                    My Website
                  </Heading> */}
                </Center>
              <Link
                as={RouterLink}
                to="/dishes"
                color="white"
                fontWeight= "bold"
                mt="25"
                ml="20"
              >
                Dishes
              </Link>

              <Link
                as={RouterLink}
                to="/contact"
                color="white"
                fontWeight="bold"
                mt="25"
                ml="20"
              >
                Contact
              </Link>
            </Flex>
          </Box>
        ) : (
          <Box>
            <IconButton
              icon={<FaBars />}
              variant="ghost"
              onClick={handleToggle}
              aria-label={""}
            />
            {isOpen && (
              <Box
                position="absolute"
                top="60px"
                left="0"
                right="0"
                bg="gray.800"
                color="white"
                py="4"
              >
                <Flex direction="column">
                  <Link
                    as={RouterLink}
                    to="/contacto"
                    color="white"
                    fontWeight="bold"
                    my="2"
                    mx="4"
                    onClick={handleToggle}
                  >
                    Contacto
                  </Link>
                  <Link
                    as={RouterLink}
                    to="/inicio"
                    color="white"
                    fontWeight="bold"
                    my="2"
                    mx="4"
                    onClick={handleToggle}
                  >
                    Inicio
                  </Link>
                </Flex>
              </Box>
            )}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
