/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";

const BusSeat = ({ seatNumber, isBooked, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSeatClick = () => {
    if (isBooked) {
      toast("This seat is already booked!");
    } else {
      setIsSelected(!isSelected);
      onSelect(seatNumber, !isSelected);
    }
  };

  return (
    <div
      className={`p-4 rounded-md text-center cursor-pointer ${
        isSelected && !isBooked
          ? "bg-blue-500 text-white"
          : isBooked
          ? "bg-red-500 text-white"
          : "bg-gray-300 hover:bg-gray-400"
      }`}
      onClick={handleSeatClick}
    >
      {seatNumber}
    </div>
  );
};

export default BusSeat;
