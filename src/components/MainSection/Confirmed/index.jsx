import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import { Header } from "./Sections/Header";
import { useSelector } from "react-redux";
import { ConfirmedCard } from "./Sections/ConfirmedCard";

export function Confirmed() {
  const confirmed = useSelector((state) => state.confirmed.value);
  return (
    <VStack w="600px" h="88vh" textAlign="center">
      <Header />
    
        {confirmed.map((person) => {
          return <ConfirmedCard key={person.id} person={person.name} services={person.services} />;
        })}
    </VStack>
  );
}
