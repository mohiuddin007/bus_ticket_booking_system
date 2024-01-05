import { useNavigate } from "react-router-dom";
import Button from "../core/Button";

const AvailableBus = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking/${3}`);
  };

  return (
    <div className="p-5 my-4 rounded-lg bg-white border-2 border-blue-900 shadow-sm">
      <div className="flex flex-wrap justify-between">
        <div className="">
          <h3 className="text-blue-900 font-bold">Hanif Enterprise</h3>
          <span className="text-gray-600 text-sm">
            Hino, AK1J Super Plus Non AC
          </span>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-gray-700">Route:</span>{" "}
            <span className="text-blue-900">Dhaka - Chittagong</span>
          </p>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-gray-700">Starting Point:</span>{" "}
            <span className="text-blue-900">Dhaka</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Ending Point:</span>{" "}
            <span className="text-blue-900">Chittagong</span>
          </p>
        </div>
        <div className="md:border-l md:border-1 md:border-blue-900 md:pl-2">
          <p>
            <span className="font-medium text-gray-700">DEPARTURE TIME:</span>{" "}
            <span className="text-blue-900 font-bold">8:00 AM</span>
          </p>
          <p className="mt-2">
            <span className="font-semibold text-gray-700">ARRIVAL TIME:</span>{" "}
            <span className="text-blue-900 font-bold">3:30 PM</span>{" "}
          </p>
        </div>
        <div className="md:border-l md:border-1 md:border-blue-900 md:pl-2">
          <span className="font-semibold text-gray-700">AVAILABLE SEATS:</span>{" "}
          <span className="font-bold text-blue-900">40</span>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-900">৳ 700</p>
          </div>
          <div>
            <Button onClick={handleBookNow} className="">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableBus;
