"use client";

import React, { useState } from "react";
import { NAVIGATION_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };
  return (
    <nav className="fixed top-0 z-[9999] w-full flex items-center justify-center min-h-[80px]">
      <div className="w-full max-w-[1200px] flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="font-bold text-2xl uppercase text-[#7F8188] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700"
          >
            M
          </Link>
          <ul className="flex items-center gap-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-[#7F8188] hover:text-white font-medium"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Link
              href="/about"
              className="text-[#7F8188] hover:text-white font-medium"
            >
              About
            </Link>
            <Link
              href="/resume"
              className="text-[#7F8188] hover:text-white font-medium"
            >
              Resume
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
