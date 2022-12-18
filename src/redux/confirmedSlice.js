import { createSlice } from "@reduxjs/toolkit";

const services = [
  {
    food: "Steak",
    checked: false,
  },
  {
    food: "Salad",
    checked: false,
  },
  {
    food: "Snacks",
    checked: false,
  },
  {
    food: "Ayran",
    checked: false,
  },
  {
    food: "Gluten-Free",
    checked: false,
  },
];

const initialState = {
  value: [
    {
      id: "6",
      name: "Mahmut Tuncer",
      services,
    },
    {
      id: "637",
      name: "Adriana Lima",
      services,
    },
  ],
};

export const confirmedSlice = createSlice({
  name: "confirmed",
  initialState,
  reducers: {
    addConfirmed: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addConfirmed } = confirmedSlice.actions;
export default confirmedSlice.reducer;
