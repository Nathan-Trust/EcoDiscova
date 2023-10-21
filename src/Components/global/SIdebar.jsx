import { links } from "../../assets/data";
import { Link, NavLink } from "react-router-dom";
import { MdLogout, MdMenu, MdOutlineCancel } from "react-icons/md";
import { auth } from "../../utils/firebase";
import { useMyContext } from "../../contexts/useContext";
// import { createBrowserHistory } from 'history';
import {  useNavigate } from 'react-router-dom';



const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useMyContext();



  // const history = createBrowserHistory(); // Create a custom history object
  const navigate = useNavigate(); // Use useNavigate to navigate


  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md hover:text-[#4baf47] hover:bg-gray-800 m-2";


  const handleLogout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("isUserSignedIn");
      localStorage.removeItem("chatSignedIn");
      navigate("/");
    });
  };

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div
      className={
        activeMenu
          ? "ml-3 h-screen overflow-y-auto md:hover:oveflow-auto pb-10 border-r border-[#a6adba]"
          : " h-680 border-r border-[#a6adba] "
      }
    >
      {activeMenu ? (
        <>
          <div className="flex flex-col justify-between ">
            <div>
              <div className="flex items-center justify-between ">
                <Link
                  to="/"
                  className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-[#4baf47]"
                >
                  EcoDiscova
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
                  className="block p-3 text-2xl hover:drop-shadow-xl hover:bg-light-gray md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </div>

              <div className="mt-10">
                {links.map((link, idx) => (
                  <div key={idx}>
                    <NavLink
                      to={`${link.link}`}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      onClick={handleCloseSideBar}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </NavLink>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  dark:text-white  text-md m-2 mt-24">
                <MdLogout />
                <Link onClick={handleLogout}>Log out</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            type="button"
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="p-3 text-2xl hover:drop-shadow hover:bg-light-gray"
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <MdMenu />
          </button>

          <div className="mt-10">
            {links.map((link, idx) => (
              <div key={idx}>
                <NavLink
                  to={`${link.link}`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-5 p-2 pt-3 pb-2.5  text-white  text-2xl"
                      : "flex items-center gap-5 px-2 mt-3 pt-3 pb-2.5 text-2xl dark:text-white max text-gray-500"
                  }
                >
                  {link.icon}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5 pt-3 pb-2.5 rounded-lg  dark:text-white text-gray-500 text-2xl  mt-12 max">
            <MdLogout onClick={handleLogout} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
