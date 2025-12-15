import React from "react";



import { motion } from "framer-motion";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const sendMessage = (e) => {
    e.preventDefault();

    const message = document.getElementById("messageInput").value;

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        message: message,
      },
      "YOUR_PUBLIC_KEY"
    )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message");
      });
  };
  return (
    <div className="w-full" style={{ backgroundColor: "white", color: 'black' }}>


      <div className=" py-20 text-center text-white bg-blue-600">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Get In Touch
        </motion.h1>


      </div>


      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center justify-center w-full gap-16" >


        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">Connect Me</h2>

          <div className="space-y-6  items-center justify-center" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>


            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-6 shadow-sm flex flex-col items-center text-center" style={{ width: "500px" }}
            >
              <Mail className="text-blue-600 w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600 mt-2">akshaybabu585@gmail.com</p>

              <a
                href="mailto:akshaybabu585@gmail.com"
                className="mt-4 inline-flex items-center text-blue-600 hover:underline"
              >
                Write me →
              </a>
            </motion.div>


            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
            >
              <Phone className="text-green-600 w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg">Let chat</h3>
              <p className="text-gray-600 mt-2">+91 8590175649</p>

              <a
                href="https://wa.me/8590175649"
                target="_blank"
                className="mt-4 inline-flex items-center text-green-600 hover:underline"
              >
                Write me →
              </a>
            </motion.div>


            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
            >
              <MapPin className="text-red-600 w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-600 mt-2">Kerala, India</p>


            </motion.div>

          </div>
        </div>
     
        {/* <div>
          <h2 className="text-2xl font-semibold text-center mb-6">Write me you project</h2>

          <form className="space-y-5">


            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <div>
              <label className="font-medium">Mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <div>
              <label className="font-medium">Project</label>
              <textarea
                rows="6"
                placeholder="Write your project"
                className="w-full border rounded-lg p-3 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>


            <button
              onClick={() => {
                const msg = document.getElementById("messageInput").value || "";
                const url = https://api.whatsapp.com/send/?phone=918138860620&text=${encodeURIComponent(msg)}&app_absent=0;
                window.location.href = url;
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>





          </form>
        </div> */}

      </div>
    </div>
    
  );
  
}

