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
  Switch,
} from "@chakra-ui/react";

export default function Toggle({ isProfessional, onToggle }) {
  return (
    <Box
      bg={isProfessional ? "gray.700" : "white"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={4}
      gap={4}
    >
      <Text color={isProfessional ? "white" : "black"}>
        Want to know more about me? Flick the switch!
      </Text>
      <Switch.Root
        isChecked={isProfessional}
        onChange={onToggle}
        colorPalette={"orange"}
        size={"lg"}
        display={"flex"}
        alignItems={"center"}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
    </Box>
  );
}
