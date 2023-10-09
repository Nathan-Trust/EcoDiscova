import React , {useEffect, useRef} from 'react'
import Header from './Header';
// import news from "../assets/news.png"
import { useMyContext } from '../contexts/useContext';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import news from "../assets/news.png"
import { newsSections, slides } from "../assets/data";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { BsArrowRight } from "react-icons/bs";
  
  
export default function NewsSection() {
  const { image } = useMyContext()
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
      <div className="mt-[90px] px-5">
        <Header title={"Latest News"} />
        <h2 className="text-center">Get News From Foresty</h2>
        <div className="flex gap-4 mt-[40px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={1} // Initial slidesPerView
            // onSlideChange={() => console.log("slide change")}
            ref={swiperRef} // Add the ref to the Swiper component
            className=""
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {newsSections.map((newsSection) => (
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row border-solid border-2 border-[#4baf47] rounded-md  h-full lg:h-[300px] ">
                  <div className="flex flex-col justify-between m-2">
                    <h2 className="text-[#4baf47]">Environment</h2>
                    <p className="mt-2 text-3xl">
                      A Team of scientist from NASA'S Jet Propulsion
                    </p>
                    <p className="mt-2 ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit debitis saepe vero nam amet hic cum optio
                      necessitatibus, iure laudantium assumenda fuga dolorem
                      incidunt accusantium recusandae! Distinctio, quaerat
                      reiciendis. Quia.
                    </p>
                  </div>
                  <div className="w-[100%] lg:w-[1500px] ">
                    <img src={news} alt="" className="h-[100%]" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden lg:block">
            <img src={news} alt="" />
            <h2>A Team of scientist from NASA'S Jet Propulsion</h2>
            <div className="flex">
              <h3>Forestry</h3>
              <p>
                Comment <span>(0)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
