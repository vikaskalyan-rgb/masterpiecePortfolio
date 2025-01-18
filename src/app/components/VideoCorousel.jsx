"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './VideoCarousel.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);
const VideoCarousel = () => {
  return (
    <section className="lg:py-16 px-4">
      

      <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
    hideOnClick: true,
  }}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="mt-6"
  speed={800}
  grabCursor={true}
  effect="fade"
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
>
        <SwiperSlide>
          <div className="bg-[#fff] rounded-lg overflow-hidden shadow-lg">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/2h.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#fff] rounded-lg overflow-hidden shadow-lg">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/kitchen_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#fff] rounded-lg overflow-hidden shadow-lg">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/kitchen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#fff] rounded-lg overflow-hidden shadow-lg">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/openclose.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default VideoCarousel;