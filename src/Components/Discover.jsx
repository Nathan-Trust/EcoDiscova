import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function Discover() {
  return (
    <div className="px-5  flex flex-col lg:flex-row my-[40px] py-[90px] justify-center items-center lg:items-start">
      <div className=" md:w-[600px]   lg:w-[70%]">
        <h4 className="text-[#4baf47] ">Embrace The Green, Sow The Future</h4>
        <h1 className="text-2xl text-[#a6adba] leading-[25px] lg:text-[50px] lg:leading-[64px]">
          We Are Here To Increase Your Modern Life With{" "}
          <span className="text-[#4baf47]">Planting</span>
        </h1>
        <Link
          to="/logIn"
          className="buttonA my-5 py-1 px-1 w-[220px] lg:w-[200px] lg:h-[50px] border-solid border-[#4baf47] border-2 text-[#4baf47] flex items"
        >
          <span className="flex items-center text-[20px] lg:text-[18px]">
            {" "}
            Discover with us <MdKeyboardDoubleArrowRight />
          </span>
        </Link>
      </div>

      <div className="md:w-[600px] lg:w-[700px] text-[#a6adba]">
        <p>
          We Are An Organization Engaged In "Tree Planting" Activities,
          Therefore You Can "Donate Trees. We Also Join In "Community Forestry |
          Reforestation" To Keep The Earth Together So That It Remains
          Sustainable
        </p>
        <div className="flex flex-col mt-[40px] gap-4">
          <div>
            <div className="flex justify-between">
              <p className="text[#a6adba]">Carbon Offsetting</p>
              <p className="text-[#4baf47]">80%</p>
            </div>
            <progress
              className="progress progress-success w-100"
              value="80"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-[#a6adba]">Water Conservation</p>
              <p className="text-[#4baf47]">90%</p>
            </div>
            <progress
              className="progress progress-success w-100"
              value="90"
              max="100"
            ></progress>
          </div>{" "}
          <div>
            <div className="flex justify-between">
              <p className="text-[#a6adba]">E-Waste Recycling</p>
              <p className="text-[#4baf47]">70%</p>
            </div>
            <progress
              className="progress progress-success w-100"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
}
