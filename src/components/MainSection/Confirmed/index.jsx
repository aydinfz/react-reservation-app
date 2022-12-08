import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import { AccordionSection } from "./AccordionSection";
import { Person } from "./Person";
import { Header } from "./Header";

export function Confirmed() {
  return (
    <VStack w="600px" h="88vh" textAlign="center">
      <Header/>
      <Box
        borderColor="teal.300"
        borderRadius="md"
        borderStyle="solid"
        borderWidth="2px"
        w="100%"
        color="black"
      >
        <Person/>
        <AccordionSection />
      </Box>
    </VStack>
  );
}
