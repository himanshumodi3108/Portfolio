import React from "react";
import "./education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="institute-name">
              Vellore Institute of Technology, Vellore{" "}
            </span>
            <span className="institute-degree">
              B. Tech in Computer Science and Engineering with Specialization in
              Information Security | CGPA - 8.89{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2021-2025</span>
          </div>
        </div>
        <div className="education-two my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="institute-name">
              Sree Ayyappa Public School, Bokaro{" "}
            </span>
            <span className="institute-degree">
              Intermediate | Percentage - 91.8%{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2018-2020</span>
          </div>
        </div>
        <div className="education-three my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="institute-name">
              Meridian Academy, Koderma{" "}
            </span>
            <span className="institute-degree">
              Matriculation | Percentage - 88.8%{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2011-2018</span>
          </div>
        </div>
      </div>
    </>
  );
}
