/* eslint-disable react/prop-types */
// BusSeat.js
import { useState } from 'react';

const BusSeat = ({ seatNumber, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSeatClick = () => {
    setIsSelected(!isSelected);
    onSelect(seatNumber, !isSelected);
  };

  return (
    <div
      className={`p-4 rounded-md text-center cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
      onClick={handleSeatClick}
    >
      {seatNumber}
    </div>
  );
};

export default BusSeat;
