import React, { useEffect, useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckStatus } from "../../../../../redux/confirmedSlice";
import { db } from "../../../../../firebase.config";
import { ref, set } from "firebase/database";

export function Services({ person }) {
  const dispatch = useDispatch();
  const confirmed = useSelector((state) => state.confirmed.value);

  useEffect(() => {
    set(ref(db, `/confirmed`), [...confirmed]);
  }, [confirmed]);

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
