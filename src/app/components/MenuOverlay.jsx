import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-2xl border-t border-stone-200">
      <ul className="flex flex-col py-6 px-6 space-y-4">
        {links.map((link, index) => (
          <li 
            key={index}
            className="border-b border-stone-100 last:border-0 pb-4 last:pb-0"
          >
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
        
        {/* Mobile CTA Button */}
        <li className="pt-4">
          <Link
            href="#contact"
            className="block w-full text-center px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-sm shadow-md transition-all duration-300"
          >
            <span className="text-sm font-light tracking-wide">Get Started</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;