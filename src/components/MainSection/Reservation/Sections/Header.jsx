import React from 'react'
import { Heading } from "@chakra-ui/react";

export  function Header() {
  return (
    <Heading
      as="h3"
      size="lg"
      w="100%"
      color="purple.500"
      p={2}
      borderRadius="md"
    >
      Reservation
    </Heading>
  );
}
