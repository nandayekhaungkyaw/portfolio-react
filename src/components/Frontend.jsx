"use client";
import { cn } from "../lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// React
import { motion } from "framer-motion"

// React Server Components


const Frontend = ({ url, title, text, link,time }) => {

  // useEffect(() => {
  //   AOS.init({ duration: 3000,delay: time, easing: 'ease-out-back', once: false });
  //   AOS.refresh();
  // }, []);
  const hoverImageUrl = url;
  const defaultImageUrl = "https://media.giphy.com/media/d4Crzc7orai7gXH0Bm/giphy.gif?cid=790b7611vmf77mpu0zmnvpal2rtgrq0ak2mtn8i5xr81520y&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  // Helper function to determine the background style
  const getBackgroundImage = (imageUrl) => {
    return imageUrl && imageUrl.startsWith("http") ? `url(${imageUrl})` : imageUrl;
  };

  return (
    <div className="max-w-xs w-full  hover:text-opacity-0 text-white">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-cover transition-all duration-500 bg-center"
        )}
        style={{
          backgroundImage: getBackgroundImage(defaultImageUrl),
       
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage = getBackgroundImage(hoverImageUrl);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage = getBackgroundImage(defaultImageUrl);
        }}
      >
        <div className="text relative z-50">
          
          <h1 className="font-bold text-xl md:text-3xl  relative">
            {title}
          </h1>
          <p className="font-normal text-base  relative my-4">
            {text}
          </p>
          <a
            target="_blank"
            className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
            href={link}
          >
            Test link
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
