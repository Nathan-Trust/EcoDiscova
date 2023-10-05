import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/global/Navbar";
import Hero from "./Components/Hero";
import Discover from "./Components/Discover";
import CardSection from "./Components/CardSection";
import OurCaseStudySection from "./Components/OurCaseStudySection";
import NewsSection from "./Components/NewsSection";
import FundraiserSection from "./Components/FundraiserSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Discover />
      <CardSection />
      <NewsSection />
      {/* <FundraiserSection/> */}
    </>
  );
}

export default App;
