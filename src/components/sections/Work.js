// import React from "react";
// import './work.css';

// export const workExperience = [
//     {
//         id: 1,
//         company: "Oil and Natural Gas Cororation Limited",
//         position: "Summer Trainee",
//         period: "May 2024-June 2024",
//         type: "internship", // "internship" or "fulltime"
//         tech: "ReactJS, Tailwind CSS, Figma",
//         description: [
//             "Developed an efficient query redressal portal using React.js, Tailwind CSS, enhancing user experience and accessibility.",
//             "Collaborated with cross-functional teams to ensure seamless integration of frontend components with backend services.",
//             "Implemented responsive UI designs using Figma, ensuring a smooth and engaging user experience.",
//             "Assisted in building a secure and scalable intranet portal, following best practices for security and data protection."
//         ]
//     },
//     {
//         id: 2,
//         company: "Code Casa",
//         position: "Web Development and Designing Intern",
//         period: "Dec 2023",
//         type: "internship",
//         tech: "HTML, CSS, Bootstrap, JavaScript",
//         description: [
//             "Applied web development and design skills to create and enhance user-friendly websites during the internship."
//         ]
//     },
//     {
//         id: 3,
//         company: "Oasis Infobyte",
//         position: "Web Development and Designing Intern",
//         period: "Nov 2023",
//         type: "internship",
//         tech: "HTML, CSS, JavaScript, Bootstrap, React.Js",
//         description: [
//             "Applied web development and design skills to create and enhance user-friendly websites during the internship."
//         ]
//     }
// ];

// export default function Work() {
//     return (
//     <>
//         {workExperience.map((work) => (
//             <div key={work.id} className="work-inside-new mx-2 my-3">
//                 <div className="d-flex flex-column">
//                     <div className="d-flex flex-row justify-content-between">
//                         <span className="company-name">{work.company}</span>
//                         <span className="year-passedout">{work.period}</span>
//                     </div>
//                 </div>
//                 <div className="d-flex flex-column">
//                     <span className="position">{work.position}</span>
//                     <span className="description-position">
//                         <ul>
//                             <span><b>Tech used: {work.tech}</b></span>
//                             {work.description.map((desc, index) => (
//                                 <li key={index}>{desc}</li>
//                             ))}
//                         </ul>
//                     </span>
//                 </div>
//             </div>
//         ))}
//     </>
//     );
// }

import React from "react";
import './work.css';

export const workExperience = [
    {
        id: -1,
        company: "PricewaterhouseCoopers (PwC) India",
        position: "Associate — Salesforce QA Consultant",
        period: " July 2025 – Present",
        type: "fulltime",
        tech: "Salesforce, QBoson (Qualitia.ai), Apex, SOQL, UAT, Test Automation",
        description: [
            "Working as a Salesforce QA Consultant in the Technology Consulting practice.",
            "Performing functional testing, regression testing, and UAT on Salesforce implementations.",
            "Using QBoson (Qualitia.ai) for Salesforce test automation — certified QBoson Professional.",
            "Collaborating with development and business teams to ensure quality across SFDC deliverables.",
        ]
    },
    {
        id: 0,
        company: "Independent Security Researcher",
        position: "SOC Analyst Training — Self-directed",
        period: "Mar 2026 – Present",
        type: "training",
        tech: "Wireshark, Splunk, Volatility 3, Autopsy, MITRE ATT&CK, PEStudio, ANY.RUN",
        description: [
            "Conducting daily malware PCAP investigations on real threat datasets from malware-traffic-analysis.net.",
            "Investigated Ursnif/Gozi banking trojan — reconstructed 6-stage infection chain, extracted 10 IOCs, wrote 5 Splunk SPL detection rules.",
            "Investigated Trickbot infostealer — detected live credential exfiltration of 5 accounts in 96 seconds, identified port 447 C2 evasion and fake User-Agent signature.",
            "Building detection query library mapped to MITRE ATT&CK framework across T1027, T1041, T1071, T1555, T1571 and more.",
            "Certifications: Google Cybersecurity Professional · ISC2 Certified in Cybersecurity (CC) · BTL1 (in progress).",
        ]
    },
    {
        id: 1,
        company: "Oil and Natural Gas Corporation Limited",
        position: "Summer Trainee",
        period: "May 2024 – June 2024",
        type: "internship",
        tech: "ReactJS, Tailwind CSS, Figma",
        description: [
            "Developed an efficient query redressal portal using React.js and Tailwind CSS, enhancing user experience and accessibility.",
            "Collaborated with cross-functional teams to ensure seamless integration of frontend components with backend services.",
            "Implemented responsive UI designs using Figma, ensuring a smooth and engaging user experience.",
            "Assisted in building a secure and scalable intranet portal, following best practices for security and data protection.",
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
            "Applied web development and design skills to create and enhance user-friendly websites during the internship.",
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
            "Applied web development and design skills to create and enhance user-friendly websites during the internship.",
        ]
    }
];

export default function Work() {
    return (
    <>
        {workExperience.map((work) => (
            <div key={work.id} className="work-inside-new mx-2 my-3"
                style={work.type === "training" ? { borderLeft: "4px solid #02203c" } : {}}>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <span className="company-name">
                            {work.type === "training" && (
                                <span style={{ fontSize: "0.7rem", background: "#02203c", color: "#fff", padding: "2px 8px", borderRadius: "10px", marginRight: "8px", fontWeight: 600, verticalAlign: "middle" }}>
                                    ACTIVE
                                </span>
                            )}
                            {work.company}
                        </span>
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