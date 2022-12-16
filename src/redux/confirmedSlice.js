import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: "6",
      name: "Mahmut Tuncer",
      services: [],
    },
    {
      id: "637",
      name: "Adriana Lima",
      services: [],
    },
  ],
};

export const confirmedSlice = createSlice({
  name: "confirmed",
  initialState,
  reducers: {
    addConfirmed: (state, action) => {
      state.value.push(action.payload)
    },
  },
});


export const { addConfirmed } = confirmedSlice.actions;
export default confirmedSlice.reducer;