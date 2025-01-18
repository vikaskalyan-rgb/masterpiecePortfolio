"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import ProjectTagDropdown from "./ProjectTagDropdown";
import VideoCarousel from "./VideoCorousel";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_1.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_2.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_3.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_4.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_7.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 6,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_8.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 7,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_1.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 8,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_2.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 9,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_3.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 10,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_4.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 11,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_5.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 12,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_1.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 13,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_2.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 14,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_3.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 15,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_4.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 16,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_5.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 17,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_6.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 18,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_7.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 19,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_8.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 20,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_9.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 21,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_10.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 22,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_9.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 23,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_10.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 24,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_11.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 25,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_12.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 26,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_14.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 27,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_15.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 28,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_16.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 29,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_17.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 30,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_18.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 31,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_19.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 32,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/tv_unit/tv_unit_20.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 33,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_6.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 34,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_7.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 35,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_8.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 35,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_9.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 35,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_10.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 35,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Pooja/pooja_11.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 36,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_11.jpg",
    tag: ["All"," Modular Kitchen"],
  },
  {
    id: 37,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_12.jpg",
    tag: ["All"," Modular Kitchen"],
  },
  {
    id: 38,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_13.jpg",
    tag: ["All"," Modular Kitchen"],
  },
  {
    id: 39,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_14.jpg",
    tag: ["All"," Modular Kitchen"],
  },
  {
    id: 40,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Kitchen/kitchen_15.jpg",
    tag: ["All"," Modular Kitchen"],
  },
  {
    id: 41,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_1.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 42,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_2.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 43,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_3.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 44,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_4.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 45,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_5.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 46,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_6.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 47,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_7.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 48,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_8.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 49,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_9.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 50,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_10.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 51,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_11.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 52,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_12.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 53,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_12.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 54,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_13.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 55,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_14.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 56,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_15.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 57,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_16.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 58,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_17.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 59,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/Bedroom/wardrobe_18.jpg",
    tag: ["All","Bedroom"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-4">
      <div><h2 className="text-center text-4xl font-bold text-black mt-4 mb-1">
      Recent Projects
      </h2>
      <VideoCarousel/></div>
      

      {/* Reduced margin between title and dropdown */}
      <ProjectTagDropdown selectedTag={tag} handleTagChange={handleTagChange} />

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-16 mt-6">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;