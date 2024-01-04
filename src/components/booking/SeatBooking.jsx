import { useState } from "react";
import BusSeat from "./BusSeat";

const SeatBooking = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelection = (seatNumber, isSelected) => {
    if (isSelected) {
      setSelectedSeat(seatNumber);
    } else {
      setSelectedSeat(null);
    }
  };
  return (
    <div>
      <div className="bg-gray-200 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Select Your Seat</h2>

          <div className="grid grid-cols-4 gap-4">
            <BusSeat seatNumber={1} onSelect={handleSeatSelection} />
            <BusSeat seatNumber={2} onSelect={handleSeatSelection} />
            <BusSeat seatNumber={3} onSelect={handleSeatSelection} />
            <BusSeat seatNumber={4} onSelect={handleSeatSelection} />
            <BusSeat seatNumber={5} onSelect={handleSeatSelection} />
            <BusSeat seatNumber={6} onSelect={handleSeatSelection} />
            <BusSeat seatNumber={7} onSelect={handleSeatSelection} />
            <BusSeat seatNumber={8} onSelect={handleSeatSelection} />

          </div>

          <div className="mt-8">
            <p className="text-gray-600">
              Selected Seat:{" "}
              <span className="font-bold">{selectedSeat || "None"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
