"use client";

import React, { useState } from "react";
import { NAVIGATION_LINKS } from "@/constants";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const now = new Date();

  // Get current month as a short word
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[now.getMonth()];

  // Get the current day of the week
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = dayNames[now.getDay()]; // Returns 0-6, where 0 is Sunday

  // Get current date
  const date = now.getDate();

  // Get current time in 12-hour format with AM/PM
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format

  return (
    <nav className="fixed top-0 z-[9999] w-full flex justify-center items-center py-6 px-6 bg-[#101010]/80 backdrop-blur-md">
      <div className="w-full max-w-[1200px] flex items-center justify-between">
        <div className="max-lg:w-full flex flex-col items-center justify-center">
          {/* Desktop Menu */}
          <div className="flex items-center max-lg:justify-between gap-6 max-lg:w-full">
            <Link
              href="/"
              className="font-bold lg:text-3xl text-2xl uppercase text-[#7F8188] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700"
            >
              MAS
            </Link>
            <ul className="items-center gap-6 lg:flex hidden">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-[#7F8188] hover:text-white font-medium"
                    onClick={()=> setIsOpen(!open)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lg:hidden flex">
              <div className="">
                <div className="flex items-center gap-4">
                  <button
                    className="focus:outline-none lg-hidden text-[#7F8188]"
                    onClick={toggleMenu}
                  >
                    {isOpen ? (
                      <CgClose className="h-8 w-8" />
                    ) : (
                      <CgMenuRight className="h-8 w-8"/>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <ul className="items-center gap-6 lg:hidden justify-center flex flex-col w-full my-6">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-[#7F8188] hover:text-white font-medium"
                    onClick={()=> setIsOpen(!open)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Time */}
        <div className="text-[#7F8188] font-medium lg:flex items-center gap-4 hidden">
          <p>
            {dayOfWeek},&nbsp;{month} {date}&nbsp;
          </p>
          <p>
            {formattedHours}:{minutes} {ampm}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
