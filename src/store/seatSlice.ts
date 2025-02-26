import { createSlice } from "@reduxjs/toolkit";

interface Seat {
  id: string;
  price: number;
}
interface SeatState {
  selectedSeats: Seat[];
  totalPrice: number;
  error: string;
}

const initialState: SeatState = {
  selectedSeats: [],
  totalPrice: 0,
  error: "",
};

const seatSlice = createSlice({
  name: "seatSlice",
  initialState,
  reducers: {
    toggleSeat: (state, action) => {
      const { id, price } = action.payload;
      // Check if the seat is already selected
      const isSelected = state.selectedSeats.find((seat) => seat.id === id);

      if (isSelected) {
        // Remove seat if already selected
        state.selectedSeats = state.selectedSeats.filter(
          (seat) => seat.id !== id,
        );
        state.error = "";
      } else if (state.selectedSeats.length < 8) {
        // Add seat if the limit (8) is not exceeded
        state.selectedSeats.push({ id, price });
        state.error = "";
      } else {
        // Show error if user selects more than 8 seats
        state.error = "You can only select up to 8 seats.";
      }
      // Calculate total price
      state.totalPrice = state.selectedSeats.reduce(
        (acc, seat) => acc + seat.price,
        0,
      );
    },
  },
});

export const { toggleSeat } = seatSlice.actions;
export default seatSlice;
