
// import React, { useRef, useState } from "react";
// // import React from "react";
// import emailjs from "@emailjs/browser";


// export default function Contact() {
//   const form = useRef();

//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_rjvhry5",   // replace     service_rjvhry5
//         "template_la4jg8c",  // replace     template_la4jg8c
//         form.current,
//         "sFGpawD6u6iTOQ2vV"    // replace    sFGpawD6u6iTOQ2vV
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully ✅");
//           form.current.reset();
//         },
//         (error) => {
//           setStatus("Failed to send ❌");
//           console.log(error);
//         }
//       );
//   };

//   return (
//     <div className="relative flex items-top justify-center min-h-[700px] bg-indigo-950 sm:items-center sm:pt-0">
//       <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
//         <div className="mt-8 overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2">
            
//             {/* LEFT SIDE */}
//             <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
//               <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold">
//                 Get in touch:
//               </h1>
//               <p className="text-lg text-gray-600 mt-2">
//                 Fill in the form to start a conversation
//               </p>

//               <div className="mt-6 text-gray-600">
//                 📍 Pune, India  
//                 <br />
//                 📞 +91 6261489167
//                 <br />
//                 ✉️ harsh7103763@gmail.com
//               </div>
//             </div>

//             {/* FORM */}
//             <form ref={form} onSubmit={sendEmail} className="p-6 flex flex-col justify-center">
              
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 className="mt-2 py-3 px-3 rounded-lg border border-gray-400"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 className="mt-2 py-3 px-3 rounded-lg border border-gray-400"
//               />

//               <input
//                 type="tel"
//                 name="tel"
//                 placeholder="Phone Number"
//                 className="mt-2 py-3 px-3 rounded-lg border border-gray-400"
//               />

//               {/* MESSAGE BOX (NEW) */}
//               <textarea
//                 name="message"
//                 placeholder="Your Message..."
//                 rows="4"
//                 required
//                 className="mt-2 py-3 px-3 rounded-lg border border-gray-400"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600"
//               >
//                 Send Message
//               </button>

//               {/* STATUS MESSAGE */}
//               {status && (
//                 <p className="mt-3 text-white font-semibold">{status}</p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useRef, useState, useEffect, } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {


//   console.log("service id:",process.env.REACT_APP_SERVICE_ID);
//  console.log("TEMPLATE_ID",REACT_APP_TEMPLATE_ID) 
//  console.log("PUBLIC_KEY",REACT_APP_PUBLIC_KEY) 

  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {

          setStatus("Message sent successfully ✅");
          toast.success('Message sent successfully ✅');
          
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send ❌");
          setLoading(false);
          console.log(error);
        }
      );
  };

  // Auto-hide message after 3 sec
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-indigo-950 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* LEFT SIDE */}
            <div className="p-6 bg-gray-100 rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold">
                Get in touch:
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="mt-6 text-gray-600 leading-7">
                📍 MP, India <br />
                📞 +91 6261489167 <br />
                ✉️ harsh7103763@gmail.com
              </div>
            </div>

            {/* FORM */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-6 flex flex-col justify-center bg-white rounded-lg shadow-md"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                name="tel"
                placeholder="Phone Number"
                className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:outline-none focus:border-orange-500"
              />

              {/* MESSAGE BOX */}
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="4"
                required
                className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:outline-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 disabled:opacity-50 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* STATUS MESSAGE */}
              {status && (
                <p className="mt-3 text-green-500 font-semibold text-center">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}