"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Anna Nagar, Chennai",
    project: "3BHK Interior Design",
    rating: 5,
    text: "MasterPiece Interiors transformed our home beautifully. The attention to detail and quality of work exceeded our expectations!",
  },
  {
    name: "Rajesh Kumar",
    location: "T. Nagar, Chennai",
    project: "Modular Kitchen",
    rating: 5,
    text: "Professional team, excellent craftsmanship, and timely delivery. Our kitchen looks absolutely stunning!",
  },
  {
    name: "Anita Desai",
    location: "Velachery, Chennai",
    project: "Complete Home Interior",
    rating: 5,
    text: "From design to execution, everything was perfect. Highly recommend MasterPiece for anyone looking for quality interiors.",
  },
  {
    name: "Karthik Ramesh",
    location: "Adyar, Chennai",
    project: "Bedroom Wardrobe",
    rating: 5,
    text: "The wardrobe design is exactly what we wanted. Premium quality materials and excellent finishing. Very satisfied with the work!",
  },
  {
    name: "Lakshmi Narayan",
    location: "Chromepet, Chennai",
    project: "Pooja Room Design",
    rating: 5,
    text: "Beautiful pooja room with traditional touch and modern amenities. The team understood our requirements perfectly!",
  },
  {
    name: "Vijay Prakash",
    location: "Tambaram, Chennai",
    project: "TV Unit & Living Room",
    rating: 5,
    text: "Outstanding work on our living room. The TV unit is the centerpiece of our home now. Great value for money!",
  },
  {
    name: "Divya Krishnan",
    location: "Porur, Chennai",
    project: "Modular Kitchen",
    rating: 5,
    text: "Very impressed with the quality and design. The kitchen is so functional and looks amazing. Thank you MasterPiece team!",
  },
  {
    name: "Selvam Murugan",
    location: "Pallavaram, Chennai",
    project: "Complete 2BHK Interior",
    rating: 5,
    text: "Best decision to choose MasterPiece Interiors. They completed our entire 2BHK on time with exceptional quality. Highly professional!",
  },
  {
    name: "Meera Sundar",
    location: "Sholinganallur, Chennai",
    project: "Master Bedroom & Wardrobe",
    rating: 5,
    text: "The master bedroom looks like a luxury hotel suite! Excellent craftsmanship and attention to every small detail. Worth every penny!",
  },
  {
    name: "Arun Kumar",
    location: "Madambakkam, Chennai",
    project: "Modular Kitchen & Dining",
    rating: 5,
    text: "Being neighbors to their factory, we saw their work quality firsthand. Excellent materials and European machinery make a real difference!",
  },
  {
    name: "Padma Venkat",
    location: "OMR, Chennai",
    project: "Kids Bedroom Design",
    rating: 5,
    text: "They designed a beautiful and safe bedroom for our children. Creative designs with sturdy materials. My kids absolutely love it!",
  },
  {
    name: "Suresh Babu",
    location: "Guindy, Chennai",
    project: "Office Interior",
    rating: 5,
    text: "Professional office interior at our home. Clean, modern design with ample storage. Perfect for work from home setup!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-px bg-amber-700"></div>
            <span className="text-amber-700 uppercase tracking-widest text-sm font-light">
              Testimonials
            </span>
            <div className="w-12 h-px bg-amber-700"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-stone-900">
            What Our <span className="text-amber-800 font-normal">Clients Say</span>
          </h2>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Hear from our satisfied customers across Chennai about their experience with MasterPiece Interiors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-stone-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100"
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-amber-700/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-stone-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-stone-200">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-amber-900 font-semibold text-lg shadow-md">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-medium text-stone-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-600">{testimonial.project}</p>
                  <p className="text-xs text-amber-700 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-stone-600 mb-6">Want to be our next happy customer?</p>
          <Link
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="font-light tracking-wide">Start Your Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;