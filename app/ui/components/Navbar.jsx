"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { usersContext } from "@/context/UserProvider";

const Navbar = () => {
  const { isOpen, toggleOpen, currentLogin, handleLogout } =
    useContext(usersContext);
  return (
    <div className="text-[#fff]">
      <div
        className={`items-center gap-2 text-sm ${
          currentLogin === null ? "flex" : "hidden"
        }`}
      >
        <Link
          href="/register"
          className="border uppercase px-3 py-1 rounded-md text-white border-secondColor"
        >
          register
        </Link>
        <Link
          href="/login"
          className="bg-secondColor border uppercase border-secondColor px-3 py-1 rounded-md text-white"
        >
          login
        </Link>
      </div>
      <div
        className={`items-center gap-5 ${
          currentLogin !== null ? "flex" : "hidden"
        }`}
      >
        <Link href="/create-posts" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6"
          >
            {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path
              d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
              fill="#fd8f44"
            />
          </svg>
        </Link>
        <div className="group relative flex flex-col gap-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 pointer-events-none"
            >
              {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path
                d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                fill="#fd8f44"
              />
            </svg>
          </button>
          <div
            className={`absolute z-50 group-hover:flex top-8 bg-containerColor w-60 right-0 bg-zinc-800 ps-2 pe-10 py-3 rounded-sm text-white flex-col gap-2 hidden`}
          >
            <div className="px-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-8"
              >
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path
                  d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  fill="#fd8f44"
                />
              </svg>
              <span>{currentLogin === null ? "" : currentLogin.name}</span>
            </div>

            <Link
              href="/profile"
              className="hover:bg-zinc-700 px-3 py-1 rounded-sm"
            >
              <button className="">Profile</button>
            </Link>
            <Link
              href="/my-posts"
              className="hover:bg-zinc-700 px-3 py-1 rounded-sm"
            >
              <button className="">My Posts</button>
            </Link>

            <Link
              href="/"
              onClick={handleLogout}
              className="hover:bg-zinc-700 px-3 py-1 rounded-sm"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
