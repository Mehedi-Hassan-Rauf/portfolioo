"use client";
import { projects } from "@/utils/data";
import { HoverEffect } from "../../components/ui/card-hover-effect";

//Stop

const page = () => {
  return (
    <div className="projects w-11/12 sm:w-9/12 pt-36 sm:pt-48 text-white flex flex-col gap-10">
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Projects.
      </h1>
      <div className="sticky">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default page;
