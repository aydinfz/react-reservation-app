import React from "react";
import { VStack, Heading, Box } from "@chakra-ui/react";

export function Confirmed() {
  return (
    <VStack w="600px" h="90vh">
      <Heading
        as="h3"
        size="lg"
        w="100%"
        color="teal.300"
        p="2"
        textAlign="center"
      >
        Confirmed
      </Heading>
      <Box
        borderColor="teal.300"
        borderRadius="md"
        borderStyle="solid"
        borderWidth="2px"
        w="100%"
        h="70px"
        p={2}
        color="black"
      >
        This is the Box
      </Box>
    </VStack>
  );
}
