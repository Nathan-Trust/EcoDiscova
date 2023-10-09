import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignUp/>} />
        <Route path="/logIn" element={<Login/>}  />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </>
  );
}

export default App;
