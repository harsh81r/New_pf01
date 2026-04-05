// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Home() {

//   const [visibleTextIndex, setVisibleTextIndex] = useState(0);

//   const textArray = [
//       "React & React Native Developer with experience in building scalable web and mobile applications.",
//   "Experienced with React, React Native (Expo & CLI), Firebase, and MongoDB.",
//   "Currently focused on Android mobile development.",
//   "Building end-to-end flexible and user-centric applications.",
//   "Focused on modern UI design and efficient backend integration."
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisibleTextIndex((prev) => {
//         if (prev < textArray.length - 1) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           return prev;
//         }
//       });
//     }, 2000);

//     return () => clearInterval(interval);

//   }, [textArray.length]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">

//       {/* HERO SECTION */}

//       <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">

//         {/* LEFT TEXT */}

//         <div className="max-w-xl space-y-6">

//           <h1 className="text-5xl font-bold leading-tight">
//             Hi 👋 <br />
//             I'm <span className="text-blue-400">Harsh Khare</span>
//           </h1>

//           <h2 className="text-xl text-gray-300 font-semibold">
//             MERN Stack Developer
//           </h2>

//           <div className="text-gray-300 text-lg space-y-2">
//             {textArray.map((text, index) => (
//               <p
//                 key={index}
//                 className={`transition-opacity duration-500 ${
//                   index <= visibleTextIndex ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 {text}
//               </p>
//             ))}
//           </div>

//           {/* BUTTONS */}

//           <div className="flex gap-4 pt-4">

        

//             <Link
//               to="/about"
//               className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
//             >
//               View Projects
//             </Link>


        
//           </div>

//         </div>

//         {/* PROFILE IMAGE */}

//         <div className="mt-10 md:mt-0">

//           <img
//             src="./myph.png"
//             alt="Harsh"
//             className="w-72 h-45 rounded-2xl shadow-2xl border-4 border-blue-400"
//           />

//         </div>

//       </div>

//       {/* TECH STACK SECTION */}

//       <div className="bg-slate-950 py-20">

//         <h2 className="text-4xl font-bold text-center mb-16">
//           Tech Stack
//         </h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 px-6">

//           {[
//             { img: "./python.svg", name: "Python" },
//             { img: "./javascript.png", name: "JavaScript" },
//             { img: "./react.svg", name: "React" },
//             { img: "./nodejs.svg", name: "Node.js" },
//             { img: "./mongodb.svg", name: "MongoDB" },
//             { img: "./firebase.svg", name: "Firebase" },
//             { img: "./tailwind-css.svg", name: "Tailwind" },
//             { img: "./html.svg", name: "HTML" },
//             { img: "./Express-js.png", name: "Express" },
//             { img: "./c++ file.png", name: "C++" }
//           ].map((tech, index) => (

//             <div
//               key={index}
//               className=" text-black  bg-slate-100 rounded-xl p-6 flex flex-col  items-center hover:scale-110 hover:bg-slate-700 transition"
//             >
//               <img src={tech.img} className="w-14 h-14" alt={tech.name} />
//               <span className="mt-3 font-semibold">{tech.name}</span>
//             </div>

//           ))}

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Home;

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
    <div className={`${dark ? "bg-slate-900" : "bg-white text-black"} min-h-screen transition`}>

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

      {/* DARK MODE */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-6 right-6 px-4 py-2 rounded-xl bg-blue-500 text-white z-50"
      >
        {dark ? "Light" : "Dark"}
      </button>

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
              <p key={i} className={`transition ${i <= visibleTextIndex ? "opacity-100" : "opacity-0"}`}>
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
          <img src="./myph.png" alt="Harsh" className="w-72 rounded-2xl shadow-2xl border-4 border-blue-400" />
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
      </div>

      {/* TOOLS */}
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
            { name: "Cloudinary", img: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1664532791/logo/for_white_bg/cloudinary_cloud_glyph_blue.svg" },
            { name: "Render", img: "https://seeklogo.com/images/R/render-logo-4E8E3F1F9A-seeklogo.com.png" },
            { name: "Formik", img: "https://formik.org/img/formik-logo.svg" }
          ].map((tool,i)=>(
            <div key={i} className="group bg-slate-800/70 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center shadow-xl hover:scale-110 transition border border-white/10">
              <img src={tool.img} alt={tool.name} className="w-12 h-12 mb-3 group-hover:scale-125 transition" />
              <span className="text-white font-semibold">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* animations */}
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

