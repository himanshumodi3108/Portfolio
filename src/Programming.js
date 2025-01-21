import React from "react";
import './programming.css';

export default function Programming() {
    const value = [
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
    return ( 
    <>
    <div>
        <div className="row">
            {value.map((value,index)=>{
                return <>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                    <span className="language">{value.text} </span>
                    <div className="progress-some">
                        <div className="progress-new" style={{width: `${value.percentage}%`}}></div>
                    </div>
                </div>
                </>
            })}
        </div>
    </div>
    </>
    );
}