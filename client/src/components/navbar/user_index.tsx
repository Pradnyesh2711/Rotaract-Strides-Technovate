import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/img/logo/logo.png";

function Header() {
  return (
    <div className="bg-white-600 text-black flex items-center justify-between px-4 py-5">
      <Link to="/" className="flex items-center">
        {" "}
        {/* Wrap both logo and heading in a flex container */}
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-20" // Removed margin classes
        />
        <h1 className="text-black text-2xl font-bold ml-5">Rotaract Stride</h1>{" "}
        {/* Move the heading here */}
      </Link>

      <div className="space-x-4">
        <ul className="flex space-x-4">
          <Link
            to="/home/about"
            className="text-1xl font-bold hover:text-blue-500"
          >
            About Us
          </Link>
          <Link
            to="/home/contact"
            className="text-1xl font-bold hover:text-blue-500"
          >
            Contact Us
          </Link>
          <Link to="/auth" className="text-1xl font-bold hover:text-blue-500">
            Already a member ?
          </Link>
          <Link
            to="/home/login"
            className="text-1xl font-bold hover:text-blue-500"
          >
            Login
          </Link>
          <p className="text-1xl font-bold">|</p>
          <Link
            to="/home/register"
            className="text-1xl font-bold hover:text-blue-500"
          >
            Register
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
