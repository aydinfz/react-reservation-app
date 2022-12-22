import React, { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { Header } from "./Sections/Header";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmedCard } from "./Sections/ConfirmedCard";
import { addConfirmed } from "../../../redux/confirmedSlice";
import { db } from "../../../firebase.config";
import { ref, onValue } from "firebase/database";

export function Confirmed() {
  const confirmed = useSelector((state) => state.confirmed.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    onValue(ref(db, `/confirmed`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch(addConfirmed(data));
      }
    });
  }, []);

  return (
    <VStack w="600px" h="88vh" textAlign="center">
      <Header />

      {confirmed.map((person) => {
        return <ConfirmedCard key={person.id} person={person} />;
      })}
    </VStack>
  );
}
