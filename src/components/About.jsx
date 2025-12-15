import React from "react";
import { FaAward, FaFolderOpen, FaHeadset, FaDownload } from "react-icons/fa";

export default function About() {
    return (
        <section id="home" className="pt-24 pb-20 bg-white">
            

            <div className="text-center mb-16" >
                <h2 className="text-4xl font-bold text-gray-900 mt-0">About Me</h2>
                <p className="text-gray-500 mt-2">My Introduction</p>
            </div>

            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-5">

               
                <div className="flex justify-center">
                    <img
                        src="akshy.jpg" 
                        alt="profile"
                        className="w-[340px] h-[420px] object-cover  rounded-xl shadow-lg"
                    />
                </div>

               
                <div>
                   
                    <div className="flex justify-between mb-10">

                       
                        <div className="text-center">
                            <FaAward className="text-blue-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-bold text-xl" style={{ color: "black" }}>0</h3>
                            <p className="text-gray-500 text-sm leading-tight">
                                Years <br /> Experience
                            </p>
                        </div>


                        <div className="text-center">
                            <FaFolderOpen className="text-blue-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-bold text-xl" style={{ color: "black" }}>04 +</h3>
                            <p className="text-gray-500 text-sm leading-tight">
                                Completed <br /> Projects
                            </p>
                        </div>


                        <div className="text-center">
                            <FaHeadset className="text-blue-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-bold text-xl" style={{ color: "black" }}>24/7</h3>
                            <p className="text-gray-500 text-sm leading-tight">
                                Online <br /> Support
                            </p>
                        </div>
                    </div>


                    <p className="text-gray-600 leading-relaxed mb-10">
                        Hi, I’m Akshay, an aspiring Java Full Stack Developer currently building my expertise in full-stack development. I’ve already completed the front-end development track, gaining strong skills in React, JavaScript, HTML, CSS, and responsive UI design. As I continue progressing through the full-stack journey, I’m expanding my knowledge of Java, Spring Boot, REST APIs, MySQL, and backend architecture.
                        <br />
                        I’m passionate about creating clean, intuitive, and user-friendly web applications that balance both functionality and design. I enjoy turning ideas into real projects and constantly learning new tools, frameworks, and best practices that help me grow as a developer.
                        <br />
                        My goal is to become a well-rounded full stack engineer capable of building scalable applications from the ground up — from designing smooth user interfaces to implementing powerful backend systems.
                        <br />
                        When I’m not coding, I enjoy exploring new tech trends, working on personal projects, and improving my problem-solving skills.
                    </p>


                    <a
                        href="CV - AKSHAY BABU T K.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
                    >
                        <FaDownload className="mr-2" />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}