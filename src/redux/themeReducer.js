import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "constants";
import useLocalStorage from "hooks/useLocalStorage";

const initialState = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateSettings: (state, action) => {
      useLocalStorage("themeSettings", initialState);
    },
  },
});

export const { updateSettings } = themeSlice.actions;
export default themeSlice.reducer;
