"use client";
import React, { useContext, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { usersContext } from "@/context/UserProvider";

const Register = () => {
  const [isSame, setIsSame] = useState(true);
  const { users, createNewAccount } = useContext(usersContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");
    const gender = data.get("gender");
    const birthDate = data.get("birthDate");
    const userData = {
      name,
      email,
      password,
      gender,
      birthDate,
    };
    if (password === confirmPassword && password.length >= 8) {
      createNewAccount(userData);
      setIsSame(true);
    } else {
      setIsSame(false);
    }
  };
  return (
    <Container>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 w-96 text-md mx-auto border border-zinc-300 rounded-md p-5 mt-5"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-xl">Create a new account</h1>
          <span className="text-sm">Enter your details to register</span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            type="text"
            id="name"
            className="border border-zinc-400 rounded-md focus:outline-none px-2 py-1"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="email"
            id="email"
            className="border border-zinc-400 rounded-md focus:outline-none px-2 py-1"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="Password"
            id="password"
            className="border border-zinc-400 rounded-md focus:outline-none px-2 py-1"
            required
          />
          <span className="text-[10px]">
            Password must be at least 8 characters
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="Password"
            id="confirmPassword"
            className="border border-zinc-400 rounded-md focus:outline-none px-2 py-1"
            required
          />
          <span
            className={`${!isSame ? "text-[10px] text-[#ff0000]" : "hidden"}`}
          >
            Confirm Password must be same with password and at least 8
            characters
          </span>
        </div>
        <div className="flex flex-col gap-1 border-b-2 pb-2">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            className="flex gap-3 text-sm bg-white focus:outline-none"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 border-b-2 pb-2">
          <label htmlFor="birthDate">Birth Date</label>
          <input
            name="birthDate"
            type="date"
            id="birthDate"
            className="w-36 focus:outline-none text-sm"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <button
            type="submit"
            className="bg-secondColor w-80 py-1 text-white rounded-md"
          >
            Register
          </button>
          <span className="text-[10px]">
            By clicking Register, you agree to accept.
          </span>
          <a href="" className="underline text-[12px] underline-offset-4">
            Terms and Conditions
          </a>
        </div>
        <div className="flex text-secondColor font-medium mt-2">
          <Link href="/" className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="md:w-[1vw] sm:w-[2vw] w-[3vw]"
            >
              {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                fill="#fd8f44"
              />
            </svg>
            <span className="text-sm">back to Home</span>
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default Register;
