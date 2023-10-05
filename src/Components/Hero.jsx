    import React from "react";
    import { Carousel } from "react-responsive-carousel";
    import "react-responsive-carousel/lib/styles/carousel.min.css";

    export default function Hero() {
      return (
        <Carousel
          autoPlay={true}
          interval={5000} // 5 seconds
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          className="mt-[100px]"
        >
          <div className="mx-[20px] md:mx-[80px] ">
            <div className="  backgroundSlide1  " />
          </div>
          <div className="mx-[20px] md:mx-[80px]">
            <div className="  backgroundSlide2 bg-center" />
          </div>
          <div className="mx-[20px] md:mx-[80px]">
            <div className=" backgroundSlide3 bg-center"></div>
          </div>
          <div className="mx-[20px] md:mx-[80px]">
            <div className=" backgroundSlide4 bg-center" />
          </div>
          <div className="mx-[20px] md:mx-[80px]">
            <div className=" backgroundSlide5 bg-center" />
          </div>
        </Carousel>
      );
    }

    