import { createSlice } from "@reduxjs/toolkit";

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
    removeReservation: (state, action) => {
      state.value = state.value.filter(
        (reservation) => reservation.id !== action.payload
      );
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
