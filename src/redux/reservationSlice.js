import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  value: [
    {
      id: "5",
      name: "Mahmut Tuncer",
      status: "waiting",
    },
    {
      id: "7",
      name: "Obama",
      status: "cancel",
    },
  ],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
