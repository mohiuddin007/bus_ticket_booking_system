const UserInfoPage = () => {
  const userInfo = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "********",
  };
  const bookedInfo = [
    { id: 1, destination: "City A", date: "2022-08-10", seatNumber: "A1" },
    { id: 2, destination: "City B", date: "2022-08-15", seatNumber: "B2" },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">User Information</h2>
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Profile</h3>
        <p className="text-gray-600 mb-2">Name: {userInfo.name}</p>
        <p className="text-gray-600 mb-2">Email: {userInfo.email}</p>
        <p className="text-gray-600">Password: {userInfo.password}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookedInfo.map((booking) => (
          <div key={booking.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              {booking.destination}
            </h3>
            <p className="text-gray-600 mb-2">Date: {booking.date}</p>
            <p className="text-gray-600">Seat Number: {booking.seatNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfoPage;
