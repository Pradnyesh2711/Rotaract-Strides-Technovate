import React from "react";
import Header from "components/navbar/user_index";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventsC from "components/eventcard/eventcard";
import Footer from "components/footer/index";

function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-1">
        <Carousel showArrows={true} showThumbs={false} className="w-full">
          <div className="m-0 h-[60vh] w-full">
            <img
              src="https://images.unsplash.com/photo-1524646349956-1590eacfa324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-85 w-full">
            <img
              src="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 2"
              className="h-[60vh] w-full object-cover"
            />
          </div>
          {/* Add more images and descriptions */}
        </Carousel>
      </div>
      <div>
        <h1 className="mb-8 text-3xl font-semibold text-teal-500">Events</h1>
      </div>
      <div>
        <EventsC />
      </div>
      <Footer />
    </>
  );
}

export default Home;
