import React from 'react'
import { cards } from '../assets/data'
import OurCaseStudySection from './OurCaseStudySection';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function CardSection() {
  return (
    <>
      <Header title={"Our Services"} textSizeSM={"3xl"} textSize={"3xl"} />
      <OurCaseStudySection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-2 px-5">
        {cards.map((card) => (
          <div className="card  bg-[#1d232a] text-[#a6adba] shadow-xl border-2 border-gray-500 border-solid py-3">
            <div className="flex justify-between mx-5 items-center">
              <div> {card.icon}</div>
              <p className="iconSpan">{card.id}</p>
            </div>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.content}</p>
              <div className="card-actions justify-end">
                <div class="button_cont" align="center">
                  <a
                    class="example_f"
                    href="add-website-here"
                    target="_blank"
                    rel="nofollow"
                  >
                    <Link to="/logIn">Know More </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
