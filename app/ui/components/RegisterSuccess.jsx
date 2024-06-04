import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { userContext } from "../../../context/UserProvider";

const RegisterSuccess = () => {
  return (
    <Container>
      <div className="mt-10 mb-44 py-10 flex flex-col gap-5 border border-zinc-300 w-96 rounded-md mx-auto p-5">
        <div className="flex flex-col items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-16"
            >
              {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                fill="green"
              />
            </svg>
          </div>
          <h1 className="text-2xl text-green-600">Registration Successful!</h1>
          <span className="text-sm">Your account have been created.</span>
        </div>
        <div className="flex justify-between border-t border-zinc-300">
          <div className="flex text-secondColor font-medium mt-2">
            <Link to={"/"} className="flex gap-2">
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
          <div className="flex text-secondColor font-medium mt-2">
            <Link to={"/login"} className="flex gap-2">
              <span className="text-sm">Go to Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="md:w-[1vw] sm:w-[2vw] w-[3vw]"
              >
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  fill="#fd8f44"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterSuccess;
