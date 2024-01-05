const HeroBanner = () => {
  return (
    <div
      className="relative h-screen md:max-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://busbd.com.bd/images/banner/banner-bg-sm.webp")',
        height: "300px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            BOOK YOUR BUS TICKET
          </h1>
          <p className="text-lg">
            Choose Your Destinations And Dates To Reserve A Ticket.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
