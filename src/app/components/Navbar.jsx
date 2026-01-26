"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Testimonials",
    path: "#testimonials",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-white/80 backdrop-blur-sm py-4 lg:py-6"
      }`}
    >
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-amber-700/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <img 
                src="/images/zoomed.png" 
                alt="MasterPiece Interiors" 
                className={`relative transition-all duration-300 ${
                  scrolled ? "h-10 md:h-12" : "h-12 md:h-16"
                }`}
              />
            </div>
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="group relative px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-sm font-light tracking-wide flex items-center space-x-2">
                <span>Get Started</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-amber-950 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="relative p-2 text-stone-800 hover:text-amber-800 transition-colors duration-300 focus:outline-none group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger/Close Icon with Animation */}
                <span 
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
                    navbarOpen ? "rotate-45 top-2.5" : ""
                  }`}
                ></span>
                <span 
                  className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span 
                  className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ${
                    navbarOpen ? "-rotate-45 top-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
    </nav>
  );
};

export default Navbar;