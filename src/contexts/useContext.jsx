import React, { createContext, useContext, useState  , useEffect} from "react";
import awareness1 from "../assets/awarenessPics11.jpeg"
const StateContext = createContext();
import {
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export const ContextProvider = ({ children }) => {
  const [image, setImage] = useState(awareness1);
  const [displayName, setDisplayName] = useState("");
  const [storageRef, setStorageRef] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [userUpdated, setUserUpdated] = useState(true);
  const [activeMenu, setActiveMenu] = useState("true");
  
  const [screenSize, setScreenSize] = useState(undefined);


 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
       setCurrentUser(user);
       setUserUpdated(true);
       localStorage.setItem("isUserSignedIn", true);
       localStorage.setItem("chatSignedIn", true);
       console.log(currentUser);
       console.log(user);
     } else {
       setUserUpdated(false);
       localStorage.removeItem("isUserSignedIn");
       localStorage.removeItem("chatSignedIn");
     }
   });
   return () => {
     unsubscribe();
   };
 }, [currentUser]);

  return (
    <StateContext.Provider
      value={{
        image,
        setImage,
        displayName,
        setDisplayName,
        storageRef,
        setStorageRef,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export function useMyContext() {
  return useContext(StateContext);
};
