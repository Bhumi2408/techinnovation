"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#aboutus" },
    { name: "Products", href: "#products" },
    { name: "Contact Us", href: "#contactus" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white md:bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto grid h-24 w-full grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:h-20 md:grid-cols-[200px_1fr_200px] lg:px-12 xl:px-16">
        {/* Logo */}

        <Link
          href="/"
          className="relative z-50 flex items-center justify-self-start"
        >
          <Image
            src="/logo.png"
            alt="Tech Innovation Logo"
            width={150}
            height={60}
            priority
            className="block h-auto w-[110px] sm:w-[125px] md:w-[130px] lg:w-[140px]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block md:justify-self-center">
          <ul className="flex items-center gap-6 lg:gap-9 xl:gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-[#3A4F66] transition-colors duration-300 hover:text-[#F58220] lg:text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Center balancing column */}
        <div className="hidden md:block" />

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-md border border-[#3A4F66]/10 bg-white shadow-xs md:hidden"
        >
          <span
            className={`h-[2px] w-5 rounded-full bg-[#263746] transition-all duration-300 ${
              menuOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-[#263746] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-[#263746] transition-all duration-300 ${
              menuOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="absolute left-0 top-full w-full border-t border-gray-200 bg-white px-6 py-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-bold uppercase tracking-wide text-[#3A4F66] transition-colors hover:text-[#F58220]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
