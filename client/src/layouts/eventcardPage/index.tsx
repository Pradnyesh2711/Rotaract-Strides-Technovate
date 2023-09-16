import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import Header from 'components/navbar/user_index';

const EventCard = () => {

  return <div>
    <div><Header/></div>
    <div className="relative w-full">
  <input
    type="text"
    placeholder="Search events..."
    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500"
  />
  <button className="absolute top-0 right-0 bg-teal-500 text-white px-4 py-2 rounded-r-lg">
    Search
  </button>
</div>


     <div>
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-56 object-cover"
        src="https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Event"
      />
      <div className="px-6 py-4">
        <div className="text-xl font-semibold text-teal-500 mb-2">
          RC MARATHON
        </div>
        <p className="text-gray-700 mt-2 font-semibold text-base">Location: Mumbai, India</p>

        <p className="text-gray-700 mt-2">
          Welcome to the Event. This is a brief description of the event. You can provide more details here.
        </p>
        <p className="text-gray-700 mt-2 font-semibold text-base">Date:27/11/2023</p>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full">
            See More
          </button>
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full">
            Register
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>

};

export default EventCard;
