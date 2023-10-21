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
    </Layout>
  );
};

export default Dashboard;
