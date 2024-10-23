"use client";
import { CONNECT_LINKS, FOOTER_PAGES, SELECTED_WORK } from "@/constants";
import Link from "next/link";
import React from "react";
import { handleLinkClick } from "./Hero";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="w-full px-2">
      <div className="w-full max-w-[1300px] min-h-[380px] flex flex-col gap-8 items-center justify-between bg-[#1E1D1C] border border-zinc-800 mx-auto rounded-t-[2rem] py-16 sm:px-6 px-4">
        <h2 className="text-white text-center lg:text-3xl md:text-2xl sm:text-xl">
          👋 Thanks for stopping by! Here is more of me if you are interested :
          {")"}
        </h2>
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-3 lg:gap-56 md:gap-24 sm:gap-8 gap-3">
            {/* pages */}
            <div className="flex flex-col gap-2 justify-center">
              <p className="text-[#6a6c72] uppercase sm:text-sm text-xs">
                Pages
              </p>
              <Link
                href={pathname === "/" ? "#home" : "/"}
                onClick={(e) =>
                  pathname === "/" ? handleLinkClick(e, "#home") : "/"
                }
                className="text-[#7F8188] text-[18px] capitalize font-bold hover:text-white max-sm:text-sm"
              >
                Home
              </Link>
              {FOOTER_PAGES.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="text-[#7F8188] text-[18px] capitalize font-bold hover:text-white max-sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* selected work */}
            <div className="flex flex-col gap-2 max-sm:text-sm">
              <p className="uppercase text-[#6a6c72] sm:text-sm text-xs">
                Selected Work
              </p>
              {SELECTED_WORK.map((link, index) => (
                <Link
                  href={pathname === "/" ? link.href : '/'}
                  onClick={(e) =>
                    pathname === "/" ? handleLinkClick(e, link.href) : "/"
                  }
                  key={index}
                  className="text-[#7F8188] text-[18px] capitalize font-bold hover:text-white max-sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* connect links */}
            <div className="flex flex-col gap-2">
              <p className="uppercase text-[#6a6c72] sm:text-sm text-xs">
                Let&apos;s Connect
              </p>
              {CONNECT_LINKS.map((link, index) => (
                <a
                  href={link.href}
                  target="_blank"
                  key={index}
                  className="text-[#7F8188] text-[18px] capitalize font-bold hover:text-white max-sm:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
