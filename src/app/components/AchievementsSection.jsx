"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Successful Projects",
    value: "600",
    postfix: "+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    metric: "Trained Technicians",
    value: "50",
    postfix: "+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    metric: "Years Experience",
    value: "5",
    postfix: "+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    metric: "Sustainability Initiatives",
    value: "50",
    postfix: "+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const AchievementsSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-px bg-amber-700"></div>
            <span className="text-amber-700 uppercase tracking-widest text-sm font-light">
              Our Achievements
            </span>
            <div className="w-12 h-px bg-amber-700"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-stone-900">
            Excellence in <span className="text-amber-800 font-normal">Numbers</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="relative">
          {/* Decorative Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-700/10 via-amber-700/5 to-amber-700/10 rounded-2xl blur-xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-stone-200/50 p-8 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {achievementsList.map((achievement, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Divider - hidden on last item in row */}
                    {index < achievementsList.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-gradient-to-b from-transparent via-stone-300 to-transparent"></div>
                    )}
                    
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center text-amber-800 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      >
                        {achievement.icon}
                      </motion.div>

                      {/* Animated Number */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-center">
                          <h3 className="text-5xl lg:text-6xl font-light text-stone-900 flex items-baseline">
                            {achievement.prefix}
                            <AnimatedNumbers
                              includeComma
                              animateToNumber={parseInt(achievement.value)}
                              locale="en-US"
                              className="text-5xl lg:text-6xl font-light"
                              configs={(_, index) => {
                                return {
                                  mass: 1,
                                  friction: 100,
                                  tensions: 140 * (index + 1),
                                };
                              }}
                            />
                            <span className="text-amber-800 font-normal">{achievement.postfix}</span>
                          </h3>
                        </div>
                        
                        {/* Metric Label */}
                        <p className="text-stone-600 text-sm lg:text-base font-light tracking-wide">
                          {achievement.metric}
                        </p>
                      </div>

                      {/* Accent Line */}
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-stone-600 text-lg italic">
            Building trust through quality craftsmanship and exceptional service
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
    </section>
  );
};

export default AchievementsSection;