import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineSun,
  AiOutlineMoon,
} from "react-icons/ai";
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
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

export default function IntroLight() {
  return (
    <VStack bg="white" p={4} spacing={4} align="center">
      <Image
        src="/ProfilePersonal.PNG"
        boxSize="250px"
        borderRadius="full"
        alt="Profile Picture"
      />
      <Text textAlign="center" color="black" mt={4}>
        Hi, Welcome to the personal side of my portfolio! My name is Rens and
        together with my family I live in Roosendaal, The Netherlands. Feel free
        to check down below what I like to do when I'm not coding. I you have
        any questions, feel free to contact me.
      </Text>
    </VStack>
  );
}
