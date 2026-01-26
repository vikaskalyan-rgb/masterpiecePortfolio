import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectTagDropdown = ({ selectedTag, handleTagChange }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const windowHeight = window.innerHeight;
        
        // Only show sticky when:
        // 1. Section has scrolled past the top of viewport
        // 2. Section bottom is still visible (not scrolled past)
        const shouldBeSticky = sectionTop < 100 && sectionBottom > 200;
        
        setIsSticky(shouldBeSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tags = [
    { name: "All", label: "All Projects", icon: "⚡" },
    { name: "Tv Unit", label: "TV Units", icon: "📺" },
    { name: "Pooja Unit", label: "Pooja Units", icon: "🕉️" },
    { name: "Modular Kitchen", label: "Kitchens", icon: "🍳" },
    { name: "Bedroom", label: "Wardrobes", icon: "🛏️" },
  ];

  const selectedTagData = tags.find(tag => tag.name === selectedTag);

  return (
    <>
     


      {/* Floating Filter Button - Only in Projects Section */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-8 right-8 z-50"
          >
            {/* Expanded Menu */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 space-y-2 min-w-[200px]"
                >
                  {tags.map((tag) => (
                    <button
                      key={`float-${tag.name}`}
                      onClick={() => {
                        handleTagChange(tag.name);
                        setIsExpanded(false);
                      }}
                      className={`
                        w-full px-4 py-3 rounded-lg text-left font-light
                        transition-all duration-300 flex items-center space-x-3
                        ${
                          selectedTag === tag.name
                            ? "bg-amber-800 text-white shadow-md"
                            : "bg-stone-50 text-stone-700 hover:bg-amber-50"
                        }
                      `}
                    >
                      <span className="text-xl">{tag.icon}</span>
                      <span>{tag.label}</span>
                      {selectedTag === tag.name && (
                        <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main FAB Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-16 h-16 bg-amber-800 hover:bg-amber-900 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center relative"
            >
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.div
                    key="filter"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-amber-800 rounded-full flex items-center justify-center text-xs font-semibold shadow-md">
                {selectedTagData.icon}
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectTagDropdown;