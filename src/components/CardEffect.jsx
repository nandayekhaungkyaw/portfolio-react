"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card.tsx";
import { LuBadgeCheck } from "react-icons/lu";
import softSkillImg from '../photo/SoftSkill.gif';
import strengthImg from '../photo/Strength.gif';
import educationImg from '../photo/Education.gif';
import weaknessImg from '../photo/Weakness.gif';


export function ThreeDCardDemo() {
  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 1.3, y: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8, // Duration of the animation
        ease: 'easeInOut', // Smooth easing function
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={list}
      className="grid grid-cols-4 max-w-screen-xl justify-between items-end mx-auto"
    >
      {[
        {
          title: "Soft Skills",
          imgSrc: softSkillImg,
          skills: ["Stress Management", "Problem Solving", "Willingness To Learn", "Creativity"]
      },
      {
          title: "Strength",
          imgSrc: strengthImg,
          skills: ["Responsibility", "Work Done is priority", "Research skill", "Perseverance"]
      },
      {
          title: "Education",
          imgSrc: educationImg,
          skills: ["Second year Mechanical Student at 2020 .(TU-KSE)", "English-Intermediate level", "Still learning Backend"]
      },
      {
          title: "Weakness",
          imgSrc: weaknessImg,
          skills: ["Focus on Efficiency Over Detail", "Preference for Challenging Tasks Over Repetitive Work", "Being junior UI/UX designer and frontend developer"]
      }
      ].map((card, index) => (
        <motion.div key={index} variants={item}>
          <CardContainer className="inter-var h-full">
            <CardBody className="relative h-full group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-fit rounded-xl p-4">
              <CardItem translateZ="50" className="text-xl font-bold h-full text-neutral-600 dark:text-white">
                <div className="bg-white shadow-lg rounded-lg p-4 w-72 h-full">
                  <div className="flex justify-center mb-2">
                    <img src={card.imgSrc} className="size-12" alt={`${card.title} icon`} />
                  </div>
                  <h2 className="text-center text-lg font-semibold">{card.title}</h2>
                  <ul className="mt-2 space-y-4 text-sm font-medium">
                    {card.skills.map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2"><LuBadgeCheck /></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ThreeDCardDemo;
