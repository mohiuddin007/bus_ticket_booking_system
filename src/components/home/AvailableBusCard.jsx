/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "../core/Button";

const AvailableBusCard = (props) => {
  const navigate = useNavigate();

  const handleBookNow = (selected) => {
    navigate(`/booking/${selected?.slug}`);
  };

  return (
    <div className="p-5 my-4 rounded-lg bg-white border-2 border-blue-900 shadow-md ">
      <div className="flex flex-wrap justify-between">
        <div className="">
          <h3 className="text-blue-900 font-bold">{props?.data?.busName}</h3>
          <span className="text-gray-600 text-sm">
            {props?.data?.description}
          </span>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-gray-700">Route:</span>{" "}
            <span className="text-blue-900">{props?.data?.route}</span>
          </p>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-gray-700">Starting Point:</span>{" "}
            <span className="text-blue-900">{props?.data?.startingPoint}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Ending Point:</span>{" "}
            <span className="text-blue-900">{props?.data?.endingPoint}</span>
          </p>
        </div>
        <div className="md:border-l md:border-1 md:border-blue-900 md:pl-2">
          <p>
            <span className="font-medium text-gray-700">DEPARTURE TIME:</span>{" "}
            <span className="text-blue-900 font-bold">
              {props?.data?.departure}
            </span>
          </p>
          <p className="mt-2">
            <span className="font-semibold text-gray-700">ARRIVAL TIME:</span>{" "}
            <span className="text-blue-900 font-bold">
              {props?.data?.arrival}
            </span>{" "}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-gray-700">DATE:</span>{" "}
            <span className="text-blue-900 font-bold">{props?.data?.date}</span>{" "}
          </p>
        </div>
        <div className="md:border-l md:border-1 md:border-blue-900 md:pl-2">
          <span className="font-semibold text-gray-700">AVAILABLE SEATS:</span>{" "}
          <span className="font-bold text-blue-900">
            {props?.data?.availableSeats}
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-900">
              ৳ {props?.data?.price}
            </p>
          </div>
          <div>
            <Button onClick={() => handleBookNow(props?.data)} className="">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableBusCard;
