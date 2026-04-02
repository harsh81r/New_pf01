

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 🔥 Auto Slider Component (FIXED 4:3)
function AutoSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl">
      <img
        src={images[index]}
        alt="project"
        className="w-full h-full object-cover transition duration-700"
      />
    </div>
  );
}

// 📦 Projects Data
const projects = [
  {
    title: "HDLx APP/APK",
    desc: "Metal pickup app with booking and pricing system.",
    imgs: [
      "/assets/Gemini_Generated_Image_hs7vg5hs7vg5hs7v.png",
      "/assets/Gemini_Generated_Image_f62bh0f62bh0f62b.png",
      "/assets/hdlx3.jpg",
      "/assets/hdlx4.jpg"
    ],
    url: "https://github.com/harsh81r/HDLX_Apk-file",
    github: "https://github.com/harsh81r/HDLX_Apk-file"
  },
  {
    title: "Travelo App",
    desc: "Discover your next adventure with AI travel planning.",
    imgs: [
      "/assets/travelo1.jpg",
      "/assets/travelo2.jpg",
      "/assets/travelo3.jpg",
      "/assets/travelo4.jpg"
      
    ],
    url: "https://travelo-app-pi.vercel.app",
    github: "https://github.com/harsh81r/travelo-app"
  },
  {
    title: "Background Color Change",
    desc: "Dynamic background color changing app.",
    img: "https://cdn1.vectorstock.com/i/1000x1000/78/35/abstract-blur-color-background-vector-20687835.jpg",
    url: "https://harsh81r.github.io/BackgroundColorChange_EverySecond/",
    github: "https://github.com/harsh81r/BackgroundColorChange_EverySecond"
  },
  {
    title: "Counter App",
    desc: "A simple counter application built with React.",
    img: "https://play-lh.googleusercontent.com/pUzhlbMBg2l1dXXe8nXMaQiowYoAuzbjedd-O53VtLTAoDp_tB8sNC2s6_OHtlOOKQ",
    url: "https://harsh81r.github.io/my-to-do-list-FINAL/",
    github: "https://github.com/harsh81r/my-to-do-list-FINAL"
  },
  {
    title: "Todo List",
    desc: "Interactive todo list application using JavaScript.",
    img: "/assets/todo.png",
    url: "https://harsh81r.github.io/my-to-do-list-FINAL/",
    github: "https://github.com/harsh81r/my-to-do-list-FINAL"
  }
];

export default function Projects() {

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black py-16 px-4 sm:px-6">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-bold text-white mb-16"
      >
        🚀 My Projects
      </motion.h1>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >

            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

            <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-xl">

              {/* 🔥 IMAGE / SLIDER */}
              {project.imgs ? (
                <AutoSlider images={project.imgs} />
              ) : (
                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-4">

                <h2 className="text-xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm">
                  {project.desc}
                </p>

                <div className="flex gap-3 flex-wrap">

                  <button
                    onClick={() => openLink(project.url)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition"
                  >
                    Live Demo
                  </button>

                  <button
                    onClick={() => openLink(project.github)}
                    className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white font-semibold hover:bg-gray-700 transition"
                  >
                    GitHub
                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* LinkedIn */}
      <div className="text-center mt-20">

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/harsh-khare-1a30412a5",
              "_blank"
            )
          }
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold shadow-lg"
        >
          Visit My LinkedIn
        </motion.button>

      </div>

    </div>
  );
}
