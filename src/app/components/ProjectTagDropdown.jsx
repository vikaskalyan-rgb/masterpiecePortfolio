import React from "react";

const ProjectTagDropdown = ({ selectedTag, handleTagChange }) => {
  return (
    <div className="relative w-full max-w-[16rem] mx-auto">
      <select
        className="appearance-none text-[#252525] border border-gray-300 bg-gray-50 text-sm px-3 py-2 cursor-pointer w-full 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out 
        hover:bg-white hover:border-blue-400 shadow-sm"
        value={selectedTag}
        onChange={(e) => handleTagChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Tv Unit">Tv Unit</option>
        <option value="Pooja Unit">Pooja Unit</option>
        <option value="Modular Kitchen">Modular Kitchen</option>
        <option value="Bedroom">Bedroom</option>
      </select>

      {/* Custom Arrow */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
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



