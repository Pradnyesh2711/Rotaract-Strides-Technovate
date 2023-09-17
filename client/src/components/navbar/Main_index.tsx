import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "assets/img/logo/logo.png";
import { useAppSelector } from "app/store";


function User_Header() {
    const users = useAppSelector((state) => state.user.data);  
    return (
      <div className="bg-white-600 text-black py-5 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 mr-2"
          />
            <h1 className="text-2xl font-bold text-black ml-5">Rotaract Stride</h1>
        </Link>
  
        <div className="space-x-4">
          <ul className="flex space-x-4">
            <Link to="/home/about" className="text-1xl font-bold hover:text-blue-500">About Us</Link>
            <Link to="/home/contact" className="text-1xl font-bold hover:text-blue-500">Contact Us</Link>
            {users && (
            <>
              <span className="text-1xl font-bold">Welcome, {users.name}!</span>
              <Link to="/" className="text-1xl font-bold hover:text-blue-500">
                Logout
              </Link>
              <p className="text-1xl font-bold">|</p>
            </>
          )}

          </ul>
        </div>
      </div>
    );
  }
  export default User_Header;