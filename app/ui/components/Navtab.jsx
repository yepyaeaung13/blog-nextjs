import React, { useContext, useState } from "react";
import Container from "./Container";
import { NavtabContext } from "../../../context/NavtabProvider";
import { postContext } from "../../../context/PostProvider";

const Navtab = () => {
  const { tabs, handleActive } = useContext(NavtabContext);
  const { handleFilter } = useContext(postContext);
  return (
    <section>
      <Container>
        <ul className="flex gap-5 justify-center my-5">
          {tabs.map((tab, idx) => (
            <li
              key={idx}
              onClick={() => {
                handleFilter(tab.title);
                handleActive(idx);
              }}
              className={`cursor-pointer px-2 ${
                tab.active ? "bg-secondColor text-white" : ""
              }`}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Navtab;
