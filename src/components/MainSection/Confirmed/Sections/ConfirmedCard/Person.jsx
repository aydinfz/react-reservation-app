import React from "react";
import { Text } from "@chakra-ui/react";

export function Person({ person }) {
  return (
    <Text fontSize="lg" my={2}>
      {person.name}
    </Text>
  );
}
