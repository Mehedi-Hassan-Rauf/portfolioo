"use client";
import Link from "next/link";
import React from "react";
import { SiFacebook, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  return (
    <div className="footer relative w-11/12 sm:w-9/12 pb-16 flex flex-col gap-10">
      <Link
        href={`${
          (pathName == "/" && "/about") ||
          (pathName == "/about" && "/projects") ||
          (pathName == "/projects" &&
            "https://drive.google.com/file/d/1Jhjagx6vJZCw9peSlj0KHWWIhhVOl91C/view?usp=sharing") ||
          (pathName == "/contact" && "/")
        }`}
        target={`${pathName == "/projects" ? "_blank" : "_self"}`}
        className="flex flex-row gap-5 items-center"
      >
        <h1>
          {(pathName == "/" && "See More About Me") ||
            (pathName == "/about" && "Lets Continue To Projects") ||
            (pathName == "/projects" && "Lets Go To My Resume.") ||
            (pathName == "/contact" && "Go Back Home")}
        </h1>
        <div className=" -rotate-90">
          <LiaLongArrowAltDownSolid className="text-4xl animate-bounce" />
        </div>
      </Link>
      <div className="flex gap-5">
        <Link href={"https://www.facebook.com/"} target="_blank">
          <SiFacebook />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/mehedi-hassan-rauf-9b9aa426a"}
          target="_blank"
        >
          <SiLinkedin />
        </Link>
        <Link href={"https://github.com/Mehedi-Hassan-Rauf"} target="_blank">
          <SiGithub />
        </Link>
        <Link href={"https://www.instagram.com/"} target="_blank">
          <SiInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
