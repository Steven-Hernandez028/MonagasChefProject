import React from "react";
import separatorBlack from "../../assets/separatorbgblack.svg";
import { Box, Flex, Image } from "@chakra-ui/react";

export const Separator = (type: string) => {
  return (
    <Flex  align={"center"}>
      <Box background="black" width="50px" height="1px"></Box>

      <Image src={separatorBlack} position={"relative"} width="40px"/>

      <Box background="black" width="50px" height="1px"></Box>
    </Flex>
  );
};
