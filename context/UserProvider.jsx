"use client";
import React, { createContext, useEffect, useState } from "react";

export const usersContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "Demo User",
      email: "example@gmail.com",
      password: "12345678",
      gender: "male",
      birthDate: "2023-06-29",
      createdDate: "Tue Jun 04 2024",
    },
  ]);

  const createNewAccount = (userData) => {
    setUsers([...users, { ...userData, createdDate: Date().slice(0, 15) }]);
  };
  const [currentLogin, setCurrentLogin] = useState({
    name: "Demo User",
    email: "example@gmail.com",
    password: "12345678",
    gender: "male",
    birthDate: "2023-06-29",
    createdDate: "Tue Jun 04 2024",
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [loginError, setLoginError] = useState(false);

  const userLogin = (user) => {
    setUsers((currentUsers) => {
      return currentUsers.map((currentUser) => {
        if (
          currentUser.email === user.email &&
          currentUser.password === user.password
        ) {
          setCurrentLogin({ ...currentUser });
        } else {
          setLoginError(true);
        }
        return currentUser;
      });
    });
  };
  const userLogout = () => {
    setCurrentLogin(null);
  };
  const handleLogout = () => {
    toggleOpen();
    userLogout();
  };
  return (
    <usersContext.Provider
      value={{
        users,
        createNewAccount,
        isOpen,
        toggleOpen,
        userLogin,
        currentLogin,
        handleLogout,
        loginError,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default UserProvider;
