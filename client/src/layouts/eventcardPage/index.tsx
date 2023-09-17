import React from "react";
import { useEffect, useState } from "react";
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
  return (
    <div>
      <div>
      <User_Header />
      </div>
      <input
        type="text"
        placeholder="Search events..."
        className="ml-14 mr-2 w-[90.1%] rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
      />
      <button className="top-101 absolute right-24 rounded-r-lg bg-teal-500 px-4 py-2 text-white">
        Search
      </button>
      <div className="flex flex-wrap justify-around ">
        {localEvents.length > 0 &&
          localEvents
            .map((event: any) => <EventsCard key={event._id} event={event} />)}
      </div>
    </div>
  );
};

export default EventCard;
