import React, { useEffect, useRef } from "react";
import "./projects.css";

export const projects = [
    {
      id: 1,
      name: "CreatiSketch",
      description: "A collaborative online drawing tool that enables real-time multi-user drawing sessions with advanced canvas features.",
      tech: "Next.js, Node.js, Tailwind CSS",
      github: "https://github.com/himanshumodi3108/CreatiSketch",
      demo: "https://creati-sketch.vercel.app/",
    },
    {
      id: 2,
      name: "ProctorAI",
      description: "Adaptive Proctoring for Seamless Assessments - An AI-powered online exam proctoring system with facial recognition and behavior analysis.",
      tech: "ReactJS, NodeJS, MongoDB, Flask, Tensorflow",
      github: "https://github.com/himanshumodi3108/ProctorAI",
      demo: null,
    },
    {
      id: 3,
      name: "SocialSphere",
      description: "A full-featured social media web application with user authentication, posts, comments, likes, and real-time updates.",
      tech: "MERN Stack, Rest-API",
      github: "https://github.com/himanshumodi3108/Social-Sphere",
      demo: null,
    },
    {
      id: 4,
      name: "Bookish Bliss",
      description: "An online book store with user authentication, shopping cart, payment integration, and order management system.",
      tech: "MERN Stack",
      github: "https://github.com/himanshumodi3108/BookishBliss",
      demo: "https://bookish-bliss-six.vercel.app/",
    },
    {
      id: 5,
      name: "HR Analytics Dashboard",
      description: "A data-driven HR insights platform providing comprehensive analytics on employee performance, retention, and organizational metrics.",
      tech: "Power BI, Power Query, SQL",
      github: "https://github.com/himanshumodi3108/Employee-Dashboard",
      demo: null,
    },
    {
      id: 6,
      name: "Myntra Clone",
      description: "A frontend clone of Myntra e-commerce application with product listings, filters, cart functionality, and responsive design.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/himanshumodi3108/Myntra-clone-website",
      demo: null,
    },
    {
      id: 7,
      name: "TextCryptor",
      description: "A Python-based text encoding tool with multiple encryption algorithms including Base64, MD5, SHA-256, and AES for secure text transformation.",
      tech: "Python, Tkinter, Base64, MD5, SHA-256, AES",
      github: "https://github.com/himanshumodi3108/TextCryptor",
      demo: null,
    },
];

export default function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Copy refs to a variable to use in cleanup
    const currentRefs = projectRefs.current;

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
      <div className="d-flex flex-column">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="education-one my-4 project-card fade-in"
          >
            <div className="d-flex flex-column new-one">
              <span className="project-name">
                {project.name}
                <span className="project-subtext">
                  {project.description}
                </span>
              </span>
              <span className="tech-used">
                Tech Used: {project.tech}
              </span>
            </div>
            <div className="project-links d-flex flex-row gap-2">
              {project.demo && (
                <a
                  className="demo-link d-flex align-items-center justify-content-center"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View live demo of ${project.name}`}
                >
                  <i className="fas fa-external-link-alt me-2"></i>
                  Live Demo
                </a>
              )}
              <a
                className="repository-link d-flex align-items-center justify-content-center"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} on GitHub`}
              >
                <i className="fab fa-github me-2"></i>
                GitHub
              </a>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}
