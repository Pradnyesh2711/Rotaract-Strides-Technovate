import React from 'react';
import Header from 'components/navbar/user_index';
import { Carousel } from 'react-responsive-carousel';
import Footer from 'components/footer/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  return (
    <><Header />
    <div className="max-w-screen-lg mx-auto mt-4">
          <Carousel showArrows={true} showThumbs={false} className="max-w-full">
              <div className="w-full h-120">
                  <img src="image1.jpg" alt="Image 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-120">
                  <img src="image2.jpg" alt="Image 2" className="w-full h-full object-cover" />
              </div>
              {/* Add more images and descriptions */}
          </Carousel>
        
      </div>
      <Footer/>
      </>
  );
}

export default Home;
