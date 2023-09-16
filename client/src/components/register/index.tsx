import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "assets/img/logo/logo.png";
import { BACKEND_URL } from 'constants/definitions';
import OTPModal from 'components/OTP/OTPmodal';
function Register() {
    const [isShow, setIsShow] = useState(true);
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: 'male',
        dob: '',
        city: '',
        pincode: '',
        mobile: '',
      });
      const toggleModal = () => {
        return setIsShow(!isShow);
      };
    
      const [response, setResponse] = useState(null);
    
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        try {
          const response = await fetch(`${BACKEND_URL}/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            setResponse(data); // You can handle the response data as needed
          } else {
            console.error('Failed to submit form');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Logo Section */}
      <div className="mx-auto pt-8 flex items-center justify-center ">
        <img src={logo} width={65} height={65} alt="Logo" />
        <span className="ml-2 text-3xl font-bold dark:text-white">
          {" "}
          Rotaract Strides
        </span>
      </div>
      
      {/* Registration Form */}
      <div className="flex justify-center items-center mt-20">
        <div className="max-w-screen-md w-full p-4 border border-gray-300 rounded-lg bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">
            
              Register Yourself
            
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
            {/* Left Column */}
            <div className="w-full md:w-1/2 mb-4 pr-4 border-r border-gray-300">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                  Email ID:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gender:</label>
                <select
                  name="gender"
                  value={"male"}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-800">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
            </div>
            <Link to="/home" className='absolute top-9 left-5'>
          <div className='w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full'>
            <span className='text-2xl font-bold '>&lt;</span>
          </div>
        </Link>

            {/* Right Column */}
            <div className="w-full md:w-1/2 mb-4 pl-4">
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-800">
                  Mobile:
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-800">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-800">
                  Pincode:
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
            </div>

            {/* Submit Button */}
            <div className="w-full mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
              
            </div>
          </form>
          <OTPModal
            isShow={isShow}
            toggleModal={toggleModal}
            mobile={mobile}
            password={password}
      />
        </div>
      </div>
    </div>
  );
}

export default Register;