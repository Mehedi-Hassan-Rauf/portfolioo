"use client";
import React from "react";
import { motion } from "framer-motion";
import useMousePosition from "./ui/svg-mask-effect";

const Mask2 = () => {
  const { x, y } = useMousePosition();
  const size = 10;
  return (
    <motion.div
      className="mask2"
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.08 }}
    ></motion.div>
  );
};

export default Mask2;
