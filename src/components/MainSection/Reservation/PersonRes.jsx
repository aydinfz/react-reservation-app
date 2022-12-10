import React from "react";
import { Box, Badge } from "@chakra-ui/react";

export function PersonRes({ name, status }) {
  return (
    <Box
      borderColor="purple.400"
      borderRadius="md"
      borderStyle="solid"
      borderWidth="2px"
      w="90%"
      m={2}
      p={2}
      color="black"
    >
      {name}
      <Badge colorScheme={status == "cancel" ? "blackAlpha" : "purple"} mx={2}>
        {status}
      </Badge>
    </Box>
  );
}
