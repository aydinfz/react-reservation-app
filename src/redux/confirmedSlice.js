import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: "67",
      name: "zeyn Tuncer",
    },
    {
      id: "6",
      name: "Ahmet Tuncer",
    },
    {
      id: "637",
      name: "Leyla Tuncer",
    },
  ],
};

export const confirmedSlice = createSlice({
  name: "confirmed",
  initialState,
  reducers: {
    addConfirmed: (state, action) => {},
  },
});


export const {  } = confirmedSlice.actions;
export default confirmedSlice.reducer;