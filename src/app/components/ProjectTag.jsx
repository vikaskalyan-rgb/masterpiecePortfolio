import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`
        relative px-6 py-3 rounded-lg font-light tracking-wide text-base
        transition-all duration-300 shadow-md hover:shadow-lg
        ${
          isSelected
            ? "bg-amber-800 text-white border-2 border-amber-800"
            : "bg-white text-stone-700 border-2 border-stone-200 hover:border-amber-600"
        }
      `}
    >
      {/* Active Background Animation */}
      {isSelected && (
        <motion.div
          layoutId="activeProjectTag"
          className="absolute inset-0 bg-amber-800 rounded-lg -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      {/* Button Text */}
      <span className="relative z-10">{name}</span>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-amber-700/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-20"></div>
    </motion.button>
  );
};

export default ProjectTag;