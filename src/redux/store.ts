import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./slice/displaySlice";

export const store = configureStore({
  reducer: {
    display: displaySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
