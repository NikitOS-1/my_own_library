import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "constants";

const initialState = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export const {} = themeSlice.actions;
export default themeSlice.reducer;
