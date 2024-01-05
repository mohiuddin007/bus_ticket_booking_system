const SampleSeat = () => {
  return (
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
          className={`p-4 rounded-md text-center cursor-pointer bg-red-500 text-white`}
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
  );
};

export default SampleSeat;
