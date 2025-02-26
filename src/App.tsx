import "./App.css";
import SeatGrid from "./components/seatGrid";
import Summary from "./components/summary";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Seat Bokking System</h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Seat Grid */}
          <div className="w-full md:w-2/3">
            <SeatGrid />
          </div>
          {/* Booking Summary */}
          <div className="w-full md:w-1/3">
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
