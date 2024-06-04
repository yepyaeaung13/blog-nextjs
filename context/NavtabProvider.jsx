"use client";
import React, { createContext, useState } from "react";

export const NavtabContext = createContext();

const NavtabProvider = ({ children }) => {
  const [tabs, setTabs] = useState([
    { title: "All", active: true },
    { title: "Design", active: false },
    { title: "Tech", active: false },
    { title: "Mobile", active: false },
    { title: "Travel", active: false },
  ]);

  const handleActive = (index) => {
    setTabs((currentTabs) => {
      return currentTabs.map((tab, idx) => {
        if (idx == index) {
          tab.active = true;
        } else {
          tab.active = false;
        }
        return tab;
      });
    });
  };
  return (
    <NavtabContext.Provider value={{ tabs, handleActive }}>
      {children}
    </NavtabContext.Provider>
  );
};

export default NavtabProvider;
