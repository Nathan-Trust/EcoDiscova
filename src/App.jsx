import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/global/Navbar'
import Hero from './Components/Hero'
import Discover from './Components/Discover'
import CardSection from './Components/CardSection'
import slides from "./assets/mockdata.json";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Discover />
      <CardSection />
    </>
  );
}

export default App
