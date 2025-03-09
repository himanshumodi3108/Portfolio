import React from "react";
import "./projects.css";
export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        {/*Project 1*/}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              CreatiSketch{" "}
              <span className="project-subtext">
                A collaborative online drawing tool
              </span>
            </span>
            <span className="tech-used">
              Tech Used: Next.js, Node.js, Tailwind CSS{" "}
            </span>
          </div>{" "}
          <div>
            <a
              className="repository-link d-flex flex-column "
              href="https://github.com/himanshumodi3108/CreatiSketch"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/*Project 2*/}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              ProctorAI{" "}
              <span className="project-subtext">
              Adaptive Proctoring for Seamless Assessments
              </span>
            </span>
            <span className="tech-used">Tech Used: ReactJS, NodeJS, MongoDB, Flask, Tensorflow </span>
          </div>{" "}
          <div>
            <a
              className="repository-link d-flex flex-column"
              href="https://github.com/himanshumodi3108/ProctorAI"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/*Project 3*/}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              SocialSphere{" "}
              <span className="project-subtext">
                A social media web application
              </span>
            </span>
            <span className="tech-used">Tech Used: MERN Stack, Rest-API </span>
          </div>{" "}
          <div>
            <a
              className="repository-link d-flex flex-column"
              href="https://github.com/himanshumodi3108/Social-Sphere"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/*Project 4*/}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              Bookish Bliss{" "}
              <span className="project-subtext">An online book store</span>
            </span>
            <span className="tech-used">Tech Used: MERN Stack </span>
          </div>{" "}
          <div>
            <a
              className="repository-link d-flex flex-column"
              href="https://github.com/himanshumodi3108/BookishBliss"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/*Project 5*/}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              HR Analytics Dashboard{" "}
              <span className="project-subtext">
                A data-driven HR insights platform
              </span>
            </span>
            <span className="tech-used">Tech Used: Power BI, Power Query, SQL </span>
          </div>{" "}
          <div>
            <a
              className="repository-link d-flex flex-column"
              href="https://github.com/himanshumodi3108/Employee-Dashboard"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/*Project 6*/}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              Myntra Clone{" "}
              <span className="project-subtext">A frontend clone of Myntra e-commerce application</span>
            </span>
            <span className="tech-used">
              Tech used: HTML, CSS, JavaScript{" "}
            </span>
          </div>{" "}
          <div>
            <a className="repository-link d-flex flex-column py-1" href="https://github.com/himanshumodi3108/Myntra-clone-website" target="_blank" rel="noreferrer">GitHub Link</a>
          </div>
        </div>

        {/*Project 7*/}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              TextCryptor{" "}
              <span className="project-subtext">A Python-based text encoding tool</span>
            </span>
            <span className="tech-used">
              Tech used: Python, Tkinter, Base64, MD5, SHA-256, AES{" "}
            </span>
          </div>{" "}
          <div>
            <a className="repository-link d-flex flex-column py-1" href="https://github.com/himanshumodi3108/TextCryptor" target="_blank" rel="noreferrer">GitHub Link</a>
          </div>
        </div>
        {/*<div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              StackStories{" "}
              <span className="project-subtext">An online blog site</span>
            </span>
            <span className="tech-used">
              Tech Used: Next.js, MongoDb{" "}
            </span>
          </div>{" "}
          <div>
            <a className="repository-link d-flex flex-column" href="#" target="_blank">GitHub Link</a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              Google Meet Clone{" "}
              <span className="project-subtext">A frontend clone of Google Meet application</span>
            </span>
            <span className="tech-used">
              Tech used: Next.js, Tailwind CSS{" "}
            </span>
          </div>{" "}
          <div>
            <a className="repository-link d-flex flex-column py-1" href="#" target="_blank">GitHub Link</a>
          </div>
        </div>
        */}
      </div>
    </>
  );
}
