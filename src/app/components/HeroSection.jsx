"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-stone-50 via-white to-amber-50/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Elegant Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md"
            >
              <div className="w-2 h-2 bg-amber-700 rounded-full animate-pulse"></div>
              <span className="text-stone-700 text-sm tracking-widest uppercase font-light">
                Crafting Dream Spaces Since 2020
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
                <span className="block text-stone-900">
                  MasterPiece
                </span>
                <span className="block bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent font-normal">
                  Interiors
                </span>
              </h1>

              {/* Animated Subtitle */}
              <div className="flex items-center space-x-3 text-2xl sm:text-3xl lg:text-4xl">
                <span className="text-stone-600 font-light">We are</span>
                <TypeAnimation
                  sequence={[
                    "Aesthetic Planners",
                    2000,
                    "Room Curators",
                    2000,
                    "Design Strategists",
                    2000,
                    "Space Innovators",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-amber-800 font-normal"
                />
              </div>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-stone-700 text-lg lg:text-xl leading-relaxed max-w-2xl"
            >
              At MasterPiece Interiors, we blend traditional craftsmanship with modern machinery to create stunning, functional spaces. With a keen understanding of both aesthetic and economic needs, we design and build custom solutions that reflect your vision.
            </motion.p>

            {/* Key Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              <div className="flex items-center space-x-3 text-stone-700">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-light">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-700">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-light">Ethical Practices</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-700">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-light">Expert Team</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 font-light tracking-wide flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-amber-950 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              <Link
                href="/#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 hover:border-amber-700 rounded-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="font-light tracking-wide">Learn More</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/30 via-amber-300/20 to-stone-200/30 blur-2xl animate-pulse"></div>
              
              {/* Logo Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-br from-white to-stone-50 shadow-2xl p-8 flex items-center justify-center">
                {/* Inner Glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-50 to-white shadow-inner"></div>
                
                {/* Logo */}
                <div className="relative z-10">
                  <Image
                    src="/images/Logo.png"
                    alt="MasterPiece Interiors Logo"
                    width={350}
                    height={350}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating Accent Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-amber-700/10 rounded-full blur-xl"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-400/10 rounded-full blur-xl"
              ></motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;