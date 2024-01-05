import AvailableBus from "../components/home/AvailableBus";
import HeroBanner from "../components/home/HeroBanner";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <HeroBanner />
      <div className=" md:p-12">
        <h1 className="text-2xl font-bold mb-4">All Buses</h1>
        <AvailableBus />

        <AvailableBus />
        <AvailableBus />
      </div>
    </div>
  );
};

export default Home;
