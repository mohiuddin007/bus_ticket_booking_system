/* eslint-disable react/prop-types */
import Footer from "../common/footer";
import Navbar from "../common/navbar";

function AuthLayout({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default AuthLayout;
