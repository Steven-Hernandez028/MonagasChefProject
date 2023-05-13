import React from "react";
import separatorBlack from "../../assets/separatorbgblack.svg";
import separatorWhite from "../../assets/separatorbgwhite.svg";


import { Box, Flex, Image } from "@chakra-ui/react";

export const Separator = ({type} : string) => {
  return (
    <Flex  align={"center"}>
      <Box background={type === "black"? "black": "white"} width="50px" height="1px"></Box>

      <Image src={type === "black"? separatorBlack : separatorWhite }position={"relative"} width="40px"/>

      <Box background={type === "black"? "black" : "white"} width="50px" height="1px"></Box>
    </Flex>
  );
};
