import { useState } from "react";
import Skills from "../Skills";
import Education from "../Education";
import "./about.css";

function About() {
  const [showSkills, setShowSkills] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  return (
    <div>
      <h1 className="mt-20 text-blue-500 font-style: italic text-3xl font-extrabold">
        About me
      </h1>
      <div>
        <div className="mt-10 text-white font-style: italic text-3xl font-extrabold">
          My name is Omri Bakal , i am 29 years old , and i have experience
          building both Frontend and Backend application.
        </div>
        <div className="mt-20">
          <button
            className=" font-semibold option-button text-2xl"
            onClick={() => {
              setShowSkills(!showSkills);
              setShowEducation(false);
            }}
          >
            Skills
          </button>
          <span className="ml-20"></span>
          <button
            className="font-semibold option-button text-2xl"
            onClick={() => {
              setShowEducation(!showEducation);
              setShowSkills(false);
            }}
          >
            Education
          </button>
        </div>
      </div>
      {showSkills && <Skills />}
      {showEducation && <Education />}
    </div>
  );
}

export default About;
