import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-stone-900 to-stone-950 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            <Link href="/">
              <img 
                src="/images/footer.png" 
                alt="MasterPiece Interiors" 
                className="h-12 md:h-16 hover:opacity-80 transition-opacity duration-300" 
              />
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              Crafting exceptional interiors with a perfect blend of traditional craftsmanship and modern innovation.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-light mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-stone-400 hover:text-amber-700 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-stone-400 hover:text-amber-700 text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-stone-400 hover:text-amber-700 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-light mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm text-stone-400">
              <div>
                <a href="tel:7304420600" className="hover:text-amber-700 transition-colors block">
                  7304420600
                </a>
                <a href="tel:9994445388" className="hover:text-amber-700 transition-colors block">
                  9994445388
                </a>
              </div>
              <div>
                <p>Noothanjeri Road, Madambakkam</p>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>

        <div className="text-center text-stone-500 text-sm">
          &copy; {currentYear} MasterPiece Interiors. All rights reserved.
        </div>

        <div className="mt-4 text-center">
          <p className="text-stone-600 text-xs italic">
            Inspired Interiors, Perfected
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;