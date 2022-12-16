import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Checkbox,
  HStack,
  Box,
} from "@chakra-ui/react";

export function AccordionSection() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "teal.300", color: "white" }}>
            <Box flex="1" textAlign="left" fontSize="md">
              Services
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <HStack spacing={3} color="black">
            <Checkbox size="sm" colorScheme="teal">
              Steak
            </Checkbox>
            <Checkbox size="sm" colorScheme="teal">
              Salad
            </Checkbox>
            <Checkbox size="sm" colorScheme="teal">
              Snacks
            </Checkbox>
            <Checkbox size="sm" colorScheme="teal">
              Ayran
            </Checkbox>
            <Checkbox size="sm" colorScheme="teal">
              Gluten-Free
            </Checkbox>
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
