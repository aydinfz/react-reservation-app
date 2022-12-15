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
      console.log(state.value)
    }
  },
});

export const { addReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
