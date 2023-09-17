import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from 'components/navbar/user_index';
import Footer from 'components/footer/index';
import { Link, Navigate } from "react-router-dom";

function EventDetail() {
  
  const storedEvent = JSON.parse(localStorage.getItem('selectedEvent'));

  if (!storedEvent) {
    return <div>Event not found.</div>;
  }

  const { title, date, description, city, club, coverImage } = storedEvent
  const defaultImage =
    "https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";

  const handleRegisterClick = () => {
    // Store the event details in local storage or a state management system
    // For example, you can use localStorage:
    localStorage.setItem("selectedEvent", JSON.stringify(storedEvent));

    // Navigate to the checkout page
  };

  return (
    <div>
      <Header />
      {/* Carousel */}
      <div className="mx-auto mt-1">
        <Carousel showArrows={true} showThumbs={false} className="w-full">
          <div className="m-0 h-[60vh] w-full">
            <img
              className="h-48 w-full object-cover"
              src={coverImage.length > 0 ? coverImage[0] : defaultImage}
              alt="Event"
            />
          </div>
          <div className="h-85 w-full">
            <img
              className="h-48 w-full object-cover"
              src={coverImage.length > 0 ? coverImage[0] : defaultImage}
              alt="Event"
            />
          </div>
          {/* Add more images and descriptions */}
        </Carousel>
      </div>

      <div className="flex">
        {/* Event details */}
        <div className="event-details p-8 bg-white shadow-lg rounded-lg flex-1">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-700 mb-2">Date: {date}</p>
          <p className="text-gray-700 mb-2">Description: {description}</p>
          <p className="text-gray-700">Location: {city}</p>
          {/* Add more event details here */}
        </div>

        {/* Register button */}
        <div className="flex items-end">
          <Link to="/home/user/checkout">
            <button className="rounded-full bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-600" onClick={handleRegisterClick}>
              Register
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EventDetail;
