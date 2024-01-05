/* eslint-disable react/prop-types */

const SelectedBusDetails = (props) => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="">
        <h3 className="text-blue-900 font-bold">{props?.data?.busName}</h3>
        <span className="text-gray-600 text-sm">
          {props?.data?.description}
        </span>
        <p className="md:mt-2 text-sm">
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
      <div className="mt-2">
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
    </div>
  );
};

export default SelectedBusDetails;
