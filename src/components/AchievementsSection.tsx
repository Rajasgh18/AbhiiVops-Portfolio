"use client";
import React from "react";
import dynamic from "next/dynamic";

interface AnimatedNumbersProps {
  includeComma: boolean;
  animateToNumber: number;
  locale: string;
  className?: string;
  configs?: (_: any, index: number) => { mass: number; friction: number; tension: number };
};

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), { ssr: false });

const AnimatedNumbersWrapper: React.FC<AnimatedNumbersProps> = (props) => {
  return <AnimatedNumbers {...props} />;
};

const achievementsList = [
  {
    metric: "Projects",
    value: "30",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 xl:gap-16 sm:py-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="flex text-white text-4xl font-bold">
                {achievement.prefix && `${achievement.prefix} `}
                <AnimatedNumbersWrapper
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index: number) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix && `${achievement.postfix} `}
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