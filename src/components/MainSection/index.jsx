import React from "react";
import { Container, Flex, Divider } from "@chakra-ui/react";
import { Reservation } from "./Reservation";
import { Confirmed } from "./Confirmed";

export function MainSection() {
  return (
    <Container maxW="5xl" color="white">
      <Flex align="center" h="88vh">
        <Reservation />
        <Divider orientation="vertical" mx="50px" borderColor="gray.300" />
        <Confirmed />
      </Flex>
    </Container>
  );
}
