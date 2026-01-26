"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  return (
    <section className="relative bg-gradient-to-b from-white to-stone-50 py-20" id="about">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/50 to-stone-200/50 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image 
                src="/images/about-image.jpg" 
                width={600} 
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                alt="MasterPiece Interiors Showcase"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Decorative Corner */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-amber-700/30 rounded-br-3xl"></div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col space-y-6">
            {/* Subtitle */}
            <div className="inline-flex items-center space-x-3">
              <div className="w-12 h-px bg-amber-700"></div>
              <span className="text-amber-700 uppercase tracking-widest text-sm font-light">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-stone-900 leading-tight">
              Get To Know
              <span className="block text-amber-800 font-normal mt-2">
                MasterPiece Interiors
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-stone-700 leading-relaxed">
              <p className="text-base lg:text-lg">
                Welcome to <span className="font-semibold text-stone-900">MasterPiece Interiors</span>, where traditional carpentry meets modern machinery to bring your dream spaces to life. Our strength lies in our deep understanding of both the aesthetic and economic needs of our clients.
              </p>
              
              <p className="text-base lg:text-lg">
                We create realistic visual representations of your home before starting any work, ensuring you can visualize your space transformation. Our polishing and finishes are among the best in the industry, providing durability and elegance. We operate with the highest standards of integrity, always prioritizing our clients' satisfaction and trust.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-700 p-6 rounded-r-lg my-6">
                <p className="text-base lg:text-lg text-stone-800">
                  Located in <span className="font-semibold">Chennai</span>, our state-of-the-art manufacturing unit spans <span className="font-semibold">6,000 square feet</span> and is equipped with the latest machinery imported from Europe. This allows us to deliver precision, quality, and innovation in every project.
                </p>
              </div>

              <p className="text-base lg:text-lg">
                In today's world, with limited budgets and building restrictions, we understand the importance of transforming your space to meet both practical needs and personal vision. The kitchen is often the heart of the home, and the living room serves as the gathering space for family and friends, making it essential to design them with care and attention.
              </p>

              <p className="text-base lg:text-lg">
                The bedroom, a sanctuary for relaxation, deserves a design that promotes peace and comfort. We are committed to helping you create such spaces, turning even the most challenging areas into stress-free retreats.
              </p>

              <p className="text-base lg:text-lg italic text-stone-600 border-t border-stone-200 pt-5 mt-5">
                We would be honored to be part of your journey in transforming your home into a space that truly reflects your style and needs. Please feel free to explore some of our completed projects below. For any inquiries or clarifications, please don't hesitate to contact us.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-3 bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-light tracking-wide">Let's Start Your Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
    </section>
  );
};

export default AboutSection;