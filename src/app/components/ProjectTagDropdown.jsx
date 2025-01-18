import React from "react";

const ProjectTagDropdown = ({ selectedTag, handleTagChange }) => {
  return (
    <div className="relative w-full max-w-[16rem] mx-auto">
      <select
        className="block w-full px-4 py-3 text-base rounded-lg border-2 border-gray-200
                   bg-white text-gray-700 font-medium
                   appearance-none cursor-pointer
                   shadow-sm hover:shadow-md
                   transition-all duration-300 ease-in-out
                   focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100
                   hover:border-blue-400"
        value={selectedTag}
        onChange={(e) => handleTagChange(e.target.value)}
      >
        <option value="All" className="py-2">All Projects</option>
        <option value="Tv Unit" className="py-2">TV Unit</option>
        <option value="Pooja Unit" className="py-2">Pooja Unit</option>
        <option value="Modular Kitchen" className="py-2">Modular Kitchen</option>
        <option value="Bedroom" className="py-2">Bedroom</option>
      </select>

      {/* Enhanced Custom Arrow */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-600 transition-transform duration-300 group-hover:text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectTagDropdown;