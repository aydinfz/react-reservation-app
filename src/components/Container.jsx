import React from "react";
import { Container, Flex, Divider } from "@chakra-ui/react";
import { Reservation } from "./Reservation";
import { Confirmed } from "./Confirmed";

export function ContainerLayout() {
  return (
    <Container maxW="5xl" h="95vh" color="white" mt={5}>
      <Flex align="center">
        <Reservation />
        <Divider
          orientation="vertical"
          mx="50px"
          h="85vh"
          borderWidth={1}
          borderColor="gray.300"
        />
        <Confirmed />
      </Flex>
    </Container>
  );
}
