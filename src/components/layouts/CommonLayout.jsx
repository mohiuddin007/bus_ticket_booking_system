/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
