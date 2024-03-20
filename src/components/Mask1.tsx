"use client";
import React from "react";
import { motion } from "framer-motion";
import useMousePosition from "./ui/svg-mask-effect";

const Mask1 = () => {
  const { x, y } = useMousePosition();
  const size = 100;
  return (
    <motion.div
      className="mask"
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    ></motion.div>
  );
};

export default Mask1;
