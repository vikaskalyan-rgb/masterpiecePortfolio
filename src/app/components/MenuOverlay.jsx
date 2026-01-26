import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="md:hidden fixed top-[72px] left-0 right-0 bg-white shadow-2xl border-t border-stone-200 z-40 max-h-[calc(100vh-72px)] overflow-y-auto">
      <ul className="flex flex-col py-6 px-6 space-y-2">
        {links.map((link, index) => (
          <li 
            key={index}
            className="border-b border-stone-100 last:border-0"
            onClick={handleLinkClick}
          >
            <Link
              href={link.path}
              className="block py-4 px-4 text-stone-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-all duration-300 text-base font-light uppercase tracking-wide"
            >
              {link.title}
            </Link>
          </li>
        ))}
        
        {/* Mobile CTA Button */}
        <li className="pt-4" onClick={handleLinkClick}>
          <Link
            href="#contact"
            className="block w-full text-center px-6 py-4 bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="text-base font-light tracking-wide">Get Started</span>
          </Link>
        </li>
      </ul>
      
      {/* Decorative Bottom */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>
    </div>
  );
};

export default MenuOverlay;