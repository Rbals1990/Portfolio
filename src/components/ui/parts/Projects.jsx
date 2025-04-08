import React from "react";
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

export default function Projects() {
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <VStack bg="gray.700" p={4} spacing={4} align="center">
      <Text
        fontSize="2xl"
        color={"teal.500"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Take a look at a few projects below
      </Text>
      <Spacer></Spacer>
      <Stack direction={stackDirection} spacing={5} align="center" p={3}>
        <Card.Root
          maxW={"xs"}
          maxH={"lg"}
          bg="gray.800"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image src="/recipeApp.png" w={"100%"} objectFit={"cover"} />
          <CardBody>
            <Card.Title textAlign={"center"} color={"teal.500"}>
              Recipe app (Frond-end)
            </Card.Title>
            <Card.Description>
              <Text
                fontSize={"sm"}
                letterSpacing={"tight"}
                whiteSpace={"normal"}
                overflow={"hidden"}
                textOverflow="ellipsis"
                color={"white"}
                borderRadius={"md"}
              >
                For this project i used React, Chakra and Javascript to make the
                front end of a recipe webapp. users could search and filter for
                recipes. This app made use of a local Json database.
              </Text>
              <Button
                as={"a"}
                href="https://github.com/Rbals1990/react-basic-project"
                target={"_blank"}
                rel="noopener noreferrer"
                variant={"solid"}
                _hover={{ bg: "teal.500" }}
                display={"flex"}
                justifyContent={"center"}
                mt={2}
              >
                View Project
              </Button>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
        <Spacer></Spacer>
        <Card.Root
          maxW={"xs"}
          maxH={"lg"}
          bg="gray.800"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image src="/BookingApi.png" w={"100%"} objectFit={"cover"} />
          <CardBody>
            <Card.Title textAlign={"center"} color={"teal.500"}>
              Booking API (Back-end)
            </Card.Title>
            <Card.Description>
              <Text
                fontSize={"sm"}
                letterSpacing={"tight"}
                whiteSpace={"normal"}
                overflow={"hidden"}
                textOverflow="ellipsis"
                color={"white"}
                borderRadius={"md"}
              >
                For this project I created the database and API for a booking
                app. Using Node.js, Express, Sentry, Prisma and JWT I created
                the routes, middlewares and database for a fully functional API.
              </Text>
              <Button
                as={"a"}
                href="https://github.com/Rbals1990/backendfinalproject"
                target={"_blank"}
                rel="noopener noreferrer"
                variant={"solid"}
                _hover={{ bg: "teal.500" }}
                display={"flex"}
                justifyContent={"center"}
                mt={5}
              >
                View Project
              </Button>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
        <Spacer></Spacer>
        <Card.Root
          maxW={"xs"}
          maxH={"lg"}
          bg="gray.800"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image
            src="/eventApp.png"
            w={"100%"}
            h={"50%"}
            objectFit={"cover"}
            objectPosition={"center"}
            mt={10}
            mb={4}
          />
          <CardBody>
            <Card.Title textAlign={"center"} color={"teal.500"} mt={8}>
              Event Manager app
            </Card.Title>
            <Card.Description>
              <Text
                fontSize={"sm"}
                letterSpacing={"tight"}
                whiteSpace={"normal"}
                overflow={"hidden"}
                textOverflow="ellipsis"
                color={"white"}
                borderRadius={"md"}
              >
                In this project I coded the Front-end part of an event
                managagement app. With this app users can find, create, edit or
                delete events on the web app. It uses a local Json database. For
                this project I used React, Javascript, HTML and CSS.
              </Text>
              <Button
                as={"a"}
                href="https://github.com/Rbals1990/react-advanced-project"
                target={"_blank"}
                rel="noopener noreferrer"
                variant={"solid"}
                _hover={{ bg: "teal.500" }}
                display={"flex"}
                justifyContent={"center"}
                mt={3}
              >
                View Project
              </Button>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
      </Stack>
    </VStack>
  );
}
