import React from 'react'
import { Container, Flex, Divider } from "@chakra-ui/react";
import { Reservation } from "./Reservation"
import { Confirmed } from "./Confirmed";

export function MainSection() {
  return (
    <Container maxW="5xl" h="80vh" color="white" >
      <Flex align="center">
        <Reservation />
        <Divider
          orientation="vertical"
          mx="50px"
          h="80vh"
          borderWidth={1}
          borderColor="gray.300"
        />
        <Confirmed />
      </Flex>
    </Container>
  );
}
