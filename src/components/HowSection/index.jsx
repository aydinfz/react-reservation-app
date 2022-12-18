import React from "react";
import { Icons } from "./Icons";
import { Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";

export function HowSection() {
  return (
    <VStack h="85vh"  justify="space-between">
      <Text mt={32}>
        <UnorderedList spacing={4} fontSize="17px">
          <ListItem>You can add a reservation by using input section.</ListItem>
          <ListItem>Click on a reservation card to change it status.</ListItem>
          <ListItem>Hover on a card to see delete button.</ListItem>
          <ListItem>Confirm a reservation by double click on it.</ListItem>
          <ListItem>Check which services asked for a confirmed reservation.</ListItem>
          <ListItem>Use time picker to select a date on right upper side.</ListItem>
        </UnorderedList>
      </Text>
      <Icons />
    </VStack>
  );
}
