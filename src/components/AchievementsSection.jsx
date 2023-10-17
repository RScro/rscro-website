import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Clients",
    value: "4",
  },
  {
    metric: "Contributions",
    value: "180",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 md:px-16 flex flex-wrap items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center mx-4 my-4 sm:my-0 ${
                index === 3 ? "xl:order-2" : "" // Adjust the order for "5 Years" element
              } flex-auto`}
              style={{ flex: "1 1%" }} // Keep four columns on larger screens
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-2xl sm:text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
