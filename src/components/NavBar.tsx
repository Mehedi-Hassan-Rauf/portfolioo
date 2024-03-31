"use client";
import React from "react";
import { ImPacman } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const navList = [
    { name: "Home", src: "/" },
    { name: "About", src: "/about" },
    { name: "Projects", src: "/projects" },
    { name: "Contact", src: "/contact" },
  ];
  const pathName = usePathname();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      // once: true,
    });
  }, []);
  return (
    <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-10">
      <div
        className={`${
          navbar && "h-screen"
        } md:h-fit flex gap-0 w-full bg-black flex-col md:flex-row items-center md:justify-between px-4 lg:max-w-7xl md:px-8`}
      >
        <div className="flex items-center w-full justify-between py-3 md:py-6 md:block">
          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center relative w-fit">
              <ImPacman
                data-aos="fade-left"
                className="text-3xl text-white font-bold flex"
              />
              <span data-aos="fade-right" className="text-sm ml-[-8px]">
                10110
              </span>
            </div>
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 text-4xl cursor-pointer rounded-md outline-none"
              onClick={() => setNavbar((prev) => !prev)}
            >
              {navbar ? <IoCloseSharp /> : <IoMdMenu />}
            </button>
          </div>
        </div>

        <div
          className={`flex w-full md:w-fit h-full justify-center items-center md:block ${
            navbar ? " block" : "hidden"
          }`}
        >
          <ul className="flex flex-col w-full md:flex-row items-center justify-center gap-10">
            {navList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-full md:w-fit  text-xl md:text-base overflow-hidden"
                >
                  <Link
                    href={item.src}
                    onClick={() => setNavbar(!navbar)}
                    className={`inline-flex h-full w-full justify-center gap-2 items-center cursor-pointer md:px-4 py-4 md:py-2 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-md border border-slate-800 outline-none`}
                  >
                    {/* "inline-flex h-12 items-center justify-center rounded-md
                      border border-slate-800
                      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
                      bg-[length:200%_100%] px-6 outline-none" */}

                    {item.name}
                    <span
                      className={` absolute h-[40px] ${
                        pathName !== item.src && "hidden"
                      } animate-bounce text-sm text-white font-bold`}
                    >
                      <ImPacman className=" animate-spin-slow " />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
