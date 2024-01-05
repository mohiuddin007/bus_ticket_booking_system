/* eslint-disable react/prop-types */
import { useState } from "react";
import BusSeat from "./BusSeat";
import Button from "../core/Button";
import BookingForm from "./BookingForm";
import SampleSeat from "./SampleSeat";

const SeatBooking = (props) => {
  const [selectedSeat, setSelectedSeat] = useState([]);

  const handleSeatSelection = (seatNumber, isSelected) => {
    if (isSelected) {
      setSelectedSeat([...selectedSeat, seatNumber]);
    } else {
      const remainingSeat = selectedSeat.filter((item) => item != seatNumber);
      setSelectedSeat(remainingSeat);
    }
  };
  console.log(props?.data, selectedSeat);

  const handleSubmit = () => {};
  return (
    <div>
      <div className="bg-gray-200 flex flex-wrap items-center justify-center py-20">
        <div className="bg-white p-8 rounded-lg shadow-md md:mr-4 w-full md:w-4/12">
          <h2 className="text-2xl font-bold mb-3">Select Your Seat</h2>
          <SampleSeat />

          <div className="grid grid-cols-4 gap-4 mt-10">
            {props?.data &&
              props?.data?.seats &&
              props?.data?.seats.map((seat, index) => (
                <BusSeat
                  key={`${index}${props?.data?.id}`}
                  seatNumber={seat?.name}
                  isBooked={seat?.isBooked}
                  onSelect={handleSeatSelection}
                />
              ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md md:ml-4 w-full md:w-7/12">
          <BookingForm />
          <div className="flex justify-center my-3 px-3">
            <Button onClick={handleSubmit} className="">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
