import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ToastContainer, toast } from "react-toastify";

export default function Summary() {
  const { selectedSeats, totalPrice } = useSelector(
    (state: RootState) => state.seats,
  );

  // Handle Booking Confirmation
  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      toast.error("Please select at least one seat before booking.", {
        position: "top-right",
        autoClose: 5000,
      });
    } else {
      toast.success(
        `Booking Confirmed! You have booked ${selectedSeats.length} seat(s) for ₹${totalPrice}.`,
        { position: "top-center", autoClose: 5000 },
      );
    }
  };

  return (
    <div className="p-6 mt-5 shadow-md bg-white rounded-md">
      <h2 className="text-lg font-bold border-b pb-2 mb-4">Booking Summary</h2>

      {/* Selected seat display */}
      {selectedSeats.length > 0 ? (
        <ul className="space-y-2">
          {selectedSeats.map((seat) => (
            <li
              key={seat.id}
              className="flex justify-between px-3 rounded-md"
            >
              <span className="font-medium">{seat.id}</span>
              <span className="text-gray-700">₹{seat.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No seats selected</p>
      )}

      {/* Total Price */}
      <h3 className="mt-4 text-xl font-bold text-gray-800">
        Total: <span className="text-green-600">Rs.{totalPrice}</span>
      </h3>

      {/* Booking Button */}
      <button
        className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md w-full transition-all"
        onClick={handleBooking}
      >
        Book Now
      </button>

      <ToastContainer />
    </div>
  );
}
