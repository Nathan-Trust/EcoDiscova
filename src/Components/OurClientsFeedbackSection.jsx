import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.min.css"; // Import the complete Swiper bundle for styles
import {BiSolidQuoteAltRight}  from "react-icons/bi"

import { slides } from "../assets/data";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {BsArrowRight} from "react-icons/bs"

export default function OurClientsFeedbackSection() {
  const swiperRef = useRef(null); // Create a ref

  useEffect(() => {
    // Initialize Swiper with dynamic slidesPerView based on screen size
    const swiperInstance = swiperRef.current.swiper;

    const handleResize = () => {
      if (window.innerWidth < 768) {
        swiperInstance.params.slidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        swiperInstance.params.slidesPerView = 2;
      } else {
        swiperInstance.params.slidesPerView = 2;
      }
      swiperInstance.update(); // Update Swiper to apply the new settings
    };

    handleResize(); // Call the function once to set the initial slidesPerView
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="mt-9">
      <Header
        title={"Our Client's Feedback"}
        text={"text-start"}
        textSizeSM={"xl"}
        textSize={"4xl"}
      />
      <h1 className="text-center ">Foresty Loves People</h1>
      <div className="mt-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={2} // Initial slidesPerView
          // onSlideChange={() => console.log("slide change")}
          ref={swiperRef} // Add the ref to the Swiper component
          className="mt-10 flex items-center justify-center w-[85%] md:[w-100%]"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div>
                <a
                  href="#"
                  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                  <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                  <div class="sm:flex sm:justify-between sm:gap-4">
                    <div className="flex justify-between w-[100%]">
                      <div className="flex items-center gap-4">
                        <div class=" flex sm:shrink-0">
                          <img
                            alt="Paul Clapton"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            class="h-[100px] w-[100px] rounded-full object-cover shadow-sm"
                          />
                        </div>
                        <div>
                          <h2>Jhon Abraham</h2>
                          <p>Marketing Manager</p>
                        </div>
                      </div>
                      <div className="text-[#4baf47] text-3xl">
                        <BiSolidQuoteAltRight />
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <p class=" text-sm text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      At velit illum provident a, ipsa maiores deleniti
                      consectetur nobis et eaque.
                    </p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
