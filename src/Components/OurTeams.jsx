import React from "react";
import { CiFacebook } from "react-icons/ci";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import exhibit1 from "../assets/exhibit1.png";
import Header from "./Header";
import { teams } from "../assets/data";

export default function OurTeams() {
  return (
    <div className="mt-9">
      <Header title={"Our Team Members"} textSizeSM={"xl"} textSize={"4xl"} />
      <h2 className="text-center ">Foresty Awesome Team</h2>
      <div className="backgroundOverlay grid grid-cols-1  lg:grid-cols-3 gap-10 mx-10 mt-10">

        {teams.map((team) => (

        <div class="team__item mb-4 flex flex-col items-center shadow-xl border-2 border-gray-500 border-solid ">
          <div class="team__item-image ">
            <img src={team.image} alt="" />
            <div class="team__item-image-icon social-icon">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
              <a href="#">
                <AiFillLinkedin />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <h4 className="mt-3">
            <a href="https://gramentheme.com/wp/foresty/all-team/francis-a-cote/">
           {team.name}
            </a>
          </h4>
          <span>{team.cadre}</span>
        </div>
        ))}
   
      
      </div>
    </div>
  );
}
