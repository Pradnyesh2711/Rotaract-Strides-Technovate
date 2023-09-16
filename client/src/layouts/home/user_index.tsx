import React from 'react';
import Header from 'components/navbar/user_index';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EventsC from 'components/eventcard/eventcard';

function Home() {
  return <>
    <Header />
 <div className="mx-auto mt-1">
  <Carousel showArrows={true} showThumbs={false} className="w-full">
    <div className="w-full h-[60vh] m-0">
      <img
        src="https://images.unsplash.com/photo-1524646349956-1590eacfa324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="Image 1"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full h-85">
      <img
        src="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="Image 2"
        className="w-full h-[60vh] object-cover"
      />
    </div>
    {/* Add more images and descriptions */}
  </Carousel>
  </div>
  <EventsC/>
  </>


  


}

export default Home;
