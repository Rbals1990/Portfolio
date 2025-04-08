import React from "react";
import { useState } from "react";
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
  Avatar,
  Button,
  Card,
  Image,
  CardBody,
  CardDescription,
  useBreakpointValue,
} from "@chakra-ui/react";

import { keyframes } from "@emotion/react";

export default function ProjectsLight() {
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });
  const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(3deg); }
  100% { transform: rotate(0deg); }
`;
  const [jumpOffset, setJumpOffset] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    const getRandomOffset = () => {
      const range = 100; // Hoe ver hij kan springen
      const x = Math.floor(Math.random() * range * 2 - range);
      const y = Math.floor(Math.random() * range * 2 - range);
      return { x, y };
    };

    setJumpOffset(getRandomOffset());
  };

  return (
    <VStack bg="white" p={4} spacing={4} align="center">
      <Text
        fontSize="2xl"
        color={"orange.300"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Take a look at what I like to do in my spare time
      </Text>
      <Spacer></Spacer>
      <Stack direction={stackDirection} spacing={5} align="center" p={3}>
        <Card.Root
          maxW={"xs"}
          maxH={"lg"}
          bg="gray.300"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image src="/concert.PNG" w={"100%"} objectFit={"cover"} />
          <CardBody>
            <Card.Title textAlign={"center"} color={"orange.400"}>
              Goin to concerts
            </Card.Title>
            <Card.Description>
              <Text
                fontSize={"sm"}
                letterSpacing={"tight"}
                whiteSpace={"normal"}
                overflow={"hidden"}
                textOverflow="ellipsis"
                color={"black"}
                borderRadius={"md"}
              >
                Me and my wife like to go to concerts, festivals and everything
                in between. I enjoy a lot of different genres of music so
                whenever we see an artist we like, we set up a concert date
                night!
              </Text>
              <Button
                as={"a"}
                href="https://open.spotify.com/user/rensvaniersel"
                target={"_blank"}
                rel="noopener noreferrer"
                variant={"solid"}
                _hover={{ bg: "orange.300" }}
                display={"flex"}
                justifyContent={"center"}
                mt={2}
              >
                My Spotify
              </Button>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
        <Spacer></Spacer>
        <Card.Root
          maxW={"xs"}
          maxH={"lg"}
          bg="gray.300"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image src="/BBQ1.PNG" w={"100%"} objectFit={"cover"} />
          <CardBody>
            <Card.Title textAlign={"center"} color={"orange.400"}>
              Bbq!
            </Card.Title>
            <Card.Description>
              <Text
                fontSize={"sm"}
                letterSpacing={"tight"}
                whiteSpace={"normal"}
                overflow={"hidden"}
                textOverflow="ellipsis"
                color={"black"}
                borderRadius={"md"}
              >
                For me it doesn't matter if it is summer or winter, Every day is
                a good day for Barbecue. I've cooked a lot of dishes from pulled
                pork to T-bone steak. Have any good recipes? Please share them!
              </Text>
              <Button
                as={"a"}
                href="mailto:rensbals1990@gmail.com"
                target={"_blank"}
                rel="noopener noreferrer"
                variant={"solid"}
                _hover={{ bg: "orange.300" }}
                display={"flex"}
                justifyContent={"center"}
                mt={2}
              >
                Share your recipe
              </Button>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
        <Spacer></Spacer>
        <Card.Root
          maxW={"xs"}
          maxH={"lg"}
          bg="gray.300"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image src="/IMG_3844.jpg" w={"100%"} objectFit={"cover"} />
          <CardBody>
            <Card.Title textAlign={"center"} color={"orange.400"}>
              Spending quality time with my family
            </Card.Title>
            <Card.Description>
              <Text
                fontSize={"sm"}
                letterSpacing={"tight"}
                whiteSpace={"normal"}
                overflow={"hidden"}
                textOverflow="ellipsis"
                color={"black"}
                borderRadius={"md"}
              >
                Besides music and Bbq, the things I enjoy most are the things I
                do with my family.
              </Text>
              <Button
                onClick={handleClick}
                variant="solid"
                _hover={{ bg: "orange.300" }}
                display="flex"
                justifyContent="center"
                mt={2}
                style={{
                  transform: `translate(${jumpOffset.x}px, ${jumpOffset.y}px)`,
                  transition: "transform 0.3s ease",
                  position: "relative",
                }}
              >
                Click me? 🐰
              </Button>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
      </Stack>
    </VStack>
  );
}
