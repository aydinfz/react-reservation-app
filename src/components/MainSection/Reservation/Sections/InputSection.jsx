import React, { useState } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "../../../../redux/reservationSlice";
import { nanoid } from "@reduxjs/toolkit";
import { db } from "../../../../firebase.config";
import { ref, set } from "firebase/database";

export function InputSection() {
  const [reservationNameInput, setResarvationNameInput] = useState("");
  const reservations = useSelector((state) => state.reservations.value);
  const dispatch = useDispatch();

  const handleReservation = () => {
    if (!reservationNameInput) return;
    const reservation = {
      id: nanoid(),
      name: reservationNameInput,
      status: "waiting",
    };
    dispatch(addReservation([...reservations, reservation]));
    set(ref(db, `/reservations`), [...reservations, reservation]);
    setResarvationNameInput("");
  };
  return (
    <Box h="100px">
      <Input
        placeholder="name surname"
        color="black"
        size="md"
        borderColor="purple.400"
        borderWidth="2px"
        mb={2}
        value={reservationNameInput}
        onChange={(e) => setResarvationNameInput(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? handleReservation() : null)}
      />
      <Button colorScheme="purple" w="100%" onClick={handleReservation}>
        Reserve
      </Button>
    </Box>
  );
}
