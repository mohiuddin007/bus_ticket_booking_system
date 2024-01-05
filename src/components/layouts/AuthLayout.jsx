/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
