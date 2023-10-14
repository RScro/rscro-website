import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import rscro from "../assets/rscro.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>HTML & CSS</li>
        <li>JavaScript/TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Vite.js</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Web3",
    id: "web3",
    content: (
      <ul className="list-disc pl-4">
        <li>Solidity</li>
        <li>Ethers.js</li>
        <li>Rust</li>
        <li>EVM</li>
        <li>MEV Bots</li>
        <li>Uniswap</li>
        <li>Foundry/Hardhat</li>
        <li>NFTs</li>
      </ul>
    ),
  },
  {
    title: "Skills2",
    id: "skills2",
    content: (
      <ul className="list-disc pl-4">
        <li>Photoshop</li>
        <li>Logo Design</li>
        <li>GUI Development</li>
        <li>Social Media Marketing</li>
        <li className="text-[#121212]"></li>
        <li className="text-[#121212]"></li>
        <li className="text-[#121212]"></li>
        <li className="text-[#121212]"></li>
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
      <div className="lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src={rscro}
          className="border rounded-xl border-primary-500 md:mx-auto"
          width={500}
          height={500}
        />
        <div className="mt-4 lg:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-base text-[#c7cccf]">
            I am a Full-Stack Blockchain Developer with a passion for Blockchain
            technology. I have over 3 years of diverse blockchain experience,
            including Freelancing, owning NFT projects, building Smart Contracts
            & running MEV Bots. I am a highly capable self-learner and problem
            solver. I am always looking to expand my knowledge and skill set.{" "}
            <br />
            <br />
            Not only am I well versed in Blockchain technology, but I also have
            experience mentoring Junior Developers, leading different MEV
            project initiatives, and am a highly effective team player. My
            communication and people skills help me excel in leadership and
            team-working roles.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Tech Stack{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("web3")}
              active={tab === "web3"}
            >
              {" "}
              Blockchain{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills2")}
              active={tab === "skills2"}
            >
              {" "}
              Other Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
