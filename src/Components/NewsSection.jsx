import React, { useEffect, useRef } from "react";
import Header from "./Header";
// import news from "../assets/news.png"
import { useMyContext } from "../contexts/useContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import news from "../assets/news.png";
import { newsSections, slides } from "../assets/data";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { BsArrowRight } from "react-icons/bs";

export default function NewsSection() {
  const { image } = useMyContext();
  const swiperRef = useRef(null); // Create a ref

  useEffect(() => {
    // Initialize Swiper with dynamic slidesPerView based on screen size
    const swiperInstance = swiperRef.current.swiper;

    const handleResize = () => {
      if (window.innerWidth < 768) {
        swiperInstance.params.slidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        swiperInstance.params.slidesPerView = 1;
      } else {
        swiperInstance.params.slidesPerView = 1;
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
    <>
      <div className='mt-[90px] px-5 text-[#a6adba] '>
        <Header title={"Latest News"} />
        <h2 className='text-center'>Get News From EcoDiscova</h2>
        <div className='flex gap-4 mt-[40px]'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1} // Initial slidesPerView
            // onSlideChange={() => console.log("slide change")}
            ref={swiperRef} // Add the ref to the Swiper component
            className=''
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {newsSections.map((newsSection) => (
              <SwiperSlide>
                <div className='flex flex-col lg:flex-row border-solid border-2 border-[#4baf47] rounded-md  h-full lg:h-[300px] '>
                  <div className='flex flex-col justify-between m-2'>
                    <h2 className='text-[#4baf47]'>{newsSection.theme}</h2>
                    <p className='mt-2 text-3xl'>{newsSection.title}</p>
                    <p className='mt-2 '>{newsSection.content}</p>
                  </div>
                  <div className='w-[100%] lg:w-[1500px] '>
                    <img src={newsSection.img} alt='' className='h-[100%]' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='hidden lg:block border rounded border-green-300'>
            <img src={news} alt='' />
            <h2 className="text-xl mb-[3rem]">
              Game-changing' PPE recycling technology turns masks and gowns into
              school chairs
            </h2>
            <div className='flex mt-[10px] gap-[5rem]'>
              <h3>Innovation</h3>
              <p>
                Comments <span>(10)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
