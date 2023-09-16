import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import Header from 'components/navbar/user_index';
import Events from 'layouts/Event';

const EventCard = () => {

  return <div>
    <div><Header/></div>
    <input
        type="text"
        placeholder="Search events..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500"
      />
      <button className="absolute top-100 right-0 bg-teal-500 text-white px-4 py-2 rounded-r-lg">
        Search
      </button>
    <Events />
    </div>

};

export default EventCard;
