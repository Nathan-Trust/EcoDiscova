import SideBar from "./SIdebar";
import NavbarDash from "./NavbarDash";
import { useMyContext } from "../../contexts/useContext";


// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    const { activeMenu } = useMyContext()
    return (
        <div className="relative flex bg-main-bg ">
            <div className="" style={{ height: "100vh" }}>
                {activeMenu ? (
                    <div
                        className="fixed w-72 sidebar bg-main-bg "
                        style={{ zIndex: "1000" }}
                    >
                        <SideBar />
                    </div>
                ) : (
                    <div className="hidden w-0 rounded-lg mt-7 h-680">
                        <SideBar />
                    </div>
                )}
            </div>

            <div
                className={
                    activeMenu
                        ? " min-h-screen md:ml-72 w-full bg-main-bg"
                        : " w-full min-h-screen flex-2 bg-main-bg "
                }
                style={{ height: "100vh", overflowY: "auto" }}
            >
                <div className="">
                    <div className="">
                        <NavbarDash />
                    </div>
                 <div className="px-4 max-w-[1200px] mx-auto">
                 {children}
                 </div>
                </div>
            </div>
        </div>

    )
}

export default Layout