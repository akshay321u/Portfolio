import React, { useState } from "react";
import { motion, styleEffect } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "starbucks",
    category: "Web",
    img : "starbucks.png",
    code: "https://github.com/akshay321u/html101/blob/main/work3.html",
    demo:" https://akshay321u.github.io/starbucks/"
  },
  {
    id: 2,
    title: "Art gallery",
    category: "Web",
    img: "art.jpg",
    code: "https://github.com/akshay321u/html101/blob/main/work1.html",
    demo:"https://akshay321u.github.io/Art/"
  },
  {
    id: 3,
    title: "Double C&B",
    category: "web",
    img: "cb.jpg",
    code: "https://github.com/akshay321u/html101/blob/main/work2.html",
  },
   {
    id: 4,
    title: "Plant UI",
    category: "Web",
    img: "plant2.png",
    code: "https://github.com/akshay321u/html101/blob/main/assign3.html",
    demo:"https://akshay321u.github.io/plant/"
  },
  {
    id: 5,
    title: "Todo App",
    category: "App",
    img: "todo.png",
    code: "https://github.com/akshay321u/html101/blob/main/js/wrk1.html",
    demo:"https://akshay321u.github.io/todo-list/"
  },
  {
    id: 6,
    title: "Portfolio",
    category: "Web",
    img: "portfolio.png",
    code: "https://github.com/akshay321u/Portfolio",
    demo:"https://portfolio-akshay-babu-t-k.vercel.app/"
  },
   {
    id: 7,
    title: "Calculator",
    category: "App",
    img: "calc.png", 
    code: "https://github.com/akshay321u/html101/blob/main/js/calculator.html",
    demo:" https://akshay321u.github.io/calculator/"
  },
  {
    id:8,
    title:"Dance Studio",
    category:"web",
    img:"Dance.png",
    code:"https://github.com/akshay321u/Mini-Project",
    demo:"https://akshay321u.github.io/Mini-Project/"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="py-20 w-full" style={{ backgroundColor: 'white', color: "black" }}>


      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <p className="text-gray-500 mt-2">Most recent works</p>
      </div>


      <div className="flex justify-center gap-6 text-lg mb-10">
        {["All", "Web", "App"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`transition font-medium ${activeFilter === filter
              ? "text-blue-600"
              : "text-gray-600 hover:text-violet-400"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow p-5 cursor-pointer border"
          >

            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />


            <h2 className="text-xl font-semibold">{project.title}</h2>


          </motion.div>
        ))}
      </div>
    </div>
  );
}