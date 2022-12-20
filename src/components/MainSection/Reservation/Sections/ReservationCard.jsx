import React, { useState, useRef } from "react";
import { Box, Badge, Icon } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
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

  const handleRemove = () => {
    dispatch(removeReservation(id));
  };

  const handleConfirmation = () => {
    handleRemove();
    dispatch(
      addConfirmed({
        id: nanoid(),
        name,
        services: ["sdgfdg", "yeee"],
      })
    );
  };

  return (
    <Box display="flex" alignItems="center" role="group">
      <Box
        borderColor="purple.400"
        borderRadius="md"
        borderStyle="solid"
        borderWidth="2px"
        w="90%"
        m={2}
        p={2}
        color="black"
        _hover={{ bg: "gray.100" }}
        onClick={handleChangeStatus}
        onDoubleClick={handleConfirmation}
      >
        {name}
        <Badge colorScheme={state == "cancel" ? "blackAlpha" : "purple"} mx={2}>
          {state}
        </Badge>
      </Box>
      <Icon
        as={FaTrashAlt}
        boxSize="18px"
        color="gray"
        visibility="hidden"
        _groupHover={{ visibility: "visible" }}
        onClick={handleRemove}
      />
    </Box>
  );
}
