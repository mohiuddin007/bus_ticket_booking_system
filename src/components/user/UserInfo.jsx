import { useDispatch, useSelector } from "react-redux";
import SelectedBusDetails from "../booking/SelectedBusDetails";
import Button from "../core/Button";
import { setUserInfo } from "../../redux/userSlice";
import { updateRoute } from "../../redux/busSlice";

const UserInfoPage = () => {
  const loggedInUserInfo = useSelector((state) => state.user.userInfo);
  const busRoutes = useSelector((state) => state.bus.routes);
  const dispatch = useDispatch();


  const handleCancelBooking = (param) => {
    const selectedSeat = param?.selectedSeat;
    const busInfo = busRoutes.find((bus) => bus?.id === param?.bookedBus?.id);

    //cancel booking from userinfo
    const updatedBookingInfo = loggedInUserInfo?.bookingInfo.filter(
      (item) => item?.bookedBus?.id != param?.bookedBus?.id
    );
    const user = {
      ...loggedInUserInfo,
      bookingInfo: updatedBookingInfo,
    };
    dispatch(setUserInfo(user));

    //change isBooked value from bus routes
    const updatedSeats = busInfo.seats.map((seat) => {
      return {
        ...seat,
        isBooked: selectedSeat.includes(seat.name) && false,
      };
    });
    dispatch(
      updateRoute({
        id: busInfo?.id,
        updatedRoute: { ...busInfo, seats: updatedSeats },
      })
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">User Information</h2>
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Profile</h3>
        <p className="text-gray-600 mb-2">Name: {loggedInUserInfo?.name}</p>
        <p className="text-gray-600 mb-2">Email: {loggedInUserInfo?.email}</p>
        <p className="text-gray-600">Phone: {loggedInUserInfo?.phone}</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">
        Your booking Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loggedInUserInfo?.bookingInfo &&
          Array.isArray(loggedInUserInfo?.bookingInfo) &&
          loggedInUserInfo?.bookingInfo.map((item, index) => (
            <div
              className="bg-white p-4 rounded-md shadow-md"
              key={index + "bookinginfo"}
            >
              <SelectedBusDetails data={item?.bookedBus} />

              <p className="text-gray-600 mt-1">
                Passenger Name: {item?.passengerInfo?.name}
              </p>
              <p className="text-gray-600 mt-1">
                Phone Number: {item?.passengerInfo?.phone}
              </p>
              <p className="text-gray-600 mt-1">
                Seat Number:{" "}
                {item?.selectedSeat.map((seatNum) => (
                  <span key={seatNum} className="mx-1">
                    {seatNum}
                  </span>
                ))}
              </p>

              <Button
                className="mt-5 "
                variant="cta"
                onClick={() => handleCancelBooking(item)}
              >
                Cancel Booking
              </Button>
            </div>
          ))}
        {!loggedInUserInfo?.bookingInfo ? (
          <p className="text-gray-600">You have no booking right now!</p>
        ) : (
          loggedInUserInfo?.bookingInfo &&
          Array.isArray(loggedInUserInfo?.bookingInfo) &&
          loggedInUserInfo?.bookingInfo.length === 0 && (
            <p className="text-gray-600">You have no booking right now!</p>
          )
        )}
      </div>
    </div>
  );
};

export default UserInfoPage;
