import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-blue-900 p-4 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand */}
        <Link to="/" className="text-white text-xl font-medium">
          Bus Ticket Reservation
        </Link>

        {/* Burger Menu (visible on mobile screens) */}
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
          <Link
            to="/about"
            className="text-white font-medium hover:text-gray-300"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-white font-medium hover:text-gray-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:text-gray-300"
          >
            Contact
          </Link>
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
        </div>
      </div>
      {isMobileMenuOpen && (
        <ul className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <li>
            <Link to="/" className="text-white font-medium hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-medium hover:text-gray-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white font-medium hover:text-gray-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-medium hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
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
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
