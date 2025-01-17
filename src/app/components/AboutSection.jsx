"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-2 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">Get To Know About Us</h2>
          <p className="text-base lg:text-lg text-black">
          Welcome to MasterPiece Interiors, where traditional carpentry meets modern machinery to bring your dream spaces to life.
           Our strength lies in our deep understanding of both the aesthetic and economic needs of our clients.
           We create realistic visual representations of your home before starting any work, ensuring you can visualize your space transformation.
           Our polishing and finishes are among the best in the industry, providing durability and elegance.
           We operate with the highest standards of integrity, always prioritizing our clients satisfaction and trust.<br></br><br></br>
           Located in Chennai, our state-of-the-art manufacturing unit spans 6,000 square feet and is equipped with the latest machinery imported from Europe.
           This allows us to deliver precision, quality, and innovation in every project.
           In todays world, with limited budgets and building restrictions, we understand the importance of transforming your space to meet both practical needs and personal vision.
           The kitchen is often the heart of the home, and the living room serves as the gathering space for family and friends, making it essential to design them with care and attention. 
           The bedroom, a sanctuary for relaxation, deserves a design that promotes peace and comfort. 
            We are committed to helping you create such spaces, turning even the most challenging areas into stress-free retreats.
            We would be honored to be part of your journey in transforming your home into a space that truly reflects your style and needs. 
            Please feel free to explore some of our completed projects in the images below.
            For any further inquiries or clarifications, please dont hesitate to contact us. We look forward to working with you!
          </p>
          {/* <div className="flex flex-row justify-start mt-8 text-black">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div> */}
          {/* <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
