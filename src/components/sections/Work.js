import React from "react";
import './work.css';

export const workExperience = [
    {
        id: 1,
        company: "Oil and Natural Gas Cororation Limited",
        position: "Summer Trainee",
        period: "May 2024-June 2024",
        type: "internship", // "internship" or "fulltime"
        tech: "ReactJS, Tailwind CSS, Figma",
        description: [
            "Developed an efficient query redressal portal using React.js, Tailwind CSS, enhancing user experience and accessibility.",
            "Collaborated with cross-functional teams to ensure seamless integration of frontend components with backend services.",
            "Implemented responsive UI designs using Figma, ensuring a smooth and engaging user experience.",
            "Assisted in building a secure and scalable intranet portal, following best practices for security and data protection."
        ]
    },
    {
        id: 2,
        company: "Code Casa",
        position: "Web Development and Designing Intern",
        period: "Dec 2023",
        type: "internship",
        tech: "HTML, CSS, Bootstrap, JavaScript",
        description: [
            "Applied web development and design skills to create and enhance user-friendly websites during the internship."
        ]
    },
    {
        id: 3,
        company: "Oasis Infobyte",
        position: "Web Development and Designing Intern",
        period: "Nov 2023",
        type: "internship",
        tech: "HTML, CSS, JavaScript, Bootstrap, React.Js",
        description: [
            "Applied web development and design skills to create and enhance user-friendly websites during the internship."
        ]
    }
];

export default function Work() {
    return (
    <>
        {workExperience.map((work) => (
            <div key={work.id} className="work-inside-new mx-2 my-3">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <span className="company-name">{work.company}</span>
                        <span className="year-passedout">{work.period}</span>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <span className="position">{work.position}</span>
                    <span className="description-position">
                        <ul>
                            <span><b>Tech used: {work.tech}</b></span>
                            {work.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </span>
                </div>
            </div>
        ))}
    </>
    );
}