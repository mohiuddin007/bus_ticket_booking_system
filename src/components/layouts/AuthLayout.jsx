/* eslint-disable react/prop-types */
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div className="container mx-auto px-4">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
