import { signOut } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { clearUserInfo } from "../../redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const userSignOut = () => {
    dispatch(clearUserInfo());
    signOut(auth)
      .then(() => {
        toast("Successfully signed out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <nav className="bg-blue-900 p-4 shadow-2xl">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-medium">
          Bus Ticket Reservation
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (visible on larger screens) */}
        <div className={`hidden md:flex space-x-4`}>
          <Link to="/" className="text-white font-medium hover:text-gray-300">
            Home
          </Link>
          {userInfo ? (
            <>
              <Link
                to="/user"
                className="text-white font-medium hover:text-gray-300"
              >
                Profile
              </Link>
              <span
                onClick={() => userSignOut()}
                className="text-white font-medium hover:text-gray-300 cursor-pointer"
              >
                Sign Out
              </span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white font-medium hover:text-gray-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white font-medium hover:text-gray-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <ul className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <li>
            <Link to="/" className="text-white font-medium hover:text-gray-300">
              Home
            </Link>
          </li>
          {userInfo ? (
            <>
              <li>
                <Link
                  to="/user"
                  className="text-white font-medium hover:text-gray-300"
                >
                  Profile
                </Link>
              </li>
              <li>
                <span
                  onClick={() => userSignOut()}
                  className="text-white font-medium hover:text-gray-300 cursor-pointer"
                >
                  Sign Out
                </span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-white font-medium hover:text-gray-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-white font-medium hover:text-gray-300"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
