import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  useCheckbox,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Services } from "./Services";

export function AccordionSection({ person }) {
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
            <Services person={person} />
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
