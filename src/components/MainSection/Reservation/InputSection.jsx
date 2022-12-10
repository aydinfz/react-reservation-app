import React, { useState } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addReservation } from "../../../redux/reservationSlice";
import {nanoid} from "@reduxjs/toolkit"

export function InputSection() {
  const [reservationNameInput, setResarvationNameInput] = useState("");

  const dispatch = useDispatch();

  const handleReservation = () => {
    if (!reservationNameInput) return;
    dispatch(
      addReservation({ id: nanoid(), reservationNameInput, status: "waiting" })
    );
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
      />
      <Button colorScheme="purple" w="100%" onClick={handleReservation}>
        Reserve
      </Button>
    </Box>
  );
}
