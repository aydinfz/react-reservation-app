import React from "react";
import { Spacer, VStack, Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { PersonRes } from "./PersonRes";
import { InputSection } from "./InputSection";
import { useSelector } from "react-redux";

export function Reservation() {
  const reservations = useSelector((state) => state.reservations.value);

  return (
    <VStack w="300px" h="88vh" textAlign="center">
      <Header />
      <Box w="200px" overflowY="scroll">
        {reservations.map((reservation) => {
          return <PersonRes key={reservation.id} name={reservation.name} status={reservation.status} />;
        })}
      </Box>
      <Spacer />
      <InputSection />
    </VStack>
  );
}
