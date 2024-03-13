"use client";
import React, { createContext, useState } from "react";

export const NavContext = createContext();

const NavContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
      <NavContext.Provider value={{ isOpen, setIsOpen }}>
          {children}
      </NavContext.Provider>
  );
};

export default NavContextProvider;
