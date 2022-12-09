import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  value: [
    "adem",
    "asjdhasdj",
    "ajksdhhhfd",
    "skdhjhfsfd",
    "sdjhdfjhds",
    "adem",
    "asjdhasdj",
    "ajksdhhhfd",
    "skdhjhfsfd",
    "sdjhdfjhds",
    "asjdhasdj",
    "ajksdhhhfd",
    "skdhjhfsfd",
    "sdjhdfjhds",
    "asjdhasdj",
    "ajksdhhhfd",
    "skdhjhfsfd",
    "sdjhdfjhds",
    "asjdhasdj",
    "ajksdhhhfd",
    "skdhjhfsfd",
    "sdjhdfjhds",
  ],
};
export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action) => {
        console.log(state)
        console.log(action)
        state.value.push(action.payload)
    },
    changeStatus: (state, action) => {

    }
  }
});

export const {addReservation} = reservationSlice.actions
export default reservationSlice.reducer