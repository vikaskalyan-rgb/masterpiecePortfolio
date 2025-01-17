import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Image container */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group cursor-pointer"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={openModal} // Open modal on click
      >
        {/* Optionally add other content or icons */}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on overlay click
        >
          <div
            className="bg-white p-4 rounded-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on image click
          >
            <img
              src={imgUrl}
              alt={title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

