import React from "react";
import { Box, Badge } from "@chakra-ui/react";

export function PersonRes() {
  return (
    <>
      <Box
        borderColor="purple.400"
        borderRadius="md"
        borderStyle="solid"
        borderWidth="2px"
        w="100%"
        p={2}
        color="black"
      >
        Jackie Chan
        <Badge colorScheme="purple" mx={2}>
          Waiting
        </Badge>
      </Box>
      <Box
        borderColor="purple.400"
        borderRadius="md"
        borderStyle="solid"
        borderWidth="2px"
        w="100%"
        p={2}
        color="black"
      >
        Mahmut Tuncer
        <Badge colorScheme="blackAlpha" mx={2}>
          Cancel
        </Badge>
      </Box>
    </>
  );
}
