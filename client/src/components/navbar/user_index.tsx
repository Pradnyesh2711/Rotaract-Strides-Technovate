import React from 'react';
import { Link } from 'react-router-dom';
import logo from "assets/img/logo/logo.png";

function Header() {
  return (
<div className="bg-white-600 text-black py-5 px-4 flex justify-between items-center">
  <Link to="/home">
    <img
      src={logo}
      alt="Logo"
      className="w-20 h-20 mr-2" // Adjust width, height, and margin as needed
    />
  </Link>


      <div className="space-x-4">
        <ul className="flex space-x-4">
        <Link to="/home/about" className="text-1xl font-bold">About Us</Link>
      <Link to="/home/contact" className="text-1xl font-bold">Contact Us</Link>
      <Link to="/home/login" className="text-1xl font-bold">Login</Link>
      <p className="text-1xl font-bold">|</p>
      <Link to="/home/register" className="text-1xl font-bold">Register</Link>

        </ul>
      </div>
    </div>
  );
}

export default Header;
