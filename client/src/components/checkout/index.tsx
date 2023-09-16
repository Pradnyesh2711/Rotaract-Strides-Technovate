import EventsC from 'components/eventcard/eventcard';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import PaymentConfirmation from 'components/PaymentConformation';

export default function Checkout() {
    const history = useNavigate();
    const handlePayNowClick = () => {
        
        history('/home/user/checkout/payment');
      };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-screen-xl p-4 bg-white shadow-lg rounded-lg flex">
    {/* Event Card (Left) */}
    <div className="w-1/2 p-4">
      <div className="bg-blue-200 p-4 rounded-lg">
        <EventsC />
      </div>
    </div>

    {/* Payment Details Box (Right) */}
    <div className="w-1/2 p-4">
      <div className="bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              placeholder="**** **** **** ****"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
              Expiration Date
            </label>
            <input
              type="text"
              id="expiration"
              name="expiration"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              placeholder="MM/YY"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              placeholder="123"
            />
          </div>

          {/* Add more payment fields as needed */}
          
          <button
      type="button"
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      onClick={handlePayNowClick}
    >
      Pay Now
    </button>

        </form>
      </div>
    </div>
  </div>
</div>

  )
}
