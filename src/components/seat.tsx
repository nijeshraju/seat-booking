import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleSeat } from "../store/seatSlice";
import clsx from "clsx";

interface SetProps {
  id: string;
  price: number;
}

export default function Seat({ id, price }: SetProps) {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(
    (state: RootState) => state.seats.selectedSeats,
  );
  // Check if the seat is selected
  const isSelected = selectedSeats.some((seat) => seat.id === id);

  return (
    <div
      // Conditional class styling based on seat category and selection
      className={clsx(
        "w-10 h-10 m-1 cursor-pointer flex items-center justify-center rounded-md border",
        price === 100 && "bg-yellow-100 border-yellow-300",
        price === 150 && "bg-red-100 border-red-300",
        price === 200 && "bg-blue-100 border-blue-300",
        isSelected && "bg-green-400 border-green-700 text-white",
      )}
      onClick={() => dispatch(toggleSeat({ id, price }))}
    >
      {id}
    </div>
  );
}
