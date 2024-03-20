import Image from "next/image";
import React from "react";
import pic from "../../public/me.png";
import Link from "next/link";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const ShortAbout = () => {
  return (
    <div className="h-fit relative pt-24 sm:pt-32 w-11/12 sm:w-9/12 flex flex-col-reverse md:flex-row gap-10 overflow-hidden">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60  md:-top-20"
        fill="white"
      /> */}
      <div className="w-full flex flex-col gap-10 ">
        <div className="flex flex-col gap-10">
          <button className="text-5xl w-full md:w-[32rem] lg:w-[40rem] ml-[-20px] outline-none md:text-5xl lg:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Mehedi Hassan Rauf
          </button>
          <p className=" font-normal text-base leading-9 text-neutral-300 ">
            Your friendly neighborhood fullStack developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with{" "}
            <Link href={"/projects"}>
              <span className="bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-blue-800 to-white font-extrabold">
                PROJECTS
              </span>
            </Link>{" "}
            and lines of code, turning imaginations into immersive, interactive
            experiences.
            <br />
            <br /> When I&apos;m not crafting beautiful web experiences, you can
            find me watching Web series, movies, animes or swaying to the rhythm
            of Pop Music & Jazz, losing myself in the captivating flow of
            melodies. Anyways you can{" "}
            <Link href={"/contact"}>
              <span className="bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-blue-800 to-white font-extrabold">
                CONTACT
              </span>
            </Link>{" "}
            me
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <h2 className=" text-neutral-300">Check out my CV </h2>
          <button className="inline-flex px-5 py-2 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  outline-none">
            <Link href={""}>Resume</Link>
          </button>
        </div>
      </div>
      {/* <div className="me w-2/5 overflow-hidden md:w-3/12">
        <Image src={pic} alt="Owner" priority />
      </div> */}
    </div>
  );
};

export default ShortAbout;
