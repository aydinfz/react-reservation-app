import { createSlice } from "@reduxjs/toolkit";

const services = [
  {
    food: "Steak",
    checked: false,
  },
  {
    food: "Salad",
    checked: true,
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

    updateCheckStatus: (state, action) => {
      const { personID, food } = action.payload;
      const personInd = state.value.findIndex((val) => val.id === personID);
      const person = state.value[personInd];
      const foodInd = person.services.findIndex((ser) => ser.food === food);
      person.services[foodInd].checked = !person.services[foodInd].checked;
    },
  },
});

export const { addConfirmed, updateCheckStatus } = confirmedSlice.actions;
export default confirmedSlice.reducer;
