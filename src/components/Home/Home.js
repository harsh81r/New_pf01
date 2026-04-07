
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [dark, setDark] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const roles = ["Full Stack Developer", "React Native Developer", "MERN Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);

  const textArray = [
    "Building scalable web & mobile apps.",
    "React, Firebase, MongoDB expert.",
    "Mobile-first Android focus.",
    "User-centric UI/UX mindset.",
  ];

  // typing animation
  useEffect(() => {
    let i = 0;
    const current = roles[roleIndex];

    const typing = setInterval(() => {
      setTypedText(current.slice(0, i + 1));
      i++;
      if (i === current.length) clearInterval(typing);
    }, 80);

    const timeout = setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypedText("");
    }, 2500);

    return () => {
      clearInterval(typing);
      clearTimeout(timeout);
    };
  }, [roleIndex, roles]);

  // text reveal
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTextIndex((prev) =>
        prev < textArray.length - 1 ? prev + 1 : prev
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [textArray.length]);

  // cursor glow
  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={`${dark ? "bg-slate-900 text-white" : "bg-white text-black"} min-h-screen transition`}>

      {/* 🔥 NAVBAR LEFT (TOGGLE + LINKS) */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-6">

        {/* DARK MODE ICON */}
        <button
          onClick={() => setDark(!dark)}
          className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition shadow-lg"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* NAV LINKS */}
        {/* <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div> */}

      </div>

      {/* SPACE BACKGROUND */}
      <div className="fixed inset-0 -z-20 bg-black overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-star"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: 2 + Math.random() * 3 + "s",
            }}
          />
        ))}
      </div>

      {/* CURSOR GLOW */}
      <div
        className="pointer-events-none fixed w-72 h-72 rounded-full blur-3xl opacity-20 bg-blue-500"
        style={{ top: mouse.y - 150, left: mouse.x - 150 }}
      />

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="max-w-xl space-y-6">

          <h1 className="text-5xl font-bold">
            Hi 👋 <br /> I'm <span className="text-blue-400">Harsh Khare</span>
          </h1>

          <h2 className="text-xl text-blue-400 font-mono h-6">
            {typedText}|
          </h2>

          <div className="space-y-2 text-gray-400">
            {textArray.map((t, i) => (
              <p
                key={i}
                className={`transition ${i <= visibleTextIndex ? "opacity-100" : "opacity-0"}`}
              >
                {t}
              </p>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-blue-500 hover:scale-105 transition"
          >
            View Projects
          </Link>

        </div>

        <div className="animate-float">
          <img
            src="./myph.png"
            alt="Harsh"
            className="w-72 rounded-2xl shadow-2xl border-4 border-blue-400"
          />
        </div>

      </div>

      {/* SKILLS */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills I Know
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I specialize in modern web and mobile development, focusing on building scalable and efficient applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["React","React Native","JavaScript","Node.js","Express","MongoDB","Firebase","Tailwind CSS"].map((skill,i)=> (
            <div key={i} className="bg-slate-800/70 backdrop-blur-lg text-white rounded-xl p-6 font-semibold hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition shadow-xl border border-white/10">
              {skill}
            </div>
          ))}
        </div>



          <div className="py-20 px-6 bg-slate-950 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Tools I Work With
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Tools and platforms I use to build, deploy, and manage applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { name: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
            { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
            { name: "Cloudinary", img: "https://imgs.search.brave.com/4Sy5b5VP7fzTyanqhVjZfu0qUZTtIXFB2cwh4h0a3SY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2Nsb3Vk/aW5hcnktaWNvbjE3/MjA4MjA1ODMubG9n/b3dpay5jb20ud2Vi/cA" },
            { name: "Render", img: "https://imgs.search.brave.com/WWSWcOW-tHwdjwKajYWUk40BlCbYKfj_3B-emD-s7ls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzUzLzEvcmVuZGVy/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTUzMjIz/Mi5wbmc" },
            { name: "Formik", img: "https://repository-images.githubusercontent.com/94367677/fad6e800-35f1-11ea-89df-ed9620ed8aa7" }
          ].map((tool,i)=>(
            <div key={i} className="group bg-slate-800/70 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center shadow-xl hover:scale-110 transition border border-white/10">
              <img src={tool.img} alt={tool.name} className="w-12 h-12 mb-3 group-hover:scale-125 transition" />
              <span className="text-white font-semibold">{tool.name}</span>
            </div>
          ))}
        </div>
        
      </div>
      </div>

      {/* TOOLS */}
    

      {/* ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-20px)}
        }
        .animate-float{animation:float 4s ease-in-out infinite}

        @keyframes star {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        .animate-star { animation: star linear infinite; }
      `}</style>

    </div>
  );
}

export default Home;