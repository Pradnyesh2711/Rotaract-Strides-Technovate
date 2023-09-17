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
  const [currentIndex, setCurrentIndex] = useState(0); // Track the active slide index
  const imageUrls = [
    "https://hips.hearstapps.com/hmg-prod/images/new-quotes11-1538081962.jpg",
    "https://i.pinimg.com/736x/6c/0c/fe/6c0cfe222c41b953d02e22bd616a1ef8.jpg",
    "https://images.unsplash.com/photo-1524646349956-1590eacfa324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    // Add the third image URL here
  ];

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

  useEffect(() => {
    // Automatically advance to the next image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imageUrls]);

  return (
    <>
      <Header />
      <div className="mx-auto mt-1">
        <Carousel
          showArrows={true}
          showThumbs={false}
          className="w-full"
          selectedItem={currentIndex}
          dynamicHeight={false}
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="m-0 h-[80vh] w-full">
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h1 className="flex  mt-10 mb-8 ml-5 text-3xl font-bold size-13 text-teal-500 justify-center">
          Latest Events
        </h1>
      </div>
      <div className="flex flex-wrap justify-around">
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
