import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { Icon, HStack, Link, ScaleFade } from "@chakra-ui/react";

export function Icons() {
  return (
    <HStack color="gray.600">
      <Link href="https://www.linkedin.com/in/fatma-zehra-aydin/" isExternal>
        <Icon
          as={BsLinkedin}
          boxSize={8}
          _hover={{ transform: "scale(1.1)", color: "gray.700" }}
        />
      </Link>
      <Link href="https://twitter.com/aydinfzehra" isExternal>
        <Icon
          as={BsTwitter}
          boxSize={8}
          mx={2}
          _hover={{ transform: "scale(1.1)", color: "gray.700" }}
        />
      </Link>
      <Link href="https://github.com/aydinfz" isExternal>
        <Icon
          as={BsGithub}
          boxSize={8}
          _hover={{ transform: "scale(1.1)", color: "gray.700" }}
        />
      </Link>
    </HStack>
  );
}
