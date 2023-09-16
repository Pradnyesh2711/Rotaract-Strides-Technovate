import React from 'react';

function Header() {
  return (
    <div className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <div className="space-x-4">
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-white hover:text-orange-500">About Us</a></li>
          <li><a href="#contact" className="text-white hover:text-orange-500">Contact Us</a></li>
          <li><a href="#login" className="text-white hover:text-orange-500">Login/Register</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
