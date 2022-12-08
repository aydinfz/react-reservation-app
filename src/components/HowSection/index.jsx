import React from "react";
import { Icons } from "./Icons";
import { Text, VStack, Center } from "@chakra-ui/react";

export function HowSection() {
  return (
    <VStack>
      <Center maxW="400px" h="80vh" color="white">
        <Text bg="purple">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente
          soluta sint aspernatur possimus, pariatur totam illo, perspiciatis
          quam exercitationem deleniti quibusdam eligendi ipsam repellendus
          tempore expedita placeat praesentium odio.
        </Text>
        <Icons />
      </Center>
    </VStack>
  );
}
