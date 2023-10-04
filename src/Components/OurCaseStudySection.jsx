import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function OurCaseStudySection() {
  return (
    <div className="flex gap-2">
      <Carousel
        autoPlay={true}
        interval={5000} // 5 seconds
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        className="mt-6"
      >
        <div className="mx-[20px] md:mx-[80px] ">
          <div className="  backgroundSlide1" />
        </div>
        <div className="mx-[20px] md:mx-[80px]">
          <div className="  backgroundSlide2" />
        </div>
        <div className="mx-[20px] md:mx-[80px]">
          <div className=" backgroundSlide3"></div>
        </div>
        <div className="mx-[20px] md:mx-[80px]">
          <div className=" backgroundSlide4" />
        </div>
        <div className="mx-[20px] md:mx-[80px]">
          <div className=" backgroundSlide5" />
        </div>
      </Carousel>
      <Carousel
        autoPlay={true}
        interval={5000} // 5 seconds
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        className="mt-6"
      >
        <div className="mx-[20px] md:mx-[80px] ">
          <div className="  backgroundSlide1" />
        </div>
        <div className="mx-[20px] md:mx-[80px]">
          <div className="  backgroundSlide2" />
        </div>
        <div className="mx-[20px] md:mx-[80px]">
          <div className=" backgroundSlide3"></div>
        </div>
        <div className="mx-[20px] md:mx-[80px]">
          <div className=" backgroundSlide4" />
        </div>
        <div className="mx-[20px] md:mx-[80px]">
          <div className=" backgroundSlide5" />
        </div>
      </Carousel>
    </div>
  );
}
