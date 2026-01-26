"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const VideoCarousel = () => {
  const swiperRef = useRef(null);

  const videos = [
    {
      id: 1,
      src: "/videos/kitchen.mp4",
      title: "Luxury Kitchen Setup",
      description: "Premium finishes showcase",
    },
    {
      id: 2,
      src: "/videos/openclose.mp4",
      title: "Smart Storage Solutions",
      description: "Innovative mechanism demonstration",
    },
    {
      id: 3,
      src: "/videos/2h.mp4",
      title: "3BHK Complete Interior",
      description: "Modern home transformation",
    },
    {
      id: 4,
      src: "/videos/kitchen_2.mp4",
      title: "Modular Kitchen Design",
      description: "Contemporary cooking space",
    },
  ];

  return (
    <section className="relative py-8 lg:py-12">
      {/* Section Header */}
      <div className="text-center mb-8 px-4">
        <div className="inline-flex items-center justify-center space-x-3 mb-3">
          <div className="w-8 h-px bg-amber-700"></div>
          <span className="text-amber-700 uppercase tracking-widest text-xs font-light">
            Our Gallery
          </span>
          <div className="w-8 h-px bg-amber-700"></div>
        </div>
        <h3 className="text-2xl lg:text-3xl font-light text-stone-900">
          See Our Work <span className="text-amber-800 font-normal">In Action</span>
        </h3>
      </div>

      {/* Swiper Carousel with Custom Navigation */}
      <div className="relative px-4 lg:px-16">
        {/* Custom Previous Button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-amber-800 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg 
            className="w-6 h-6 text-stone-800 group-hover:text-white transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Custom Next Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-amber-800 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg 
            className="w-6 h-6 text-stone-800 group-hover:text-white transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          speed={800}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="pb-12 video-swiper-custom"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Video Container */}
                <div className="relative aspect-video bg-stone-100">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Video Info */}
                <div className="p-5 bg-gradient-to-br from-white to-stone-50">
                  <h4 className="text-lg font-light text-stone-900 mb-1 group-hover:text-amber-800 transition-colors duration-300">
                    {video.title}
                  </h4>
                  <p className="text-sm text-stone-600 font-light">
                    {video.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-3 w-12 h-px bg-amber-700 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-700/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoCarousel;