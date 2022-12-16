import React from "react";
import { Spacer, VStack, Box } from "@chakra-ui/react";
import { Header } from "./Sections/Header";
import { ReservationCard } from "./Sections/ReservationCard";
import { InputSection } from "./Sections/InputSection";
import { useSelector } from "react-redux";

export function Reservation() {
  const reservations = useSelector((state) => state.reservations.value);

  return (
    <VStack w="300px" h="88vh" textAlign="center">
      <Header />
      <Box w="200px" overflowY="scroll">
        {reservations.map((reservation) => {
          return (
            <ReservationCard
              key={reservation.id}
              id={reservation.id}
              name={reservation.name}
              status={reservation.status}
            />
          );
        })}
      </Box>
      <Spacer />
      <InputSection />
    </VStack>
  );
}
