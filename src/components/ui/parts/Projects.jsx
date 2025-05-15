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
          minH="520px"
          bg="gray.800"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image
            src="/timesheet.png"
            w={"100%"}
            h={"250px"}
            objectFit={"cover"}
          />
          <CardBody display={"flex"} flexDirection={"column"}>
            <Card.Title textAlign={"center"} color={"teal.500"}>
              Workhour registration App (Fullstack)
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
                In this project I used TypeScript, React and Javascript to
                create a fully funtional fullstack webapp. In this app the user
                can register the amount of weekly worked hours and share this.
                This app is hosted via Netlify and Render, try it out!
              </Text>
              <Box mt={"auto"} pt={4}>
                <Button
                  as={"a"}
                  href="https://registertimesheet.netlify.app/"
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
              </Box>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
        <Spacer></Spacer>
        <Card.Root
          maxW={"xs"}
          maxH={"lg"}
          minH="520px"
          bg="gray.800"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image
            src="/BookingApi.png"
            w={"100%"}
            h={"250px"}
            objectFit={"cover"}
          />
          <CardBody display={"flex"} flexDirection={"column"}>
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
              <Box mt={"auto"} pt={4}>
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
              </Box>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
        <Spacer></Spacer>
        <Card.Root
          maxW={"xs"}
          maxH={"lg"}
          minH="520px"
          bg="gray.800"
          boxShadow={"md"}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image
            src="/eventApp.png"
            w={"100%"}
            h={"250px"}
            objectFit={"cover"}
            objectPosition={"center"}
          />
          <CardBody display={"flex"} flexDirection={"column"}>
            <Card.Title textAlign={"center"} color={"teal.500"} mt={8}>
              Event Manager app (Frond-end)
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
              <Box mt={"auto"} pt={4}>
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
              </Box>
            </Card.Description>
          </CardBody>
          <Card.Footer></Card.Footer>
        </Card.Root>
      </Stack>
    </VStack>
  );
}
