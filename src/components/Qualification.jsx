import React, { useState } from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="qualification section" id="qualification" style={{ backgroundColor: "white", color: "black" }}>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>


      <div className="qualification__tabs">
        <div
          className={
            activeTab === "education"
              ? "qualification_button qualification_active button--flex"
              : "qualification__button button--flex"
          }
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap className="qualification__icon" />
          Education
        </div>


      </div>


      <div className="qualification__sections">


        <div
          className={
            activeTab === "education"
              ? "qualification_content qualification_content-active"
              : "qualification__content"
          }
        >
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
                BCA - Bachelor Computer Applications
              </h3>
              <span className="qualification__subtitle">
                Kannur University
              </span>
              <div className="qualification__calendar">
                <FaCalendarAlt /> Jun 2022 - Mar 2025
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
                JAVA FULL STACK 
              </h3>
              <span className="qualification__subtitle">
                B-LEARN ACADEMY
              </span>
              <div className="qualification__calendar">
                <FaCalendarAlt /> May 2025 - Nov 2025
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Qualification;