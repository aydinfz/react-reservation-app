import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const confirmedSlice = createSlice({
  name: "confirmed",
  initialState,
  reducers: {
    addConfirmed: (state, action) => {
      state.value = action.payload;
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
