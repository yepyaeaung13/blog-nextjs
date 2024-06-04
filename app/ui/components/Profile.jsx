"use client";
import React, { useContext, useEffect } from "react";
import Container from "./Container";
import Link from "next/link";
import { usersContext } from "@/context/UserProvider";
import { postContext } from "@/context/PostProvider";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { currentLogin } = useContext(usersContext);
  const { posts } = useContext(postContext);
  return (
    <div>
      <div className="bg-containerColor h-[320px]"></div>
      <Container>
        <div className="-mt-64 z-10 md:w-[75%] w-[100%] flex flex-col items-center mx-auto bg-[#ffffff] shadow-lg rounded-lg p-5">
          <div className="flex flex-col gap-3 items-center h-full -mt-11">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-24 pointer-events-none"
              >
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path
                  d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  fill="#fd8f44"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl">
                {currentLogin === null ? "" : currentLogin.name}
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-2">
                <span>Email :</span>
                <span>{currentLogin === null ? "" : currentLogin.email}</span>
              </div>
              <div className="flex gap-2">
                <span>Birth Date :</span>
                <span>
                  {currentLogin === null ? "" : currentLogin.birthDate}
                </span>
              </div>
              <div className="flex gap-2">
                <span>Gender :</span>
                <span>{currentLogin === null ? "" : currentLogin.gender}</span>
              </div>
              <div className="flex gap-2">
                <span>Created Date :</span>
                <span>
                  {currentLogin === null ? "" : currentLogin.createdDate}
                </span>
              </div>
              <div className="flex gap-5 justify-around my-5">
                <div className="flex flex-col items-center text-lg font-semibold">
                  <span>65</span>
                  <span>Followers</span>
                </div>
                <div className="flex flex-col items-center text-lg font-semibold">
                  <span>
                    {currentLogin === null
                      ? ""
                      : posts.filter(
                          (post) => post.author === currentLogin.name
                        ).length}
                  </span>
                  <Link href="/my-posts">Posts</Link>
                </div>
              </div>
            </div>
            <div className="flex text-secondColor font-medium mt-auto">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
