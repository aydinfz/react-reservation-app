import React from "react";
import { Input, Button } from "@chakra-ui/react";

export function InputSection() {
  return (
    <>
      <Input
        placeholder="name surname"
        size="md"
        borderColor="purple.400"
        borderWidth="2px"
      />
      <Button colorScheme="purple" w="100%">
        Reserve
      </Button>
    </>
  );
}
