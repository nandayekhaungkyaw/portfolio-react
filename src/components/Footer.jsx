import React from 'react';
import { motion } from 'framer-motion';
import phoneIcon from '../photo/phone.gif';
import mailIcon from '../photo/mail.gif';
import earthIcon from '../photo/earth.gif'

const Footer = () => {
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
      initial="hidden" // Start hidden
      whileInView="visible" // Trigger animation when in view
      viewport={{ once: false }} // Repeat animation each time it comes into view
      variants={list} // Apply list variants for staggered animation
      className="flex flex-col items-center w-[300px] sm:w-[600px] md:w-[660px] lg:w-[1000px] xl:w-[1220px] mx-auto"
    >
      {/* Heading */}
      <motion.div variants={item} className="text-center">
        <h1 className="flex-none text-xl font-semibold text-third footer1">
          Get in touch
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div variants={item} className="mt-3 text-center items-center flex justify-center footer2">
        <p className="  w-1/2 max-sm:w-full text-wrap">
          I'm currently available to take on new projects. So feel free to send me a message about anything you want me to work on. You can contact anytime.
        </p>
      </motion.div>

      {/* Social Brands */}
      <div variants={item} className="flex flex-col gap-4 mt-4 text-third">
    {/* Phone Contact */}
    <motion.div variants={item} className="flex flex-row text-center items-center gap-3 justify-center footer3">
        <img src={phoneIcon} alt="phone icon" className="size-10" />
        <a href="tel:09788131268">Click me to get phone contact</a>
    </motion.div>

    {/* Email Contact */}
    <motion.div variants={item} className="flex flex-row text-center items-center gap-3 justify-center footer4">
        <img src={mailIcon} alt="mail icon" className="size-10" />
        <a href="mailto:yekhaungkyaw123456@gmail.com">Click me to get Gmail contact</a>
    </motion.div>

    {/* Location */}
    <motion.div variants={item} className="flex flex-row text-center items-center gap-3 footer5 justify-center">
        <img src={earthIcon} alt="earth icon" className="size-10" />
        <h2 className="text-xl font-bold">Yangon, Kyeemyindaing</h2>
    </motion.div>
</div>
    </motion.div>
  );
};

export default Footer;
