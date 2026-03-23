
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [visibleTextIndex, setVisibleTextIndex] = useState(0);

  const textArray = [
      "React & React Native Developer with experience in building scalable web and mobile applications.",
  "Experienced with React, React Native (Expo & CLI), Firebase, and MongoDB.",
  "Currently focused on Android mobile development.",
  "Building end-to-end flexible and user-centric applications.",
  "Focused on modern UI design and efficient backend integration."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTextIndex((prev) => {
        if (prev < textArray.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">

      {/* HERO SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT TEXT */}

        <div className="max-w-xl space-y-6">

          <h1 className="text-5xl font-bold leading-tight">
            Hi 👋 <br />
            I'm <span className="text-blue-400">Harsh Khare</span>
          </h1>

          <h2 className="text-xl text-gray-300 font-semibold">
            MERN Stack Developer
          </h2>

          <div className="text-gray-300 text-lg space-y-2">
            {textArray.map((text, index) => (
              <p
                key={index}
                className={`transition-opacity duration-500 ${
                  index <= visibleTextIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          {/* BUTTONS */}

          <div className="flex gap-4 pt-4">

        

            <Link
              to="/about"
              className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              View Projects
            </Link>


        
          </div>

        </div>

        {/* PROFILE IMAGE */}

        <div className="mt-10 md:mt-0">

          <img
            src="./myph.png"
            alt="Harsh"
            className="w-72 h-45 rounded-2xl shadow-2xl border-4 border-blue-400"
          />

        </div>

      </div>

      {/* TECH STACK SECTION */}

      <div className="bg-slate-950 py-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Tech Stack
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 px-6">

          {[
            { img: "./python.svg", name: "Python" },
            { img: "./javascript.png", name: "JavaScript" },
            { img: "./react.svg", name: "React" },
            { img: "./nodejs.svg", name: "Node.js" },
            { img: "./mongodb.svg", name: "MongoDB" },
            { img: "./firebase.svg", name: "Firebase" },
            { img: "./tailwind-css.svg", name: "Tailwind" },
            { img: "./html.svg", name: "HTML" },
            { img: "./Express-js.png", name: "Express" },
            { img: "./c++ file.png", name: "C++" }
          ].map((tech, index) => (

            <div
              key={index}
              className=" text-black  bg-slate-100 rounded-xl p-6 flex flex-col  items-center hover:scale-110 hover:bg-slate-700 transition"
            >
              <img src={tech.img} className="w-14 h-14" alt={tech.name} />
              <span className="mt-3 font-semibold">{tech.name}</span>
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;