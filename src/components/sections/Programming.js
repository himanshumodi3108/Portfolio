import React, { useEffect, useRef, useState } from "react";
import './programming.css';

export const programmingSkills = [
     {
        text: "Java",
        percentage: 95
    },
    {
        text: "Python",
        percentage: 75
    },
    {
        text: "Javascript",
        percentage: 70
    },
    {
        text: "C",
        percentage: 80
    },
    {
        text: "Next JS",
        percentage: 60
    },
    {
        text: "React JS",
        percentage: 75
    },
    {
        text: "HTML",
        percentage: 90
    },
    {
        text: "CSS",
        percentage: 85
    },
    {
        text: "Node JS",
        percentage: 60
    },
    {
        text: "Tailwind CSS",
        percentage: 80
    },
    {
        text: "SQL",
        percentage: 90
    },
    {
        text: "NoSQL",
        percentage: 70
    }
];

export default function Programming() {
    const [animatedSkills, setAnimatedSkills] = useState({});
    const skillRefs = useRef([]);
    const value = programmingSkills;

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

    return ( 
    <>
    <div>
        <div className="row">
            {value.map((skill, index) => {
                const isAnimated = animatedSkills[index];
                return (
                    <div key={index} className="col-lg-6 col-md-6 col-sm-12 my-2">
                        <div className="skill-item" ref={(el) => (skillRefs.current[index] = el)} data-index={index}>
                            <span className="language">{skill.text} </span>
                            <div className="progress-some">
                                <div 
                                    className={`progress-new ${isAnimated ? 'animated' : ''}`}
                                    style={{width: isAnimated ? `${skill.percentage}%` : '0%'}}
                                ></div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
    </>
    );
}