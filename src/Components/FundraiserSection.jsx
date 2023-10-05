import React from 'react'
import Header from './Header'
import image from "../assets/awarenessPics11.jpeg"

export default function FundraiserSection() {
  return (
    <div className="mt-6">
      <Header title={"Open Donation"} />
      <h2 className="text-center text-3xl">
        Fundraising Causes Need For The Future
      </h2>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <progress
              className="progress progress-accent w-56"
              value="40"
              max="100"
            ></progress>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
