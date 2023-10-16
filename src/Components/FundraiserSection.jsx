import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.min.css"; // Import the complete Swiper bundle for styles

import { slides } from "../assets/data";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {BsArrowRight} from "react-icons/bs"
import { Link } from "react-router-dom";

export default function FundraiserSection() {
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
        swiperInstance.params.slidesPerView = 3;
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
    <div className="mt-10">
      <Header title={"Open Donation"} textSizeSM={"xl"} textSize={"4xl"} />
      <h2 className="text-center text-3xl">
        Fundraising Causes Need For The Future
      </h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={3} // Initial slidesPerView
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
              <div className="card swiperCard bg-base-100 shadow-xl border-2 border-gray-500 border-solid">
                <figure>
                  <img src={slide.image} alt={slide.goal} />
                </figure>
                <div className="flex flex-col py-5 px-2">
                  <div className="flex justify-between">
                    <p className="card-title">Goal:{slide.goal}</p>
                    <p>Raised:{slide.raised}</p>
                  </div>
                  <progress
                    className="progress progress-accent w-100 mt-2"
                    value="40"
                    max="100"
                  ></progress>
                  <div className="card-actions mt-6 hover:text-[#4baf47] text-3xl">
                    <h3>{slide.theme}</h3>
                  </div>
                  <Link to="/logIn" className="example_ff my-4 " rel="nofollow">
                    <span>
                      <ArrowForwardIosOutlined />
                    </span>
                  </ Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
