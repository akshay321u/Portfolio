import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
        <p className="text-gray-500 mt-2">My technical level</p>
      </div>

      <div className=" flex flex-col items-center justify-center w-full " style={{ color: "black" }} >


        <div className="bg-blue shadow-md rounded-2xl p-8 border">
          <h3 className="text-center text-xl font-semibold mb-8" style={{ color: "black" }}>
            Frontend Developer
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml=2" style={{ marginLeft: "80px", justifyContent: "center", alignItems: "center" }}>


            <div className="flex items-start space-x-3" style={{ color: "black", marginRight: "90px" }}>
              <FaCheckCircle className="text-blue-500 " />
              <div>
                <h4 style={{ color: "black" }}>HTML</h4>
                <p className="text-gray-500 text-sm">Advanced</p>
              </div>
            </div>


            <div className="flex items-start space-x-3" style={{ color: "black" }}>
              <FaCheckCircle className="text-blue-500 mt-1" />
              <div>
                <h4 >Bootstrap</h4>
                <p className="text-gray-500 text-sm">Advanced</p>
              </div>
            </div>


            <div className="flex items-start space-x-3" style={{ color: "black" }}>
              <FaCheckCircle className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-medium" >CSS</h4>
                <p className="text-gray-500 text-sm">Advanced</p>
              </div>
            </div>

            <div className="flex items-start space-x-3" style={{ color: "black" }}>
              <FaCheckCircle className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-medium">Git</h4>
                <p className="text-gray-500 text-sm">Intermediate</p>
              </div>
            </div>


            <div className="flex items-start space-x-3" style={{ color: "black" }}>
              <FaCheckCircle className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-medium">JavaScript</h4>
                <p className="text-gray-500 text-sm">Intermediate</p>
              </div>
            </div>


            <div className="flex items-start space-x-3" style={{ color: "black" }}>
              <FaCheckCircle className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-medium">React</h4>
                <p className="text-gray-500 text-sm">Intermediate</p>
              </div>
            </div>
          </div>
        </div>







      </div>
    </section>
  );
}