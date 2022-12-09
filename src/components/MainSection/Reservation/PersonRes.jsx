import React from "react";
import { Box, Badge } from "@chakra-ui/react";

export function PersonRes({ name }) {
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
      {/* <Badge colorScheme="purple" mx={2}>
          Waiting
        </Badge> */}
      <Badge colorScheme="blackAlpha" mx={2}>
        Cancel
      </Badge>
    </Box>
  );
}
