import { useNavigate } from "react-router-dom";
import Button from "../core/Button";

const AvailableBus = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking/${3}`);
  };

  return (
    <div className="p-5 my-4 rounded-lg bg-slate-300 border-3 border-blue-900 shadow-sm">
      <div className="flex flex-wrap justify-between">
        <div>
          <h6 className="text-blue-900 font-medium">Hanif Enterprise</h6>
          <p>Hino, AK1J Super Plus Non AC</p>
          <p>Route: Dhaka - Chittagong</p>
          <p>Starting Point: Dhaka</p>
          <p>Ending Point: Chittagong</p>
        </div>
        <div>
          DEPARTURE TIME
          <span>8:00 AM</span>
        </div>
        <div>
          ARRIVAL TIME <span>3:30 PM</span>{" "}
        </div>
        <div>
          <h2>৳700.00</h2>

          <Button variant="ghost" onClick={handleBookNow}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvailableBus;
