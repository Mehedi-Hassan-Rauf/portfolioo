"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementsByClassName("cursor-dot");
    const cursor1 = document.getElementsByClassName("cursor-outline");

    const onMouseMove = (e: MouseEvent) => {
      const { x, y } = e;
      gsap.to(cursor, { x: x - 3, y: y - 3, duration: 0.01 });
      gsap.to(cursor1, { x: x - 39, y: y - 39, duration: 1 });
    };
    document.addEventListener("mousemove", onMouseMove);
  });
  return (
    <>
      <div className="cursor-dot hidden lg:flex">
        <span className="cursor-text"></span>
      </div>
      <div className="cursor-outline hidden lg:flex"></div>
    </>
  );
};

export default Cursor;
