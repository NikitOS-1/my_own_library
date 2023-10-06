import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const someSlice = createSlice({
  name: "some",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = 1;
    },
  },
});

export const { changeValue } = someSlice.actions;
export default someSlice.reducer;
