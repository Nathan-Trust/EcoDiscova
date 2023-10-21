import { useContext } from "react";
import Typewriter from "typewriter-effect";

import RightSideBar from "../Components/global/RightSideBar";
import { AuthContext } from "../contexts/AuthContext"
import Layout from "../Components/global/Layout";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Layout>
      <div className="flex">
        <div className="flex-1 px-10 mt-10">
          <h1 className="text-3xl">
            Hi there{" "}
            <span className="text-[#4baf47]">
              {currentUser && currentUser.displayName}
            </span>
          </h1>
          <div>
            <h1 className="text-4xl">
              Join us to create awareness on the problems facing the ecosystem
            </h1>
            <h1 className="text-3xl">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Ignite Innovation",
                    "Encourage collaboration",
                    "Together lets revive our ecosystem ",
                    "Partner with us",
                    "Donate now",
                    "For a better ecosystem",
                  ],
                }}
              />
            </h1>
          </div>
          <div>
            <div className="shadow-xl card bg-base-100">
              <div className="grid grid-cols-2 gap-4 mt-9">
                <div className="card-body border border-[#4baf47] rounded-md">
                  <h2 className="card-title text-[#4baf47]">Discoveries</h2>
                  <p>Post a research , problems , discoveries that would help improve the ecosystem</p>
                  <p>We appreciate your post as this would help <span className="text-primary">Nature</span> thrive</p>
                  <div className="justify-end card-actions">
                    <button className="btn bg-[#4baf47] text-white">Post discoveries</button>
                  </div>
                </div> <div className="card-body border border-[#4baf47] rounded-md">
                  <h2 className="card-title text-[#4baf47]">Partnership</h2>
                  <p>We cannot do this alone! Collaboration split individuals efforts into a collective effort</p>
                  <p>Enabling a community that<span className="text-primary"> cherishes</span> growth</p>
                  <div className="justify-end card-actions">
                    <button className="btn bg-[#4baf47] text-white">Partner with us</button>
                  </div>
                </div> <div className="card-body border border-[#4baf47] rounded-md">
                  <h2 className="card-title text-[#4baf47]">Fundraising</h2>
                  <p>Would you love to improve the standard of living of people ? </p>
                  <p>Show your <span className="text-primary">Support</span> to help improve the standard of living</p>
                  <div className="justify-end card-actions">
                    <button className="btn bg-[#4baf47] text-white">Post discoveries</button>
                  </div>
                </div>
              </div>
            </div>
          </div>







        </div>
        <div className="flex-2 sticky w-72 hidden lg:block h-screen overflow-y-auto md:hover:oveflow-auto bg-main-bg right-0 border-l border-[#a6adba]">
          <RightSideBar />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
