import React, { createContext, useContext, useState } from "react";
import awareness1 from "../assets/awarenessPics11.jpeg"
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [image, setImage] = useState(awareness1);
  const [color, setColor] = useState("#636973");

  return (
    <StateContext.Provider value={{ image, setImage }}>
      {children}
    </StateContext.Provider>
  );
};

// Define a custom hook to use the context
export function useMyContext() {
  return useContext(StateContext);
};
