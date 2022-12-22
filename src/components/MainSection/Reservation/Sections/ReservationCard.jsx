import React, { useState, useRef } from "react";
import { Box, Badge, Icon } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "../../../../redux/reservationSlice";
import { addConfirmed } from "../../../../redux/confirmedSlice";
import { nanoid } from "@reduxjs/toolkit";
import { db } from "../../../../firebase.config";
import { ref, set } from "firebase/database";

export function ReservationCard({ name, status, id }) {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.value);
  const confirmed = useSelector((state) => state.confirmed.value);

  const services = [
    {
      food: "Steak",
      checked: false,
    },
    {
      food: "Salad",
      checked: false,
    },
    {
      food: "Snacks",
      checked: false,
    },
    {
      food: "Ayran",
      checked: false,
    },
    {
      food: "Gluten-Free",
      checked: false,
    },
  ];

  const handleChangeStatus = () => {
    const updatedData = reservations.map((res) => {
      if (res.id == id) {
        return {
          ...res,
          status: status === "waiting" ? "cancel" : "waiting",
        };
      }
      return res;
    });
    dispatch(addReservation(updatedData));
    set(ref(db, `/reservations`), [...updatedData]);
  };

  const handleRemove = () => {
    const savedData = reservations.filter(
      (reservation) => reservation.id !== id
    );
    dispatch(addReservation([]));
    dispatch(addReservation(savedData));
    set(ref(db, `/reservations`), [...savedData]);
  };

  const handleConfirmation = () => {
    handleRemove();
    const confirmedData = [
      ...confirmed,
      {
        id: nanoid(),
        name,
        services,
      },
    ];
    dispatch(addConfirmed(confirmedData));
    set(ref(db, `/confirmed`), [...confirmedData]);
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
        <Badge
          colorScheme={status == "cancel" ? "blackAlpha" : "purple"}
          mx={2}
        >
          {status}
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
