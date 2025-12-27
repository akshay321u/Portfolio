import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Starbucks",
    category: "Web",
    img: "/starbucks.png",
    code: "https://github.com/akshay321u/html101/blob/main/work3.html",
    demo: "https://akshay321u.github.io/starbucks/",
  },
  {
    id: 2,
    title: "Art Gallery",
    category: "Web",
    img: "/art.jpg",
    code: "https://github.com/akshay321u/html101/blob/main/work1.html",
    demo: "https://akshay321u.github.io/Art/",
  },
  {
    id: 3,
    title: "Double C&B",
    category: "Web",
    img: "/cb.jpg",
    code: "https://github.com/akshay321u/html101/blob/main/work2.html",
  },
  {
    id: 4,
    title: "Plant UI",
    category: "Web",
    img: "/plant2.png",
    code: "https://github.com/akshay321u/html101/blob/main/assign3.html",
    demo: "https://akshay321u.github.io/plant/",
  },
  {
    id: 5,
    title: "Todo App",
    category: "App",
    img: "/todo.png",
    code: "https://github.com/akshay321u/html101/blob/main/js/wrk1.html",
    demo: "https://akshay321u.github.io/todo-list/",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="py-16 bg-white text-black">
     
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Most recent works
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-4 mb-10 px-4">
        {["All", "Web", "App"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition
              ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

     
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-md p-4 sm:p-5 border"
          >
        
            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-44 sm:h-48 object-cover"
            />

           
            <h2 className="text-lg sm:text-xl font-semibold text-center sm:text-left mb-3">
              {project.title}
            </h2>

            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-sm"
              >
                Code <FaArrowRight />
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition text-sm"
                >
                  Demo <FaArrowRight />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
