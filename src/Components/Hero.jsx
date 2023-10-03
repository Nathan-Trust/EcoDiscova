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
        >
          <div className="mx-[10px]">
            <div className="  backgroundSlide1" />
          </div>
          <div className="mx-[10px]">
            <div className="  backgroundSlide2" />
          </div>
          <div className="mx-[10px]">
            <div className=" backgroundSlide3" />
          </div>
          <div className="mx-[10px]">
            <div className=" backgroundSlide4" />
          </div>
        </Carousel>
      );
    }

    