/* eslint-disable react/prop-types */
import Footer from "../common/footer";
import Navbar from "../common/navbar";

function CommonLayout({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default CommonLayout;
