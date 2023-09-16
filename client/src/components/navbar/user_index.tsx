import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-gray-800 text-white py-5 px-4 flex justify-between items-center">
        <Link to="/home">
      <div className="text-2xl font-bold">Logo</div>
      </Link>
      <div className="space-x-4">
        <ul className="flex space-x-4">
        <Link to="/home/about" className="text-2xl font-bold">About Us</Link>
      <Link to="/home/contact" className="text-2xl font-bold">Contact Us</Link>
      <Link to="/home/login" className="text-2xl font-bold">Login</Link>
      <p className="text-2xl font-bold">|</p>
      <Link to="/home/register" className="text-2xl font-bold">Register</Link>

        </ul>
      </div>
    </div>
  );
}

export default Header;
