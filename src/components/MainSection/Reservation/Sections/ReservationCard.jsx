import React, { useState } from "react";
import { Box, Badge } from "@chakra-ui/react";

export function ReservationCard({ name, status }) {
  const [state, setState] = useState(status);

  const handleChangeStatus = () => {
    if (state == "waiting") {
      setState("cancel");
    } else {
      setState("waiting");
    }
  };

  return (
    <Box
      borderColor="purple.400"
      borderRadius="md"
      borderStyle="solid"
      borderWidth="2px"
      w="90%"
      m={2}
      p={2}
      color="black"
      onDoubleClick={handleChangeStatus}
    >
      {name}
      <Badge colorScheme={state == "cancel" ? "blackAlpha" : "purple"} mx={2}>
        {state}
      </Badge>
    </Box>
  );
}
