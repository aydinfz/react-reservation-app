import React, { useState } from "react";
import { Box, Badge } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../../../../redux/reservationSlice";
import { addConfirmed } from "../../../../redux/confirmedSlice";
import { nanoid } from "@reduxjs/toolkit";


export function ReservationCard({ name, status, id }) {
  const [state, setState] = useState(status);

  const dispatch = useDispatch();

  const handleChangeStatus = () => {
    if (state == "waiting") {
      setState("cancel");
    } else {
      setState("waiting");
    }
  };

  const handleConfirmation = () => {
    dispatch(removeReservation(id));
    dispatch(addConfirmed({
      id: nanoid(),
      name,
      services: []
    }))
  };

  return (
    <Box
      borderColor="purple.400"
      borderRadius="md"
      borderStyle="solid"
      borderWidth="2px"
      w="95%"
      m={2}
      p={2}
      color="black"
      onClick={handleChangeStatus}
      onDoubleClick={handleConfirmation}
    >
      {name}
      <Badge colorScheme={state == "cancel" ? "blackAlpha" : "purple"} mx={2}>
        {state}
      </Badge>
    </Box>
  );
}
