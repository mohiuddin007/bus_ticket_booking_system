/* eslint-disable react/prop-types */

import { toast } from "react-toastify";
import Button from "../core/Button";
import SelectedBusDetails from "./SelectedBusDetails";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../redux/userSlice";
import { updateRoute } from "../../redux/busSlice";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (
      props?.selectedSeat &&
      Array.isArray(props?.selectedSeat) &&
      props?.selectedSeat.length > 0
    ) {
      //user info update
      const bookingInfo = {
        selectedSeat: props?.selectedSeat,
        passengerInfo: data,
        bookedBus: props?.data,
      };
      if (userInfo && userInfo?.bookingInfo) {
        const user = {
          ...userInfo,
          bookingInfo: [...userInfo.bookingInfo, bookingInfo],
        };
        dispatch(setUserInfo(user));
      } else if (userInfo && !userInfo?.bookingInfo) {
        const user = {
          ...userInfo,
          bookingInfo: [bookingInfo],
        };
        dispatch(setUserInfo(user));
      }
      //   else if (!userInfo) {
      //     const user = {
      //       id: 1,
      //       name: "John Doe",
      //       email: "john@example.com",
      //       bookingInfo: [bookingInfo],
      //     };
      //     dispatch(setUserInfo(user));
      //   }

      //bus route update
      const updatedSeats = props?.data?.seats.map((seat) => {
        return {
          ...seat,
          isBooked: props?.selectedSeat.includes(seat.name),
        };
      });
      dispatch(
        updateRoute({
          id: props?.data?.id,
          updatedRoute: { ...props?.data, seats: updatedSeats },
        })
      );

      navigate("/user");
    } else {
      toast("Please select your seat!");
    }
  };
  return (
    <div>
      <SelectedBusDetails data={props?.data} />
      {props?.selectedSeat &&
        Array.isArray(props?.selectedSeat) &&
        props?.selectedSeat.length > 0 && (
          <>
            <h3 className="text-xl font-bold mt-4 mb-2 text-blue-900 text-center">
              Your selected seat:
            </h3>
            {props?.selectedSeat.map((item, index) => (
              <div
                className="flex justify-between my-2 border px-2"
                key={`${item}${index}`}
              >
                <div>
                  <p>
                    <span className="font-semibold text-gray-700">Seat:</span>{" "}
                    <span className="text-blue-900 font-bold">{item}</span>{" "}
                  </p>
                </div>
                <div>
                  <p className="text-blue-900 font-bold text-xl">
                    ৳ {props?.data?.price}
                  </p>
                </div>
              </div>
            ))}

            <div className="text-right">
              <p className="text-xl">
                <span className="font-semibold text-gray-700">Total:</span>{" "}
                <span className="text-blue-900 font-bold ">
                  ৳ {props?.data?.price * props?.selectedSeat.length}
                </span>
              </p>
            </div>
          </>
        )}
      <h3 className="text-xl font-bold mt-4 mb-2 text-blue-900 text-center">
        Passenger Information
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="example"
          >
            Passenger Name
          </label>
          <input
            {...register("name", { required: true })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            {...register("phone", { required: true })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="number"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
        </div>

        <div className="flex justify-center my-3 px-3">
          <Button type="submit" className="">
            Book Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
