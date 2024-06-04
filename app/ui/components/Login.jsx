"use client";
import React, { useContext, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { usersContext } from "@/context/UserProvider";

const Login = () => {
  const { currentLogin, userLogin, loginError } = useContext(usersContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    const userData = { email, password };
    userLogin(userData);
  };
  return (
    <Container>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 w-96 mb-14 text-md mx-auto border border-zinc-300 rounded-md p-5 mt-5"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-xl">Welcome back</h1>
          <span className="text-sm">Please enter your details to login</span>
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
          <span
            className={`hidden ${loginError ? "text-red-600 text-[12px]" : ""}`}
          >
            Email or Password is incorrect.
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="remember" />
            <label htmlFor="remember">Remember</label>
          </div>
          <div>
            <a href="" className="underline">
              Forget password?
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <button
            type="submit"
            className="bg-secondColor w-80 py-1 text-white rounded-md"
          >
            Login
          </button>
          <div className="text-sm flex gap-1">
            <span>Do not have an account yet?</span>
            <Link href="/register" className="underline">
              Register
            </Link>
          </div>
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

export default Login;
