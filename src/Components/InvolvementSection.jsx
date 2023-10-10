import React from 'react'
import backgroundImage from "../assets/noah-buscher-x8ZStukS2PM-unsplash.jpg";
import Header from './Header';
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
import { Link } from 'react-router-dom';

export default function InvolvementSection() {
  return (
    <div className='px-5'>
      <div className="involvementSection mt-10  flex flex-col items-center justify-center">
        <Header title={"Get Involved Now"} textSizeSM={"xl"} textSize={"4xl"} />
        <h1 className="text-3xl md:text-[50px] md:w-[50%] leading-[50px] text-center">
          We Have The Power Today To Change Tomorrow
        </h1>
        <Link
          to="/logIn"
          className="buttonA my-5 py-1 px-1  w-[150px] h-[30px] lg:w-[200px] lg:h-[50px] border-solid border-[#4baf47] border-2 text-[#4baf47] flex justify-center"
        >
          <span className="flex items-center text-[15px] lg:text-[18px]">
            {" "}
            Partner With Us <MdKeyboardDoubleArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
