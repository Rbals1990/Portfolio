import React from "react";
import Skill from "src/components/ui/parts/Skill.jsx";
import { Box, Grid, Text } from "@chakra-ui/react";

export default function Skills() {
  return (
    <Box
      bg={"gray.700"}
      p={4}
      spacing={4}
      alignItems="center"
      justifyContent={"center"}
      display="flex"
      flexDirection="column"
      align="center"
    >
      <Text
        fontSize="2xl"
        mb={4}
        color="teal.500"
        textAlign="center"
        fontWeight={"bold"}
      >
        Some of the technologies I use
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)", // 2 kolommen op kleine schermen
          md: "repeat(3, 1fr)", // 3 kolommen op medium schermen
          lg: "repeat(4, 1fr)", // 4 kolommen op grote schermen
        }}
        gap={{
          base: 4, // Ruimte tussen de iconen op kleine schermen
          md: 4, // Ruimte tussen de iconen op medium schermen
          lg: 1, // Kleinere ruimte op grote schermen
        }}
        justifyItems="center" // Zorgt ervoor dat de items in de grid gecentreerd worden
        alignItems="center" // Zorgt ervoor dat de items verticaal gecentreerd zijn
        width="75%"
      >
        <Skill
          source="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
          alt="The logo icon for JavaScript"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for react"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML 5"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS3"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="The logo icon for TailwindCSS"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for GitHub"
        />
        <Skill
          source="https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21~bgwhite.svg"
          alt="The logo icon for SQLite"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="The logo icon for NodeJS"
        />
        <Skill
          source="https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-ar21~bgwhite.svg"
          alt="The logo icon for Chakra UI"
        />
      </Grid>
    </Box>
  );
}
