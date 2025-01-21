import React from "react";
import './work.css';
export default function Work() {
    return (
    <>
    <div className="work-inside-new mx-2 my-3">
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
                <span className="company-name">Oil and Natural Gas Cororation Limited</span>
                <spa className="year-passedout">May 2024-June 2024</spa>
            </div>
        </div>
        <div className="d-flex flex-column">
            <span className="position">Summer Trainee</span>
            <span className="description-position">
                <ul>
                    <span><b>Tech used: ReactJS, Tailwind CSS, Figma</b></span>
                    <li>Developed an efficient query redressal portal using React.js, Tailwind CSS, enhancing user experience and accessibility.</li>
                    <li>Collaborated with cross-functional teams to ensure seamless integration of frontend components with backend services.</li>
                    <li>Implemented responsive UI designs using Figma, ensuring a smooth and engaging user experience.</li>
                    <li>Assisted in building a secure and scalable intranet portal, following best practices for security and data protection.</li>
                </ul>
            </span>
        </div>
    </div>
    <div className="work-inside-new mx-2 my-3">
        <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Code Casa</span>
            <spa className="year-passedout">Dec 2023</spa>
        </div>
        </div>
         <div className="d-flex flex-column">
            <span className="position">Web Development and Designing Intern</span>
            <span className="description-position">
                <ul>
                <span><b>Tech used: HTML, CSS, Bootstrap, JavaScript</b></span>
                    <li>Applied web development and design skills to create and enhance user-friendly websites during the internship.</li>
                </ul>
            </span>
         </div>
    </div>
    <div className="work-inside-new mx-2 my-3">
        <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Oasis Infobyte</span>
            <spa className="year-passedout">Nov 2023</spa>
        </div>
        </div>
         <div className="d-flex flex-column">
            <span className="position"> Web Development and Designing Intern</span>
            <span className="description-position">
                <ul>
                <span><b>Tech used: HTML, CSS, JavaScript, Bootstrap, React.Js</b></span>
                    <li>Applied web development and design skills to create and enhance user-friendly websites during the internship.</li>
                </ul>
            </span>
         </div>
    </div>
    </>
    );
}