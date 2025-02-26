import { configureStore } from "@reduxjs/toolkit";
import seatSlice from "./seatSlice";

const store = configureStore({
  reducer: {
    seats: seatSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
