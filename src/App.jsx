import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.scss"
import LandingPage from "./pages/LandingPage";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Avatar from "./pages/Avatar";
import Dashboard from "./pages/Dashboard";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
        <Route
          path="/signUp/avatar"
          element={
            <ProtectedRoute>
              <Avatar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
