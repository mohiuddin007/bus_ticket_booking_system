const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Bus Ticket Reservation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
