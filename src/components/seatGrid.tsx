import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Seat from "./seat";

// Seat categories with price and assigned rows
const seatCategories = [
  { name: "Platinum", rows: ["A", "B"], price: 200 },
  { name: "Gold", rows: ["C", "D"], price: 150 },
  { name: "Silver", rows: ["E", "F"], price: 100 },
];

// Number of seats per row
const cols = 10;

export default function SeatGrid() {
  const error = useSelector((state: RootState) => state.seats.error);

  return (
    <div className="p-4 space-y-6">
      {/* Mapping through seat categories */}
      {seatCategories.map(({ name, rows, price }) => (
        <div key={name}>
          {/* Category Name */}
          <h2 className="text-md text-gray-500 font-small mb-2 lex flex flex-col items-start">
            Rs. {price} {name}
          </h2>

          {/* Seat Grid */}
          <div className="grid grid-cols-5 xs:grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-2">
            {rows.map((row) =>
              Array.from({ length: cols }, (_, i) => (
                <Seat
                  key={`${row}${i + 1}`}
                  id={`${row}${i + 1}`}
                  price={price}
                />
              )),
            )}
          </div>
        </div>
      ))}

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
