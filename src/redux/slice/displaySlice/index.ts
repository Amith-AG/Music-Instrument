import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type DisplayState = {
  description: string;
  icon: string;
  mute: boolean;
};
const initialState: DisplayState = {
  description: "Heater-1",
  icon: "🪇",
  mute: false,
};
export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    addDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    addIcon: (state, action: PayloadAction<string>) => {
      state.icon = action.payload;
    },
    onClickMute: (state) => {
      state.mute = true;
    },
    onClickUnmute: (state) => {
      state.mute = false;
    },
  },
});

export const { addDescription, addIcon, onClickMute, onClickUnmute } =
  displaySlice.actions;
export default displaySlice.reducer;
