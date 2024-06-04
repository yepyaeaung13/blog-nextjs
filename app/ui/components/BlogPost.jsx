import React, { useContext, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { postContext } from "@/context/PostProvider";

const BlogPost = () => {
  const { filterPost, handlePost } = useContext(postContext);
  return (
    <div className="">
      <Container>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 my-5">
          {filterPost.map((post) => {
            return (
              <Link
                href="/post"
                key={post.id}
                onClick={() => {
                  handlePost(post);
                }}
              >
                <div className="flex flex-col gap-2 shadow-lg p-2 rounded-md">
                  {post.img !== null ? (
                    <Image
                      priority
                      width={200}
                      height={150}
                      src={post.img}
                      alt=""
                      className="w-full h-[200px] object-center object-cover rounded-md"
                    />
                  ) : (
                    ""
                  )}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-secondColor">{post.category}</h2>

                    <h1 className="text-xl text-zinc-700 font-bold h-14 overflow-hidden">
                      {post.title}
                    </h1>
                    <span className="text-sm">{post.date}</span>
                    <p className="text-md line-clamp-2 h-12 overflow-hidden">
                      {post.content}
                    </p>
                    <div className="flex gap-2 items-center text-sm font-medium">
                      <Image
                        width={50}
                        height={50}
                        src={post.userImg}
                        alt=""
                        className="w-8 h-8 rounded-3xl object-cover object-center border border-secondColor"
                      />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default BlogPost;
