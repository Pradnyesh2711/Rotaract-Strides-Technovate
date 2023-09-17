import { useEffect, useState } from "react";
import Header from "components/navbar/user_index";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "components/footer/index";
import { BACKEND_URL } from "constants/definitions";
import axios from "axios";
import EventsCard from "components/eventcard/eventcard";
import { useAppDispatch, useAppSelector } from "app/store";
import { setEvents } from "app/features/EventsSlice";

function Home() {
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
        <h1 className="flex  mt-10 mb-8 ml-5 text-3xl font-bold size-13 text-teal-500 justify-center">Latest Events</h1>
      </div>
      <div className="flex flex-wrap justify-around ">
        {localEvents.length > 0 &&
          localEvents
            .slice(0, 3)
            .map((event: any) => <EventsCard key={event._id} event={event} />)}
      </div>
      <Footer />
    </>
  );
}

export default Home;
