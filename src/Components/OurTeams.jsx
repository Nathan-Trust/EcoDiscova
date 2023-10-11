import React from "react";
import { CiFacebook } from "react-icons/ci";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Header from "./Header";
import esvic from "../assets/esvic.jpeg"


export default function OurTeams() {
  return (
    <div className="mt-9">
      <Header title={"Our Team Members"} textSizeSM={"xl"} textSize={"4xl"} />
      <h2 className="text-center ">EcoDiscova Awesome Team</h2>
      <section>
        <div class=" grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="">
            <div class="card2">
              <div class="cover item-a ">
                <h1>
                  Esvic Victor
                  <br />
                  Senior Dev
                </h1>
                {/* <span class="price">$79</span> */}
                <div class="card-back">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <AiFillLinkedin />
                  </a>

                  <a href="#">
                    <AiFillInstagram />
                  </a>

                  <a href="#">
                    <AiFillTwitterCircle />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="card2">
              <div class="cover item-b">
                <h1>
                  Nathan Knorr
                  <br />
                  Novice
                </h1>
                {/* <span class="price">$35</span> */}
                <div class="card-back">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <AiFillLinkedin />
                  </a>

                  <a href="#">
                    <AiFillInstagram />
                  </a>

                  <a href="#">
                    <AiFillTwitterCircle />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="card2">
              <div class="cover item-c">
                <h1>
                  Marijuana
                  <br />
                  Chill
                </h1>
                <span class="price">$155</span>
                <div class="card-back">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
