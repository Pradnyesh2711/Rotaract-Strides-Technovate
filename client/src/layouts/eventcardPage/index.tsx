import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import Header from 'components/navbar/user_index';
import EventsC from 'components/eventcard/eventcard';

const EventCard = () => {

  return <div>
    <div><Header/></div>
    <input
        type="text"
        placeholder="Search events..."
        className="w-[90.1%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500 ml-14 mr-2"
      />
      <button className="absolute top-101 right-24 bg-teal-500 text-white px-4 py-2 rounded-r-lg">
        Search
      </button>
    <EventsC/>
    </div>

};

export default EventCard;
