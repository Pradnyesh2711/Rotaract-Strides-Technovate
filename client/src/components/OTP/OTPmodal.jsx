import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "constants/definitions";
const OTPModal = ({ isShow, toggleModal, mobile, password }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const inputFocus = (index) => {
    if (otp[index] === "") {
      document.getElementById(`otp-${index}`).focus();
    }
  };

  const validate = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please Enter a 6-digit OTP");
      return;
    }

    const formData = {
      mobile: mobile,
      password: password,
      otp: otp,
    };

    try {
      let res = await axios.post(`${BACKEND_URL}/auth/checkotp`, formData);
      if (res.data?.mobile) {
        toast.success("Account Created");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error("Invalid OTP");
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isShow ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button onClick={toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-3">OTP Verification</h2>
        <p>
          Enter the 6-digit one-time password sent to your Mobile No. <br />
          <span className="mt-2">{mobile}</span>
        </p>
        <div className="mt-4 flex justify-center space-x-2">
          {Array.from({ length: 6 }, (_, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              className="w-12 h-12 text-center border border-gray-300 rounded"
              type="text"
              maxLength="1"
              value={otp[index] || ""}
              onChange={(e) => {
                if (/^\d+$/.test(e.target.value) && e.target.value.length <= 1) {
                  const newOtp = [...otp];
                  newOtp[index] = e.target.value;
                  setOtp(newOtp.join(""));
                  inputFocus(index + 1);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && otp[index] === "") {
                  inputFocus(index - 1);
                }
              }}
            />
          ))}
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={validate}
          >
            Validate
          </button>
        </div>
        <div className="mt-4 bg-gray-100 text-gray-800 p-2 text-center">
          <span>Didn't get the code - </span>
          <a href="#" className="text-blue-500 underline">
            Resend
          </a>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;
