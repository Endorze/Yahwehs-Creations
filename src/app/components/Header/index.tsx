"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About Us",
      href: "/about-us"
    },
    {
      label: "Blog",
      href: "/blog"
    }
  ];
  const borderLeft = "border-l-2 border-white";
  return (
    <div className="flex justify-between items-center bg-black text-white py-4  px-4 md:px-40 relative">
      <div>
        <Image
          src="/images/matrix-removebg-preview.png"
          alt="Logo"
          width={100}
          height={100}
          className="min-w-[100px] h-auto"
        />
      </div>
      <nav className={`hidden md:flex gap-8 ${borderLeft} pl-8`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`py-1  ${
              pathname === item.href
                ? "underline underline-offset-8 decoration-[#EABB00] decoration-2"
                : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className={`md:hidden ${borderLeft} pl-8`}>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg viewBox="0 0 512 512" className="w-9 h-9">
            <path
              fill="#fff"
              d="M48 96h48v48H48zM128 96h336v48H128zM48 232h48v48H48zM128 232h336v48H128zM48 368h48v48H48zM128 368h336v48H128z"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 ">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="flex flex-col gap-8 text-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1 ${
                  pathname === item.href
                    ? "underline underline-offset-8 decoration-[#EABB00] decoration-2"
                    : ""
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
