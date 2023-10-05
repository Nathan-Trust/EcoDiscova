import React from 'react'
import Header from './Header';
import awarenessPics from "../assets/awarenessPics11.jpeg"
import awarenessPics2 from "../assets/awarenessPics12.jpeg";
import ControlledAccordion from './Accordion';
import { useMyContext } from '../contexts/useContext';

export default function NewsSection() {
  const {image} = useMyContext()
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[90px] mx-4 gap-4">
      <ControlledAccordion/>

        <div className="h-[100%]">
          <img src={image} alt="awarenessPics" className='rounded-[30px]' />
        </div>
      </div>
    </>
  );
}
