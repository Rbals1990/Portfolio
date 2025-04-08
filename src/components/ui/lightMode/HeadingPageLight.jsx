import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineSun,
  AiOutlineMoon,
} from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  HStack,
  Stack,
  VStack,
  Box,
  Grid,
  Flex,
  Heading,
  IconButton,
  Spacer,
} from "@chakra-ui/react";

export default function HeadingPageLight() {
  return (
    <VStack bg="white">
      <Flex w="100%">
        <Heading
          ml="6"
          mt="9"
          size="4xl"
          fontWeight="semibold"
          color="orange.500"
          alignItems={"horizontal"}
        >
          Portfolio
        </Heading>
        <Spacer></Spacer>
        <a href="mailto:rensbals1990@gmail.com" rel="noopener noreferrer">
          <IconButton
            as={MdOutlineMailOutline}
            mt="6"
            mr="4"
            mb="2"
            //borderRadius="full"
            size="lg"
            fontSize="2xl"
            backgroundColor="transparent"
            color="black"
            _hover={{ bg: "orange.300" }}
          />
        </a>
        <a
          href="https://github.com/Rbals1990"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            as={AiFillGithub}
            mt="6"
            mr="4"
            mb="2"
            borderRadius="full"
            size="lg"
            fontSize="2xl"
            backgroundColor="transparent"
            color="black"
            _hover={{ bg: "orange.300" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rens-bals-857467247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            as={AiFillLinkedin}
            mt="6"
            mr="4"
            mb="2"
            borderRadius="full"
            size="lg"
            fontSize="2xl"
            backgroundColor="transparent"
            color="black"
            _hover={{ bg: "orange.300" }}
          />
        </a>
      </Flex>
    </VStack>
  );
}
