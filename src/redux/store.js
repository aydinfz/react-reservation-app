import { configureStore } from "@reduxjs/toolkit";
import confirmedReducer from "./confirmedSlice";
import reservationReducer from "./reservationSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    confirmed: confirmedReducer
  },
});
