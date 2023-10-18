import React from 'react'
import { Link } from 'react-router-dom';
import error from "../assets/errorPage.png"

export default function Page404() {
  return (
    <div className="bg-[#1d232a] h-[100vh] text-[#a6adba] w-full">
      <div className="flex flex-col items-center py-6 justify-center" >
        <h1 className="text-xl">Oops!</h1>
        <img src={error} alt="" className="w-[500px]" />
        <h1 className=' text-2xl lg:text-4xl my-3'>PAGE NOT FOUND</h1>
        <p className='md:w-[500px] text-center'>
          Sorry, the page you're looking for doesn't exist. If you think
          somethin is broken, report a problem.
        
              </p>
              <Link to="/" className='mt-10'>
                  <button className='btn bg-[#4baf47] text-white'>Go to Home</button>
              </Link>
      </div>
    </div>
  );
}
