import React from "react";
import { Icons } from "./Icons";
import { Text, VStack } from "@chakra-ui/react";

export function HowSection() {
  return (
    <VStack h="80vh" textAlign="center" justify="center">
      <Text mb={10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae facere
        voluptates dicta iure architecto vitae reiciendis libero labore, modi
        molestiae temporibus delectus ut commodi quisquam consequatur. Quae
        repellendus sed est! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Est, quidem. Hic quia ipsam voluptatibus delectus quidem iste
        repellat rem commodi, illo dicta temporibus ut eaque deleniti optio
        tempora modi. Doloribus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nemo sapiente soluta sint aspernatur possimus,
        pariatur totam illo, perspiciatis quam exercitationem deleniti quibusdam
        eligendi ipsam repellendus tempore expedita placeat praesentium odio.
      </Text>
      <Icons />
    </VStack>
  );
}
