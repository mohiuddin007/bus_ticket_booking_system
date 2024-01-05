import { useState } from "react";
import BusSeat from "./BusSeat";
import Button from "../core/Button";

const SeatBooking = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelection = (seatNumber, isSelected) => {
    if (isSelected) {
      setSelectedSeat(seatNumber);
    } else {
      setSelectedSeat(null);
    }
  };

  const handleSubmit = () => {};
  return (
    <div>
      <div className="bg-gray-200 flex flex-wrap items-center justify-center py-20">
        <div className="bg-white p-8 rounded-lg shadow-md md:mr-4">
          <h2 className="text-2xl font-bold mb-3">Select Your Seat</h2>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-blue-900 font-bold">Available </p>
              <div
                className={`p-4 rounded-md text-center cursor-pointer bg-gray-300 text-white`}
              >
                A1
              </div>
            </div>
            <div>
              <p className="text-blue-900 font-bold">Booked </p>
              <div
                className={`p-4 rounded-md text-center cursor-pointer bg-green-500 text-white`}
              >
                B3
              </div>
            </div>
            <div>
              <p className="text-blue-900 font-bold">Selected </p>
              <div
                className={`p-4 rounded-md text-center cursor-pointer bg-blue-500 text-white`}
              >
                C1
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-10">
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
        <div className="bg-white p-8 rounded-lg shadow-md md:ml-4">
          <div className="flex justify-between my-2">
            <div>
              <p>Seat Num: A1</p>
            </div>
            <div>
              <p>700</p>
            </div>
          </div>
          <div className="text-right">
            <p>
              <span>Total:</span>
              <span>700</span>
            </p>
          </div>
          <Button onClick={handleSubmit} className="">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
