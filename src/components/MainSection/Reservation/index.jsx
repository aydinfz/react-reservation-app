import React from "react";
import { Spacer, VStack } from "@chakra-ui/react";
import { Header } from "./Header";
import { PersonRes } from "./PersonRes";
import { InputSection } from "./InputSection";

export function Reservation() {
  return (
    <VStack w="300px" h="88vh" textAlign="center">
      <Header />
      <PersonRes />
      <Spacer />
      <InputSection />
    </VStack>
  );
}
