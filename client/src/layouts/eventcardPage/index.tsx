import React, { useEffect, useState, ChangeEvent } from "react";
import { Carousel } from "react-responsive-carousel";
import EventsCard from "components/eventcard/eventcard";
import { useAppDispatch, useAppSelector } from "app/store";
import { setEvents } from "app/features/EventsSlice";
import { BACKEND_URL } from "constants/definitions";
import axios from "axios";
import User_Header from "components/navbar/Main_index";

const EventCard = () => {
  const dispatch = useAppDispatch();
  const [localEvents, setLocalEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const res = await axios.post(`${BACKEND_URL}/events/getByCity`, {
      city: "empty",
    });
    dispatch(setEvents(res.data));
    setLocalEvents(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredEvents = localEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update the type of 'e' parameter using ChangeEvent<HTMLInputElement>
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div>
        <User_Header />
      </div>
      <input
        type="text"
        placeholder="Search events..."
        className="ml-14 mr-2 w-[90.1%] rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className="top-101 absolute right-24 rounded-r-lg bg-teal-500 px-4 py-2 text-white">
        Search
      </button>
      <div className="flex flex-wrap justify-around">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event: any) => (
            <EventsCard key={event._id} event={event} />
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  );
};

export default EventCard;
