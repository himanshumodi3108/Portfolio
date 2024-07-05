import React from "react";
import './programming.css';

export default function Programming() {
    const value = [
     {
        text: "Java",
        percentage: 90
    },
    {
        text: "Python",
        percentage: 70
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
        percentage: 65
    },
    {
        text: "React JS",
        percentage: 80
    },
    {
        text: "HTML",
        percentage: 90
    },
    {
        text: "CSS",
        percentage: 80
    },
    {
        text: "Node JS",
        percentage: 60
    },
    {
        text: "Tailwind CSS",
        percentage: 80
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