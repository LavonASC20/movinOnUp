"use client";

import { Button } from "@/components/button";
import { JSX } from "react";
import Image from "next/image"
import Link from "next/link"

export const NavbarSubsection = (): JSX.Element => {
    const navigationItems = [
        { label: "Our Mission", href: "/mission" },
        { label: "Our Services", href: "/services" },
        { label: "Our Team", href: "/team" },
    ];
  return (
      <header className="fixed top-0 z-50 w-full h-[100px] bg-[#d2e7ff] shadow pr-[100px]">
        <div 
          className="container mx-auto flex items-center justify-between"
          style={{ height: "15vh" }}
        >
          <Link 
              href="/" 
              className="relative text-2xl font-bold text-black w-full h-auto max-w-[100px]"
            >
            <Image 
              src="/yellowFill.png" 
              alt="Logo" 
              className="w-full h-auto object-contain"
              width={1000}
              height={688}
            /> 
          </Link>
          <nav className="flex items-center gap-10">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="font-medium text-black text-xl leading-[30px]"
              >
                {item.label}
              </Link>
            ))}
                <Link href = "/contact">
                    <Button className="bg-black text-white rounded-lg shadow-button-shadow">
                    Book Now
                    </Button>
                </Link>
          </nav>
        </div>
      </header>
  );
};
