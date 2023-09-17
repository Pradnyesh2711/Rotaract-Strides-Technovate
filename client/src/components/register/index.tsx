import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/img/logo/logo.png";
import { BACKEND_URL } from "constants/definitions";
import OTPModal from "components/OTP/OTPmodal";
import axios from "axios";
function Register() {
  const [isShow, setIsShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
    dob: "",
    city: "",
    pincode: "",
    mobile: "",
  });
  const toggleModal = () => {
    return setIsShow(!isShow);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    toggleModal();

    try {
      const res = await axios.post(`${BACKEND_URL}/auth/register`, formData);
      res.data?.user && toggleModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={`min-h-screen bg-gray-200 ${isShow ? " opacity-5" : ""}`}>
        {/* Logo Section */}
        <div className="mx-auto flex items-center justify-center pt-8 ">
          <img src={logo} width={65} height={65} alt="Logo" />
          <span className="ml-2 text-3xl font-bold dark:text-white">
            {" "}
            Rotaract Strides
          </span>
        </div>

        {/* Registration Form */}
        <div className="mt-10 flex items-center justify-center">
          <div className="w-full max-w-screen-md rounded-lg border border-gray-300 bg-white p-4">
            <h2 className="mb-4 text-center text-2xl font-bold">
              Register Yourself
            </h2>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-wrap justify-between"
            >
              {/* Left Column */}
              <div className="mb-4 w-full border-r border-gray-300 pr-4 md:w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Email ID:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Gender:
                  </label>
                  <select
                    name="gender"
                    value={"male"}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>
              </div>
              <Link to="/" className="absolute left-5 top-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-600 text-white">
                  <span className="text-2xl font-bold ">&lt;</span>
                </div>
              </Link>

              {/* Right Column */}
              <div className="mb-4 w-full pl-4 md:w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Mobile:
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-800"
                  >
                    City:
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Pincode:
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Password:
                  </label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex w-full justify-center">
                <button
                  type="submit"
                  className="w-50p min-w-[50px] rounded-md bg-navy-600 px-4 py-2 font-semibold text-white hover:bg-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <OTPModal
        isShow={isShow}
        toggleModal={toggleModal}
        mobile={formData.mobile}
        password={formData.password}
      />
    </>
  );
}

export default Register;
