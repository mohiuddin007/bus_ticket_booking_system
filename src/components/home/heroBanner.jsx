const HeroBanner = () => {
  return (
    <div
      className="relative h-screen md:max-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://c8.alamy.com/comp/2EXTPCY/bus-stop-city-transport-people-waiting-buses-urban-street-road-men-and-women-public-transportation-vector-illustration-city-street-bus-traffic-transportation-2EXTPCY.jpg")',
        height: "300px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Your Title</h1>
          <p className="text-lg">
            Your description goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
