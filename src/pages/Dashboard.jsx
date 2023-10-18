import React, { useState, useEffect } from "react";
// import {
//   dashCard,
//   recentTransactions,
//   medicalproBranding,
//   weeklyStats,
// } from "../data/dummy";
// import Header from "../components/Header";
// import { useStateContext } from "../contexts/ContextProvider";
import SideBar from "../Components/global/SIdebar";
// import ThemeSettings from "../components/ThemeSettings";
// import Navbar from "../components/Navbar";
// import Button from "../components/Button";
import { MdSettings } from "react-icons/md";
// import BarChart from "../components/BarChart";
// import PieChart from "../components/PieChart";
// import { UserData } from "../data/UserTableData";
// import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { useMyContext } from "../contexts/useContext";
import NavbarDash from "../Components/global/NavbarDash";
import RightSideBar from "../Components/global/RightSideBar";
// import img from "./28850184_office_05n.jpg";
// import product9 from "../data/product9.jpg";
// import { animateScroll as scroll } from "react-scroll";
// import { useInView } from "react-intersection-observer";

// import { ScrollContainer, ScrollPage, Animator, ZoomIn , batch , FadeIn , Fade ,Zoom, MoveOut} from "react-scroll-motion";
// import Dropdown from "../components/Dropdown";
// import { BsCurrencyDollar } from "react-icons/bs";
// import LineChart from "../components/Charts/LIneChart";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import the CSS for AOS

const Dashboard = () => {
  const {activeMenu} = useMyContext()
  // const { activeMenu, themeSettings, setThemeSettings, currentColor } =
  //   useStateContext();

  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: currentColor,
  //       borderRadius: 3,
  //       barThickness: 20,
  //       barPercentage: 0.8, // Adjust the width of the bars (default is 0.9)
  //       categoryPercentage: 0.7, // Adjust the spacing between bars (default is 0.8)
  //     },
  //   ],
  // });

  // useEffect(() => {
  //   // Initialize AOS
  //   AOS.init();
  //   // {
  //   //       duration: 800, // Duration of the animation in milliseconds
  //   //     }
  //   // console.log(AOS.init());
  // }, []);

  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Only trigger animation once
  //   threshold: 0.2, // The percentage of the element that needs to be in view to trigger the animation
  // });

  return (
    <>
      <div className="flex relative  bg-main-bg ">
        {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            style={{ borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl text-white"
          >
            <MdSettings />
          </button>
        </div> */}

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
                kjlhawjlkglrhulgl kjhgah Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Praesentium, doloremque nemo! Fuga porro
                perferendis eum suscipit consequuntur eaque itaque quibusdam
                similique in laborum. Asperiores voluptates illum quaerat iure!
                Molestiae, provident.
              </div>
              <div className="flex-2 sticky w-72 h-screen overflow-y-auto md:hover:oveflow-auto bg-main-bg right-0 border-l border-[#a6adba]">
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
