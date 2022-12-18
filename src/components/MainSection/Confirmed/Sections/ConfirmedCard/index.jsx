import React from "react";
import { Person } from "./Person";
import { AccordionSection } from "./AccordionSection";
import { Box } from "@chakra-ui/react";

export function ConfirmedCard({ person, services }) {
  return (
    <Box
      borderColor="teal.300"
      borderRadius="md"
      borderStyle="solid"
      borderWidth="2px"
      w="100%"
      color="black"
    >
      <Person person={person} />
      <AccordionSection services={services} />
    </Box>
  );
}
