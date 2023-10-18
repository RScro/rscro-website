import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="text-white my-8 first:mt-0 last:mb-0 w-[93%] sm:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            className="text-transparent bg-clip-text bg-gradient-to-tr from-primary-400 to-secondary-500"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-thin text-secondary-400">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-[#c7cccf]">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-20" id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-10 md:mb-20">
        Experience
      </h2>

      <div ref={ref} className="w-full sm:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute lg:left-9 top-0 w-[4px] h-full bg-white origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Logo Designer & NFT Artist"
            company="Fiverr"
            companyLink="https://www.fiverr.com/"
            time="Dec. 2018 - Jan. 2023"
            address="Remote"
            work={`Designing & delivering high quality logos and ensuring client satisfaction with good communication & swift deliveries. 
            
            In September 2021, also started designing NFTs. Worked with several top tier NFT projects & earned a percentage of the mint funds, was further compensated for my knowledge in Blockchain technology that accelerated the NFTs growth. 
            
            Demonstrated leadership and communication for successful project coordination and specification.
            `}
          />
          <Details
            position="Blockchain Developer"
            company="Freelance"
            time="Jan. 2023 - Present"
            address="Remote"
            work="Learned Solidity and started freelancing, building NFT projects, building Smart Contracts & running MEV Bots. Leading different MEV project initiatives and contributing by being a highly effective team player.

            Decided to learn Front-End Development libraries in April. 2023. Started building Dapps for clients using React.js, Next.js, Ethers.js, Tailwind CSS & Node.js."
          />

          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
