"use client";
import React, { useContext, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { usersContext } from "@/context/UserProvider";
import { postContext } from "@/context/PostProvider";
import toast, { Toaster } from "react-hot-toast";

const CreatePost = () => {
  const { currentLogin } = useContext(usersContext);
  const { filterPost, posts, createFilterPost, createPost } =
    useContext(postContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const id = data.get("id");
    const title = data.get("title");
    const category = data.get("category");
    const content = data.get("content");
    const author = data.get("author");
    const date = data.get("date");
    const img = data.get("image");
    const userImg = data.get("user_image");
    const userData = {
      id,
      title,
      category,
      content,
      author,
      date,
      img,
      userImg,
    };
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", () => {
      const url = reader.result;
      createPost({ ...userData, img: url });
      createFilterPost({ ...userData, img: url });
    });
    toast.success("Successfully Post created!");
    e.target.reset();
  };
  return (
    <Container>
      <div className="md:w-[50vw] border w-[85vw] bg-[#fafafa] mx-auto rounded-md p-5 my-2 flex flex-col gap-5">
        <form
          encType="multipart/form-data"
          onSubmit={onSubmit}
          className="flex flex-col gap-2"
        >
          <div className="flex justify-center border-b py-2">
            <h1 className="text-xl font-semibold">Create Post</h1>
          </div>
          <div className="flex items-center gap-3">
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
            <span>{currentLogin.name}</span>
          </div>
          <input type="hidden" name="id" value={Date.now()} />
          <input type="hidden" name="author" value={currentLogin.name} />
          <input type="hidden" name="date" value={Date().slice(0, 21)} />
          <input type="hidden" name="user_image" value={"/user.svg"} />
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Title</label>
            <input
              name="title"
              type="text"
              id="name"
              className="border border-zinc-400 rounded-md focus:outline-none px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col gap-1 border-b pb-2">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              className="flex gap-3 text-sm bg-white focus:outline-none"
            >
              <option value="Tech">Tech</option>
              <option value="Travel">Travel</option>
              <option value="Mobile">Mobile</option>
              <option value="Design">Design</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              rows={10}
              type="text"
              id="content"
              className="border border-zinc-400 rounded-md focus:outline-none px-2 py-1"
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="photo">Photo</label>
            <input
              name="image"
              type="file"
              accept="image/jpeg, image/png"
              id="photo"
              className="border border-zinc-400 rounded-md focus:outline-none px-2 py-1"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-secondColor rounded-md w-full py-1 text-white"
            >
              Post
            </button>
          </div>
        </form>
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
      </div>
    </Container>
  );
};

export default CreatePost;
