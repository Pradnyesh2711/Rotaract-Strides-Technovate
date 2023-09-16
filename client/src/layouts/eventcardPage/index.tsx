import React from "react";
import { Carousel } from "react-responsive-carousel";
import Header from "components/navbar/user_index";
import EventsCard from "components/eventcard/eventcard";

const EventCard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <input
        type="text"
        placeholder="Search events..."
        className="ml-14 mr-2 w-[90.1%] rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
      />
      <button className="top-101 absolute right-24 rounded-r-lg bg-teal-500 px-4 py-2 text-white">
        Search
      </button>
      {/* <EventsCard/> */}
    </div>
  );
};

export default EventCard;
