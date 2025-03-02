import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-black p-4 shadow-lg flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_1iTRinc7ejZLkHzvidWR9ck1xHso99e-A&s"
            alt="MechKonnect Logo"
            className="h-10 w-10 mr-2"
          />
        </Link>
        <Link
          to="/home"
          className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300 cursor-pointer"
        >
          She-Cab
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="text-white hover:text-blue-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/joinus" className="text-white hover:text-blue-400 transition duration-300">
              Join Us
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-white hover:text-blue-400 transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="text-white hover:text-blue-400 transition duration-300">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
