import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EventsC() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the list of events from the backend when the component mounts
    fetch('http://localhost:5000/events/addevent')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-between -mx-4 m-5 mt-8 ml-8 mr-10">
      {events.map((event) => (
        <div key={event.id} className="w-half md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src={event.imageUrl}
              alt="Event"
            />
            <div className="px-6 py-4">
              <div className="text-xl font-semibold text-teal-500 mb-2">
                {event.name}
              </div>
              <p className="text-gray-700 mt-2 font-semibold text-base">
                Location: {event.location}
              </p>
              <p className="text-gray-700 mt-2">
                {event.description}
              </p>
              <p className="text-gray-700 mt-2 font-semibold text-base">
                Date: {event.date}
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full">
                    See More
                  </button>
                </div>
                <Link to="/home/user/checkout">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventsC;
