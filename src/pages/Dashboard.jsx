import React, { useState, useEffect , useContext } from "react";
import SideBar from "../Components/global/SIdebar";
import { useMyContext } from "../contexts/useContext";
import {AuthContext} from "../contexts/AuthContext"
import NavbarDash from "../Components/global/NavbarDash";
import RightSideBar from "../Components/global/RightSideBar";
import Typewriter from "typewriter-effect";

const Dashboard = () => {
  const {activeMenu} = useMyContext()
 const {currentUser} = useContext(AuthContext)

  return (
    <>
      <div className="flex relative  bg-main-bg ">
        <div className="" style={{ height: "100vh" }}>
          {activeMenu ? (
            <div
              className="w-72 fixed sidebar bg-main-bg "
              style={{ zIndex: "1000" }}
            >
              <SideBar />
            </div>
          ) : (
            <div className=" w-0 hidden  mt-7 h-680  rounded-lg">
              <SideBar />
            </div>
          )}
        </div>

        <div
          className={
            activeMenu
              ? " min-h-screen md:ml-72 w-full bg-main-bg"
              : " w-full min-h-screen flex-2 bg-main-bg "
          }
          style={{ height: "100vh", overflowY: "auto" }}
        >
          <div className="">
            <div className="">
              <NavbarDash />
            </div>
            <div className="flex">
              <div className="flex-1 px-10 mt-10">
                <h1 className="text-3xl">
                  Hi there{" "}
                  <span className="text-[#4baf47]">
                    {currentUser && currentUser.displayName}
                  </span>
                </h1>
                <div>
                  <h1>
                    Join us to bid farewell to a bad customized eco system and
                    welcome a world with tech here to put and end to climatic
                    disorders
                  </h1>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "Discourage Deforestation",
                        "Encourage collaboration",
                        "Together lets build our ecosystem ",
                        "Partner with us",
                        "Donate now",
                        "For a better ecosystem",
                      ],
                    }}
                  />
                </div>
              </div>
              <div className="flex-2 sticky w-72 hidden lg:block h-screen overflow-y-auto md:hover:oveflow-auto bg-main-bg right-0 border-l border-[#a6adba]">
                <RightSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
