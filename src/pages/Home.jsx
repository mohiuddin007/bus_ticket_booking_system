import { useSelector } from "react-redux";
import HeroBanner from "../components/home/HeroBanner";
import AvailableBusCard from "../components/home/AvailableBusCard";

const Home = () => {
  const busRoutes = useSelector((state) => state.bus.routes);

  return (
    <div className="bg-gray-200">
      <HeroBanner />
      <div className=" md:p-12">
        <h1 className="text-2xl font-bold mb-4">All Buses</h1>
        {busRoutes && busRoutes.length > 0 ? (
          busRoutes.map((bus) => <AvailableBusCard key={bus?.id} data={bus} />)
        ) : (
          <h1>No bus available right now!!</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
