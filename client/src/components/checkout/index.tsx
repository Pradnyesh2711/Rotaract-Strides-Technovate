import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PaymentConfirmation from "components/PaymentConformation";
import EventsCard from "components/eventcard/eventcard";
import User_Header from "components/navbar/Main_index";

export default function Checkout() {
  const history = useNavigate();
  const handlePayNowClick = () => {
    history("/home/user/checkout/payment");
};
const storedEvent = JSON.parse(localStorage.getItem('selectedEvent'));
  return (
    <div className="">
    <User_Header />
    
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      
      <div className="flex w-full max-w-screen-xl rounded-lg bg-white p-4 shadow-lg">

        {/* Event Card (Left) */}
        <div className="w-1/2 p-4">
          <div className="rounded-lg bg-blue-200 p-4">
          <EventsCard event={storedEvent}  />
          
          </div>
        </div>

        {/* Payment Details Box (Right) */}
        <div className="w-1/2 p-4">
          <div className="rounded-lg bg-gray-200 p-4">
            <h2 className="mb-4 text-xl font-semibold">Payment Details</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-indigo-200"
                  placeholder="**** **** **** ****"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="expiration"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expiration"
                  name="expiration"
                  className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-indigo-200"
                  placeholder="MM/YY"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-indigo-200"
                  placeholder="123"
                />
              </div>

              {/* Add more payment fields as needed */}

              <button
                type="button"
                className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                onClick={handlePayNowClick}
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
