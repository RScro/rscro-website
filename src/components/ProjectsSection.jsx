"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

const projectsData = [
  {
    id: 1,
    title: "MEV Arbitrage Bot - Rust",
    description:
      "Built a MEV Arbitrage Bot from scratch written in Rust that would find all matching pairs between different exchanges by interacting with a smart contract, constantly scrape onchain data from each block to detect price differences between the pairs. Then with that data recursively check for profitable swap pathways using multiple decentralised exchanges then eventually executing the profitable swap pathways. Fully learnt how the EVM works, Uniswap functions & docs and DeFi in itself.",
    image: image1,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RScro/rusty-john",
    previewUrl: "https://github.com/RScro/rusty-john",
  },
  {
    id: 2,
    title: "DEX Exchange - Uniswap Clone",
    description:
      "Built a functioning Uniswap clone using React + Vite & Ethers.js to interact with the blockchain. This is a simplified version of it, instead of following the 'x * y = k' Uniswap formula to calculate amounts, we simply call the getAmountsOut() function to calculate prices.",
    image: image2,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RScro/DEX-Exchange",
    previewUrl: "https://dex-exchange.tech/",
  },
  {
    id: 3,
    title: "Modern Banking Website",
    description:
      "Built a modern banking website using React + Vite & Tailwind CSS. I created this project to further expand my Tailwind CSS knowledge and grasp a better understanding of it. The website provides a beautiful template for any finance/banking company.",
    image: image3,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RScro/modern-website-project",
    previewUrl: "https://modern-website-project.tech/",
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid lg:grid-cols-3 gap-8 md:gap-12">
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
