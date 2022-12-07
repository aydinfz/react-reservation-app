import React from "react";
import { Heading, Spacer, Input, Button, VStack, Box } from "@chakra-ui/react";

export function Reservation() {
  return (
    <VStack w="300px" h="90vh">
      <Heading
        as="h3"
        size="lg"
        w="100%"
        color="purple.500"
        p="2"
        textAlign="center"
        borderRadius="md"
      >
        Reservation
      </Heading>
      <Box
        borderColor="purple.400"
        borderRadius="md"
        borderStyle="solid"
        borderWidth="2px"
        w="100%"
        p={2}
        color="black"
      >
        Jane Doe
      </Box>
      <Spacer />
      <Input placeholder="medium size" size="md" />
      <Button colorScheme="purple" w="100%">
        Button
      </Button>
    </VStack>
  );
}
