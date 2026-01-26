import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Card Container */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Image Section */}
        <div
          className="relative h-72 md:h-80 overflow-hidden cursor-pointer"
          onClick={openModal}
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Hover Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
            >
              <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </motion.div>
          </div>

          {/* Category Badge (Optional) */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-1.5 bg-amber-800/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded-full shadow-lg">
              View Details
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-3">
          {/* Title */}
          <h3 className="text-xl font-light text-stone-900 group-hover:text-amber-800 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Decorative Line */}
          <div className="pt-2">
            <div className="w-12 h-px bg-amber-700 group-hover:w-full transition-all duration-500" />
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-700/30 rounded-lg transition-colors duration-500 pointer-events-none" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Close modal"
              >
                <svg 
                  className="w-6 h-6 text-stone-800 group-hover:text-amber-800 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative">
                <img
                  src={imgUrl}
                  alt={title}
                  className="max-w-full max-h-[calc(90vh-120px)] w-auto h-auto object-contain mx-auto"
                />
              </div>

              {/* Modal Footer with Details */}
              <div className="bg-gradient-to-r from-stone-50 to-white p-6 border-t border-stone-200">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-light text-stone-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-stone-600 text-base">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Hint */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <p className="text-white/60 text-sm tracking-wider uppercase">
                Click anywhere to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;