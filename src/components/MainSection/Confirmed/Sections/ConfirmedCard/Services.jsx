import React, { useEffect, useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateCheckStatus } from "../../../../../redux/confirmedSlice";

export function Services({ person }) {
  const dispatch = useDispatch();
  return person.services.map((service, ind) => (
    <Checkbox
      key={ind}
      size="sm"
      colorScheme="teal"
      isChecked={service.checked}
      onChange={() =>
        dispatch(updateCheckStatus({ food: service.food, personID: person.id }))
      }
    >
      {service.food}
    </Checkbox>
  ));
}
