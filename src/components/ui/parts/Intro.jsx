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

export default function Intro() {
  return (
    <VStack bg="gray.700" p={4} spacing={4} align="center">
      <Image
        src="/ProfileProfessional.PNG"
        boxSize="250px"
        borderRadius="full"
        alt="Profile Picture"
      />
      <Text textAlign="center" color="white" mt={4}>
        Hi, Welcome to my portfolio! I am Rens, a passionate full stack web app
        developer based in Roosendaal, The Netherlands. Feel free to look around
        and contact me if you have any questions at all!
      </Text>
    </VStack>
  );
}
