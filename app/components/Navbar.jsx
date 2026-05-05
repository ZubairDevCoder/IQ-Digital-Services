"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#3e5172] text-black dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:scale-105 transition duration-300"
        >
          <Image
            src="/iq_logo.png"
            alt="IQ Digital Services Logo"
            width={140}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative font-semibold text-md transition-all duration-300 hover:scale-110
              ${
                active === link.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-500"
              }
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-pink-500 after:transition-all hover:after:w-full`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <Button
          variant="default"
          className="hidden text-md md:inline-flex "
          onClick={() => (window.location.hash = "#contact")}
        >
          Contact Us
        </Button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            {/* ✅ FIXED: simple button (no nested button issue) */}
            <SheetTrigger>
              <Menu className="text-white w-5 h-5" />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border-r border-gray-200 dark:border-gray-800"
            >
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold flex gap-1">
                  <span className="text-pink-500">IQ</span>
                  <span className="text-blue-600">Digital</span>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Links */}
              <div className="flex flex-col gap-6 mt-6 px-6">
                {links.map((link, i) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setActive(link.href)}
                      className="text-lg font-semibold text-gray-800 dark:text-gray-200 
                      hover:text-pink-500 transition-all duration-300 
                      hover:translate-x-2 relative group"
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      {link.name}

                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </SheetClose>
                ))}
              </div>

              {/* Mobile Button */}
              <SheetFooter className="mt-6 px-6">
                <SheetClose asChild>
                  <Button
                    className="w-full rounded-xl shadow-lg hover:scale-105 transition"
                    onClick={() => (window.location.hash = "#contact")}
                  >
                    Contact Us
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
