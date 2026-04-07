
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // 🔥 Auto Slider
// function AutoSlider({ images }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl group">
//       <img
//         src={images[index]}
//         alt="project"
//         className="w-full h-full object-cover transition duration-700"
//       />

//       {/* 🔥 Hover Overlay */}
//       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
//         <button className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:scale-110 transition">
//           Live
//         </button>
//         <button className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:scale-110 transition">
//           Code
//         </button>
//       </div>
//     </div>
//   );
// }

// // 📦 PROJECT DATA
// const projects = [
//   {
//     title: "HDLX App",
//     desc: "Metal pickup booking app with pricing system.",
//     imgs: ["/assets/hdlx1.jpg", "/assets/hdlx2.jpg"],
//     live: "#",
//     github: "https://github.com/harsh81r/HDLX_Apk-file"
//   },
//   {
//     title: "Travelo App",
//     desc: "AI-based travel planning application.",
//     imgs: ["/assets/travelo1.jpg", "/assets/travelo2.jpg"],
//     live: "https://travelo-app-pi.vercel.app",
//     github: "https://github.com/harsh81r/travelo-app"
//   }
// ];

// export default function Projects() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black py-16 px-6">

//       {/* HEADING */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center text-5xl font-bold text-white mb-16"
//       >
//         🚀 My Projects
//       </motion.h1>

//       {/* PROJECT CARDS */}
//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 80 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
//           >
//             <AutoSlider images={p.imgs} />

//             <div className="p-5 space-y-4">
//               <h2 className="text-white text-xl font-bold">{p.title}</h2>
//               <p className="text-gray-400 text-sm">{p.desc}</p>

//               {/* BUTTONS */}
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => window.open(p.live, "_blank")}
//                   className="flex-1 px-4 py-2 bg-blue-500 rounded-lg text-white hover:scale-105 transition"
//                 >
//                   🚀 Live
//                 </button>

//                 <button
//                   onClick={() => window.open(p.github, "_blank")}
//                   className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white hover:scale-105 transition"
//                 >
//                   💻 Code
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}

//       </div>

//       {/* ================= CS FUNDAMENTALS ================= */}
//       <div className="mt-32 text-center">

//         <h2 className="text-4xl font-bold text-white mb-10">
//           💻 CS Fundamentals
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

//           {[
//             {
//               title: "DSA",
//               desc: "Strong problem solving using Data Structures & Algorithms."
//             },
//             {
//               title: "OOP",
//               desc: "Encapsulation, inheritance, polymorphism for clean code."
//             },
//             {
//               title: "DBMS",
//               desc: "SQL, MongoDB, Firebase with optimization knowledge."
//             },
//             {
//               title: "OS",
//               desc: "Process, memory, threading concepts."
//             },
//             {
//               title: "Networks",
//               desc: "HTTP, REST APIs, TCP/IP understanding."
//             },
//             {
//               title: "System Design",
//               desc: "Basic scalable architecture and API design."
//             }
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-slate-800/60 p-6 rounded-xl border border-white/10 text-left"
//             >
//               <h3 className="text-white font-bold mb-2">{item.title}</h3>
//               <p className="text-gray-400 text-sm">{item.desc}</p>
//             </motion.div>
//           ))}

//         </div>
//       </div>

//       {/* ================= PROJECT DETAILS ================= */}
//       <div className="mt-32 space-y-24">

//         {/* TRAVELO */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto"
//         >
//           <h2 className="text-3xl text-blue-400 font-bold mb-4">
//             🌍 Travelo – AI Travel Planner
//           </h2>

//           <p className="text-gray-300 mb-6">
//             AI-powered travel app that creates personalized itineraries.
//           </p>

//           <div className="grid md:grid-cols-2 gap-6">
//             {["Problem","Solution","Tech","Impact"].map((x,i)=>(
//               <div key={i} className="bg-slate-900/60 p-6 rounded-xl border border-white/10">
//                 <h3 className="text-white font-semibold">{x}</h3>
//                 <p className="text-gray-400 text-sm mt-2">
//                   Explanation about {x}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* HDLX */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto"
//         >
//           <h2 className="text-3xl text-green-400 font-bold mb-4">
//             🚚 HDLX – Pickup App
//           </h2>

//           <p className="text-gray-300 mb-6">
//             Booking system for metal pickup and logistics.
//           </p>

//           <div className="grid md:grid-cols-2 gap-6">
//             {["Problem","Solution","Tech","Impact"].map((x,i)=>(
//               <div key={i} className="bg-slate-900/60 p-6 rounded-xl border border-white/10">
//                 <h3 className="text-white font-semibold">{x}</h3>
//                 <p className="text-gray-400 text-sm mt-2">
//                   Explanation about {x}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//       </div>

//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // 🔥 Auto Slider
// function AutoSlider({ images }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl group">
//       <img
//         src={images[index]}
//         alt="project"
//         className="w-full h-full object-cover transition duration-700"
//       />

//       {/* Hover Overlay */}
//       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
//         <button
//           onClick={() => window.open(images.live, "_blank")}
//           className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:scale-110 transition"
//         >
//           Live
//         </button>
//         <button
//           onClick={() => window.open(images.github, "_blank")}
//           className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:scale-110 transition"
//         >
//           Code
//         </button>
//       </div>
//     </div>
//   );
// }

// // 📦 UPDATED PROJECT DATA
// const projects = [
//   {
//     title: "HDLx APP/APK",
//     desc: "Metal pickup app with booking and pricing system.",
//     imgs: [
//       "/assets/Screenshot_2026-04-02-16-04-51-32_99c04817c0de5652397fc8b56c3b3817.jpg",
//       "/assets/Screenshot_2026-04-02-16-26-44-68_1c337646f29875672b5a61192b9010f9.jpg",
//       "/assets/Screenshot_2026-04-02-16-29-31-29_1c337646f29875672b5a61192b9010f9.jpg",
//       "/assets/Screenshot_2026-04-02-16-30-39-81_1c337646f29875672b5a61192b9010f9.jpg"
//     ],
//     live: "https://github.com/harsh81r/HDLX_Apk-file",
//     github: "https://github.com/harsh81r/HDLX_Apk-file"
//   },
//   {
//     title: "Travelo App",
//     desc: "Discover your next adventure with AI travel planning.",
//     imgs: [
//       "/assets/travelo1.jpg",
//       "/assets/travelo2.jpg",
//       "/assets/travelo3.jpg",
//       "/assets/travelo4.jpg"
//     ],
//     live: "https://travelo-app-pi.vercel.app",
//     github: "https://github.com/harsh81r/travelo-app"
//   }
// ];

// export default function Projects() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black py-16 px-6">

//       {/* HEADING */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center text-5xl font-bold text-white mb-16"
//       >
//         🚀 My Projects
//       </motion.h1>

//       {/* PROJECT CARDS */}
//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 80 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
//           >
//             <AutoSlider images={p.imgs} />

//             <div className="p-5 space-y-4">
//               <h2 className="text-white text-xl font-bold">{p.title}</h2>
//               <p className="text-gray-400 text-sm">{p.desc}</p>

//               {/* BUTTONS */}
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => window.open(p.live, "_blank")}
//                   className="flex-1 px-4 py-2 bg-blue-500 rounded-lg text-white hover:scale-105 transition"
//                 >
//                   🚀 Live
//                 </button>

//                 <button
//                   onClick={() => window.open(p.github, "_blank")}
//                   className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white hover:scale-105 transition"
//                 >
//                   💻 Code
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}

//       </div>

//       {/* ================= CS FUNDAMENTALS ================= */}
//       <div className="mt-32 text-center">

//         <h2 className="text-4xl font-bold text-white mb-10">
//           💻 CS Fundamentals
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

//           {[
//             { title: "DSA", desc: "Strong problem solving using Data Structures & Algorithms." },
//             { title: "OOP", desc: "Encapsulation, inheritance, polymorphism for clean code." },
//             { title: "DBMS", desc: "SQL, MongoDB, Firebase with optimization knowledge." },
//             { title: "OS", desc: "Process, memory, threading concepts." },
//             { title: "Networks", desc: "HTTP, REST APIs, TCP/IP understanding." },
//             { title: "System Design", desc: "Basic scalable architecture and API design." }
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-slate-800/60 p-6 rounded-xl border border-white/10 text-left"
//             >
//               <h3 className="text-white font-bold mb-2">{item.title}</h3>
//               <p className="text-gray-400 text-sm">{item.desc}</p>
//             </motion.div>
//           ))}

//         </div>
//       </div>

//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 🔥 Auto Slider
function AutoSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
      <img
        src={images[index]}
        alt="project"
        className="w-full h-full object-cover transition duration-700"
      />
    </div>
  );
}

// 📦 PROJECT DATA
const projects = [
  {
    title: "HDLx APP/APK",
    desc: "Metal pickup app with booking and pricing system.",
    imgs: [
      "/assets/Screenshot_2026-04-02-16-04-51-32_99c04817c0de5652397fc8b56c3b3817.jpg",
      "/assets/Screenshot_2026-04-02-16-26-44-68_1c337646f29875672b5a61192b9010f9.jpg",
      "/assets/Screenshot_2026-04-02-16-29-31-29_1c337646f29875672b5a61192b9010f9.jpg",
      "/assets/Screenshot_2026-04-02-16-30-39-81_1c337646f29875672b5a61192b9010f9.jpg"
    ],
    live: "https://github.com/harsh81r/HDLX_Apk-file",
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
    live: "https://travelo-app-pi.vercel.app",
    github: "https://github.com/harsh81r/travelo-app"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black py-16 px-6">

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-bold text-white mb-16"
      >
        🚀 My Projects
      </motion.h1>

      {/* PROJECT CARDS */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
          >
            <AutoSlider images={p.imgs} />

            <div className="p-5 space-y-4">
              <h2 className="text-white text-xl font-bold">{p.title}</h2>
              <p className="text-gray-400 text-sm">{p.desc}</p>

              <div className="flex gap-3">
                <button
                  onClick={() => window.open(p.live, "_blank")}
                  className="flex-1 px-4 py-2 bg-blue-500 rounded-lg text-white hover:scale-105 transition"
                >
                  🚀 Live
                </button>

                <button
                  onClick={() => window.open(p.github, "_blank")}
                  className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white hover:scale-105 transition"
                >
                  💻 Code
                </button>
              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* ================= PROJECT DETAILS ================= */}
      <div className="mt-32 space-y-32">

        {/* TRAVELO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6"
        >
          <h2 className="text-3xl text-blue-400 font-bold">
            🌍 Travelo – AI Travel Planner
          </h2>

          <p className="text-gray-300">
            Full-stack AI-powered travel planner that generates personalized itineraries.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Problem", "Planning trips manually is time-consuming."],
              ["Solution", "Built AI-based itinerary generator."],
              ["Tech", "React, Firebase, Google Auth, Gemini AI"],
              ["Impact", "Faster and smarter travel planning"]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-slate-900/60 p-6 rounded-xl border border-white/10">
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* HDLX */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6"
        >
          <h2 className="text-3xl text-green-400 font-bold">
            🚚 HDLX – Pickup App
          </h2>

          <p className="text-gray-300">
            Mobile app for managing metal pickup bookings and pricing.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Problem", "Manual metal collection process inefficient."],
              ["Solution", "Developed booking and pricing system."],
              ["Tech", "React Native, Firebase"],
              ["Impact", "Improved logistics and user experience"]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-slate-900/60 p-6 rounded-xl border border-white/10">
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </div>
  );
}