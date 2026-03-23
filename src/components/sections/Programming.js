// import React, { useEffect, useRef, useState } from "react";
// import './programming.css';

// export const programmingSkills = [
//      {
//         text: "Java",
//         percentage: 95
//     },
//     {
//         text: "Python",
//         percentage: 75
//     },
//     {
//         text: "Javascript",
//         percentage: 70
//     },
//     {
//         text: "C",
//         percentage: 80
//     },
//     {
//         text: "Next JS",
//         percentage: 60
//     },
//     {
//         text: "React JS",
//         percentage: 75
//     },
//     {
//         text: "HTML",
//         percentage: 90
//     },
//     {
//         text: "CSS",
//         percentage: 85
//     },
//     {
//         text: "Node JS",
//         percentage: 60
//     },
//     {
//         text: "Tailwind CSS",
//         percentage: 80
//     },
//     {
//         text: "SQL",
//         percentage: 90
//     },
//     {
//         text: "NoSQL",
//         percentage: 70
//     }
// ];

// export default function Programming() {
//     const [animatedSkills, setAnimatedSkills] = useState({});
//     const skillRefs = useRef([]);
//     const value = programmingSkills;

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         const index = parseInt(entry.target.dataset.index);
//                         setAnimatedSkills(prev => {
//                             if (!prev[index]) {
//                                 return { ...prev, [index]: true };
//                             }
//                             return prev;
//                         });
//                     }
//                 });
//             },
//             { threshold: 0.3 }
//         );

//         const currentRefs = skillRefs.current;
//         currentRefs.forEach((ref) => {
//             if (ref) observer.observe(ref);
//         });

//         return () => {
//             currentRefs.forEach((ref) => {
//                 if (ref) observer.unobserve(ref);
//             });
//         };
//     }, []);

//     return ( 
//     <>
//     <div>
//         <div className="row">
//             {value.map((skill, index) => {
//                 const isAnimated = animatedSkills[index];
//                 return (
//                     <div key={index} className="col-lg-6 col-md-6 col-sm-12 my-2">
//                         <div className="skill-item" ref={(el) => (skillRefs.current[index] = el)} data-index={index}>
//                             <span className="language">{skill.text} </span>
//                             <div className="progress-some">
//                                 <div 
//                                     className={`progress-new ${isAnimated ? 'animated' : ''}`}
//                                     style={{width: isAnimated ? `${skill.percentage}%` : '0%'}}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     </div>
//     </>
//     );
// }

import React, { useEffect, useRef, useState } from "react";
import './programming.css';

export const programmingSkills = [
    // ── CYBERSECURITY TOOLS ──────────────────────────
    {
        text: "Wireshark",
        percentage: 80,
        category: "cybersec",
    },
    {
        text: "Splunk SPL",
        percentage: 50,
        category: "cybersec",
    },
    {
        text: "MITRE ATT&CK",
        percentage: 70,
        category: "cybersec",
    },
    {
        text: "Volatility 3",
        percentage: 35,
        category: "cybersec",
    },
    {
        text: "Nmap",
        percentage: 65,
        category: "cybersec",
    },
    // ── PROGRAMMING LANGUAGES ────────────────────────
    {
        text: "Java",
        percentage: 95,
        category: "lang",
    },
    {
        text: "Python",
        percentage: 75,
        category: "lang",
    },
    {
        text: "Javascript",
        percentage: 70,
        category: "lang",
    },
    {
        text: "C",
        percentage: 80,
        category: "lang",
    },
    // ── WEB / FRAMEWORKS ─────────────────────────────
    {
        text: "React JS",
        percentage: 75,
        category: "web",
    },
    {
        text: "Next JS",
        percentage: 60,
        category: "web",
    },
    {
        text: "Node JS",
        percentage: 60,
        category: "web",
    },
    {
        text: "HTML",
        percentage: 90,
        category: "web",
    },
    {
        text: "CSS",
        percentage: 85,
        category: "web",
    },
    {
        text: "Tailwind CSS",
        percentage: 80,
        category: "web",
    },
    // ── DATA ─────────────────────────────────────────
    {
        text: "SQL",
        percentage: 90,
        category: "data",
    },
    {
        text: "NoSQL",
        percentage: 70,
        category: "data",
    },
];

const CATEGORY_LABELS = {
    cybersec: "Cybersecurity Tools",
    lang: "Programming Languages",
    web: "Web & Frameworks",
    data: "Data",
};

const CATEGORY_ORDER = ["cybersec", "lang", "web", "data"];

export default function Programming() {
    const [animatedSkills, setAnimatedSkills] = useState({});
    const skillRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setAnimatedSkills(prev => {
                            if (!prev[index]) {
                                return { ...prev, [index]: true };
                            }
                            return prev;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        const currentRefs = skillRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
        acc[cat] = programmingSkills.filter(s => s.category === cat);
        return acc;
    }, {});

    let globalIndex = 0;

    return (
        <div>
            {CATEGORY_ORDER.map(cat => (
                <div key={cat} style={{ marginBottom: "20px" }}>
                    <div style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: cat === "cybersec" ? "#02203c" : "#888",
                        marginBottom: "10px",
                        paddingBottom: "4px",
                        borderBottom: cat === "cybersec" ? "2px solid #02203c" : "1px solid #eee"
                    }}>
                        {CATEGORY_LABELS[cat]}
                    </div>
                    <div className="row">
                        {grouped[cat].map((skill) => {
                            const idx = globalIndex++;
                            const isAnimated = animatedSkills[idx];
                            return (
                                <div key={idx} className="col-lg-6 col-md-6 col-sm-12 my-2">
                                    <div className="skill-item"
                                        ref={(el) => (skillRefs.current[idx] = el)}
                                        data-index={idx}>
                                        <span className="language">{skill.text}</span>
                                        <div className="progress-some">
                                            <div
                                                className={`progress-new ${isAnimated ? 'animated' : ''}`}
                                                style={{ width: isAnimated ? `${skill.percentage}%` : '0%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}