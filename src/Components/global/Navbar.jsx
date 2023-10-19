import React from 'react'
import avatar from "../../assets/innovative-green-technologies-smart-systems-and-recycling-for-environmental-sustainability-generative-ai-photo.jpg";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="flex py-2 px-5 items-center w-full justify-between  bg-[#1d232a] fixed top-0 left-0  z-50 backdrop-blur  border-b border-[#a6adba]">
        <div className="">
          <a className=" normal-case text-xl lg:text-5xl  text-[#4baf47]">
            EcoDiscova
          </a>
        </div>
        <div className="flex gap-4 nav text-sm lg:text-[20px]">
          <div className="hidden md:flex gap-4">
            <a>Discoveries</a>
            <a>Achievements</a>
            <a>Blog</a>
          </div>
          <div className="flex gap-4 ">
            <Link to="/logIn">Login</Link>
            <Link to="/signUp">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
