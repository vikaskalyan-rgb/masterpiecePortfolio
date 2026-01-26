"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import ProjectTagDropdown from "./ProjectTagDropdown";
import VideoCarousel from "./VideoCorousel";

const projectsData = [
  {
    id: 1,
    title: "Modern TV Unit Design",
    description: "Contemporary entertainment center with premium finish",
    image: "/images/tv_unit/tv_unit_1.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 2,
    title: "Elegant TV Wall Panel",
    description: "Sophisticated wall-mounted entertainment solution",
    image: "/images/tv_unit/tv_unit_2.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 3,
    title: "Minimalist TV Console",
    description: "Clean lines with functional storage",
    image: "/images/tv_unit/tv_unit_3.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 4,
    title: "Luxury TV Unit Setup",
    description: "Premium materials with ambient lighting",
    image: "/images/tv_unit/tv_unit_4.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 5,
    title: "Contemporary TV Showcase",
    description: "Modern design with display shelving",
    image: "/images/tv_unit/tv_unit_7.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 6,
    title: "Classic TV Entertainment Unit",
    description: "Timeless design with ample storage",
    image: "/images/tv_unit/tv_unit_8.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 7,
    title: "Traditional Pooja Mandir",
    description: "Sacred space with intricate craftsmanship",
    image: "/images/Pooja/pooja_1.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 8,
    title: "Modern Pooja Room Design",
    description: "Contemporary prayer space with elegant finish",
    image: "/images/Pooja/pooja_2.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 9,
    title: "Compact Pooja Unit",
    description: "Space-efficient spiritual corner",
    image: "/images/Pooja/pooja_3.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 10,
    title: "Wooden Pooja Altar",
    description: "Traditional craftsmanship meets modern aesthetics",
    image: "/images/Pooja/pooja_4.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 11,
    title: "Designer Pooja Corner",
    description: "Elegant prayer space with LED accents",
    image: "/images/Pooja/pooja_5.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 12,
    title: "L-Shaped Modular Kitchen",
    description: "Efficient layout with premium appliances",
    image: "/images/Kitchen/kitchen_1.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 13,
    title: "Contemporary Kitchen Design",
    description: "Sleek cabinets with modern fixtures",
    image: "/images/Kitchen/kitchen_2.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 14,
    title: "Parallel Kitchen Layout",
    description: "Maximized workspace with smart storage",
    image: "/images/Kitchen/kitchen_3.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 15,
    title: "Island Kitchen Setup",
    description: "Luxury cooking space with central island",
    image: "/images/Kitchen/kitchen_4.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 16,
    title: "Compact Modular Kitchen",
    description: "Space-saving design without compromise",
    image: "/images/Kitchen/kitchen_5.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 17,
    title: "White Gloss Kitchen",
    description: "Bright and spacious culinary haven",
    image: "/images/Kitchen/kitchen_6.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 18,
    title: "U-Shaped Kitchen Design",
    description: "Complete workspace optimization",
    image: "/images/Kitchen/kitchen_7.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 19,
    title: "Modern Kitchen Interior",
    description: "Contemporary style with functionality",
    image: "/images/Kitchen/kitchen_8.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 20,
    title: "Luxury Modular Kitchen",
    description: "Premium finishes and high-end appliances",
    image: "/images/Kitchen/kitchen_9.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 21,
    title: "Wooden Finish Kitchen",
    description: "Warm tones with elegant cabinetry",
    image: "/images/Kitchen/kitchen_10.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 22,
    title: "Wall-Mounted TV Unit",
    description: "Floating design with concealed storage",
    image: "/images/tv_unit/tv_unit_9.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 23,
    title: "Entertainment Wall Design",
    description: "Complete media wall solution",
    image: "/images/tv_unit/tv_unit_10.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 24,
    title: "Contemporary TV Panel",
    description: "Sleek design with ambient lighting",
    image: "/images/tv_unit/tv_unit_11.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 25,
    title: "Modular TV Cabinet",
    description: "Versatile storage with display options",
    image: "/images/tv_unit/tv_unit_12.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 26,
    title: "Luxury TV Wall Unit",
    description: "Premium materials with LED integration",
    image: "/images/tv_unit/tv_unit_14.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 27,
    title: "Designer TV Showcase",
    description: "Artistic design with practical storage",
    image: "/images/tv_unit/tv_unit_15.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 28,
    title: "Modern Entertainment Center",
    description: "Complete audio-visual solution",
    image: "/images/tv_unit/tv_unit_16.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 29,
    title: "Minimalist TV Setup",
    description: "Clean aesthetics with hidden cables",
    image: "/images/tv_unit/tv_unit_17.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 30,
    title: "Elegant TV Console",
    description: "Sophisticated design for living spaces",
    image: "/images/tv_unit/tv_unit_18.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 31,
    title: "Contemporary TV Unit",
    description: "Modern styling with smart features",
    image: "/images/tv_unit/tv_unit_19.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 32,
    title: "Premium TV Wall Panel",
    description: "Luxury finish with integrated lighting",
    image: "/images/tv_unit/tv_unit_20.jpg",
    tag: ["All","Tv Unit"],
  },
  {
    id: 33,
    title: "Ornate Pooja Mandir",
    description: "Detailed woodwork for sacred space",
    image: "/images/Pooja/pooja_6.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 34,
    title: "Wall-Mounted Pooja Unit",
    description: "Space-efficient spiritual corner",
    image: "/images/Pooja/pooja_7.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 35,
    title: "Luxury Pooja Room",
    description: "Elaborate design with premium materials",
    image: "/images/Pooja/pooja_8.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 36,
    title: "Contemporary Pooja Space",
    description: "Modern prayer area with traditional touch",
    image: "/images/Pooja/pooja_9.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 37,
    title: "Compact Pooja Altar",
    description: "Elegant design for small spaces",
    image: "/images/Pooja/pooja_10.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 38,
    title: "Designer Pooja Unit",
    description: "Artistic craftsmanship with LED features",
    image: "/images/Pooja/pooja_11.jpg",
    tag: ["All","Pooja Unit"],
  },
  {
    id: 39,
    title: "Straight Modular Kitchen",
    description: "Linear design for efficient workflow",
    image: "/images/Kitchen/kitchen_11.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 40,
    title: "Open Concept Kitchen",
    description: "Spacious layout with modern appliances",
    image: "/images/Kitchen/kitchen_12.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 41,
    title: "Designer Kitchen Setup",
    description: "Custom cabinetry with premium finish",
    image: "/images/Kitchen/kitchen_13.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 42,
    title: "Contemporary Kitchen Space",
    description: "Modern design with smart storage",
    image: "/images/Kitchen/kitchen_14.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 43,
    title: "Elegant Modular Kitchen",
    description: "Sophisticated style with functionality",
    image: "/images/Kitchen/kitchen_15.jpg",
    tag: ["All","Modular Kitchen"],
  },
  {
    id: 44,
    title: "Sliding Wardrobe Design",
    description: "Space-saving with mirror panels",
    image: "/images/Bedroom/wardrobe_1.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 45,
    title: "Walk-In Closet Setup",
    description: "Luxury wardrobe with organized sections",
    image: "/images/Bedroom/wardrobe_2.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 46,
    title: "Modern Wardrobe System",
    description: "Contemporary storage solution",
    image: "/images/Bedroom/wardrobe_3.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 47,
    title: "Built-In Wardrobe",
    description: "Custom-fitted bedroom storage",
    image: "/images/Bedroom/wardrobe_4.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 48,
    title: "Designer Bedroom Closet",
    description: "Elegant wardrobe with premium finish",
    image: "/images/Bedroom/wardrobe_5.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 49,
    title: "Hinged Door Wardrobe",
    description: "Classic design with ample space",
    image: "/images/Bedroom/wardrobe_6.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 50,
    title: "Mirrored Wardrobe Unit",
    description: "Reflective doors for spacious feel",
    image: "/images/Bedroom/wardrobe_7.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 51,
    title: "Contemporary Closet Design",
    description: "Modern wardrobe with LED lighting",
    image: "/images/Bedroom/wardrobe_8.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 52,
    title: "Wooden Wardrobe Finish",
    description: "Warm tones with organized interiors",
    image: "/images/Bedroom/wardrobe_9.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 53,
    title: "Luxury Bedroom Storage",
    description: "Premium wardrobe with smart features",
    image: "/images/Bedroom/wardrobe_10.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 54,
    title: "Compact Wardrobe Solution",
    description: "Efficient design for small bedrooms",
    image: "/images/Bedroom/wardrobe_11.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 55,
    title: "Master Bedroom Closet",
    description: "Spacious wardrobe with accessories section",
    image: "/images/Bedroom/wardrobe_12.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 56,
    title: "Sliding Mirror Wardrobe",
    description: "Full-length mirrors with storage",
    image: "/images/Bedroom/wardrobe_13.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 57,
    title: "Modern Bedroom Storage",
    description: "Sleek wardrobe with soft-close doors",
    image: "/images/Bedroom/wardrobe_14.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 58,
    title: "Designer Wardrobe System",
    description: "Custom storage with elegant details",
    image: "/images/Bedroom/wardrobe_15.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 59,
    title: "Contemporary Closet Unit",
    description: "Modern design with organized compartments",
    image: "/images/Bedroom/wardrobe_16.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 60,
    title: "Elegant Wardrobe Design",
    description: "Sophisticated storage for master bedroom",
    image: "/images/Bedroom/wardrobe_17.jpg",
    tag: ["All","Bedroom"],
  },
  {
    id: 61,
    title: "Premium Bedroom Wardrobe",
    description: "Luxury finish with innovative storage",
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
    
    <section id="projects" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden">
      {/* Decorative Background */}
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-px bg-amber-700"></div>
            <span className="text-amber-700 uppercase tracking-widest text-sm font-light">
              Portfolio
            </span>
            <div className="w-12 h-px bg-amber-700"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-stone-900 mb-6">
            Recent <span className="text-amber-800 font-normal">Projects</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Explore our curated collection of exceptional interior transformations
          </p>
        </motion.div>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-1"
        >
          <VideoCarousel />
        </motion.div>

        {/* Filter Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <ProjectTagDropdown selectedTag={tag} handleTagChange={handleTagChange} />
        </motion.div>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
        </motion.div>

        {/* Projects Grid */}
        <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
              />
            </motion.li>
          ))}
        </ul>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-2">No Projects Found</h3>
            <p className="text-stone-600">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
    </section>
  );
};

export default ProjectsSection;