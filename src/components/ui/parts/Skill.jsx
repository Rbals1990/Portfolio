import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function Skill({ source, alt, title }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <Image src={source} alt={alt} boxSize="60px" objectFit="contain" m={2} />
      {title && (
        <Text mt={2} fontSize="sm">
          {title}
        </Text>
      )}
    </Box>
  );
}

export default Skill;
