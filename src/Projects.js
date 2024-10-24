import React from "react";
import "./projects.css";
export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
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
            >
              GitHub Link
            </a>
          </div>
        </div>
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
            >
              GitHub Link
            </a>
          </div>
        </div>
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
            >
              GitHub Link
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="project-name">
              Employee-Dashboard{" "}
              <span className="project-subtext">
                Employee Performance Analysis Dashboard
              </span>
            </span>
            <span className="tech-used">Tech Used: Power BI, Power Query </span>
          </div>{" "}
          <div>
            <a
              className="repository-link d-flex flex-column"
              href="https://github.com/himanshumodi3108/Employee-Dashboard"
              target="_blank"
            >
              GitHub Link
            </a>
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
            <a className="repository-link d-flex flex-column py-1" href="https://github.com/himanshumodi3108/Myntra-clone-website" target="_blank">GitHub Link</a>
          </div>
        </div>*/}
      </div>
    </>
  );
}
