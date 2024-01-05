import { useSelector } from "react-redux";
import SeatBooking from "../components/booking/SeatBooking";
import HeroBanner from "../components/home/HeroBanner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Booking = () => {
  const { slug } = useParams();
  const busRoutes = useSelector((state) => state.bus.routes);

  const [busDetails, setBusDetails] = useState({});

  useEffect(() => {
    const selectedBus = busRoutes.find((item) => item?.slug === slug);
    setBusDetails(selectedBus);
  }, [slug, busRoutes]);

  return (
    <div>
      <HeroBanner />
      <SeatBooking data={busDetails} />
    </div>
  );
};

export default Booking;
