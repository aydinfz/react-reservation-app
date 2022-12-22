import React, { useEffect } from "react";
import { Spacer, VStack, Box } from "@chakra-ui/react";
import { Header } from "./Sections/Header";
import { ReservationCard } from "./Sections/ReservationCard";
import { InputSection } from "./Sections/InputSection";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase.config";
import { ref, onValue } from "firebase/database";
import { addReservation } from "../../../redux/reservationSlice";

export function Reservation() {
  const reservations = useSelector((state) => state.reservations.value);
  const dispatch = useDispatch();

  useEffect(() => {
    onValue(ref(db, `/reservations`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch(addReservation(data));
      }
    });
  }, []);

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
