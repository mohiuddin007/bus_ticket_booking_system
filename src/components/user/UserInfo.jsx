import { useDispatch, useSelector } from "react-redux";
import SelectedBusDetails from "../booking/SelectedBusDetails";
import Button from "../core/Button";

const UserInfoPage = () => {
  const loggedInUserInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const userInfo = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "********",
  };

  console.log(loggedInUserInfo?.bookingInfo);

  const handleCancelBooking = (param) => {
    console.log(param);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">User Information</h2>
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Profile</h3>
        <p className="text-gray-600 mb-2">Name: {userInfo.name}</p>
        <p className="text-gray-600 mb-2">Email: {userInfo.email}</p>
        <p className="text-gray-600">Password: {userInfo.password}</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">
        Your booking Information
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loggedInUserInfo?.bookingInfo &&
          Array.isArray(loggedInUserInfo?.bookingInfo) &&
          loggedInUserInfo?.bookingInfo.map((item, index) => (
            <div
              className="bg-white p-4 rounded-md shadow-md"
              key={index + "bookinginfo"}
            >
              <SelectedBusDetails data={item?.bookedBus} />
              {/* <h3 className="text-lg font-semibold mb-2">
              {booking.destination}
            </h3>
            <p className="text-gray-600 mb-2">Date: {booking.date}</p> */}

              <p className="text-gray-600">
                Seat Number:{" "}
                {item?.selectedSeat.map((seatNum) => (
                  <span key={seatNum} className="mx-1">
                    {seatNum}
                  </span>
                ))}
              </p>

              <Button
              className="mt-5"
                onClick={() =>
                  handleCancelBooking(loggedInUserInfo?.bookingInfo)
                }
              >
                Cancel Booking
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserInfoPage;
