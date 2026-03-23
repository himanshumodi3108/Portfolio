// import React, { useEffect, useRef } from "react";
// import "./projects.css";

// export const projects = [
//     {
//       id: 1,
//       name: "CreatiSketch",
//       description: "A collaborative online drawing tool that enables real-time multi-user drawing sessions with advanced canvas features.",
//       tech: "Next.js, Node.js, Tailwind CSS",
//       github: "https://github.com/himanshumodi3108/CreatiSketch",
//       demo: "https://creati-sketch.vercel.app/",
//     },
//     {
//       id: 2,
//       name: "ProctorAI",
//       description: "Adaptive Proctoring for Seamless Assessments - An AI-powered online exam proctoring system with facial recognition and behavior analysis.",
//       tech: "ReactJS, NodeJS, MongoDB, Flask, Tensorflow",
//       github: "https://github.com/himanshumodi3108/ProctorAI",
//       demo: null,
//     },
//     {
//       id: 3,
//       name: "SocialSphere",
//       description: "A full-featured social media web application with user authentication, posts, comments, likes, and real-time updates.",
//       tech: "MERN Stack, Rest-API",
//       github: "https://github.com/himanshumodi3108/Social-Sphere",
//       demo: null,
//     },
//     {
//       id: 4,
//       name: "Bookish Bliss",
//       description: "An online book store with user authentication, shopping cart, payment integration, and order management system.",
//       tech: "MERN Stack",
//       github: "https://github.com/himanshumodi3108/BookishBliss",
//       demo: "https://bookish-bliss-six.vercel.app/",
//     },
//     {
//       id: 5,
//       name: "HR Analytics Dashboard",
//       description: "A data-driven HR insights platform providing comprehensive analytics on employee performance, retention, and organizational metrics.",
//       tech: "Power BI, Power Query, SQL",
//       github: "https://github.com/himanshumodi3108/Employee-Dashboard",
//       demo: null,
//     },
//     {
//       id: 6,
//       name: "Myntra Clone",
//       description: "A frontend clone of Myntra e-commerce application with product listings, filters, cart functionality, and responsive design.",
//       tech: "HTML, CSS, JavaScript",
//       github: "https://github.com/himanshumodi3108/Myntra-clone-website",
//       demo: null,
//     },
//     {
//       id: 7,
//       name: "TextCryptor",
//       description: "A Python-based text encoding tool with multiple encryption algorithms including Base64, MD5, SHA-256, and AES for secure text transformation.",
//       tech: "Python, Tkinter, Base64, MD5, SHA-256, AES",
//       github: "https://github.com/himanshumodi3108/TextCryptor",
//       demo: null,
//     },
//     {
//       id: 8,
//       name: "IntelliShieldX",
//       description: "A hybrid AI-powered security platform that scans files, URLs, repositories, and codebases to detect vulnerabilities using static analysis, threat intelligence, and LLM-based reasoning, with auto-remediation and downloadable security reports.",
//       tech: "React TypeScript, Node.js, Express.js, Python, RestAPI, LLMs",
//       github: "https://github.com/himanshumodi3108/IntelliShieldX-AI",
//       demo: "https://intelli-shield-x-ai.vercel.app/",
//     }

// ];

// export default function Projects() {
//   const projectRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     // Copy refs to a variable to use in cleanup
//     const currentRefs = projectRefs.current;

//     currentRefs.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       currentRefs.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div className="d-flex flex-column">
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             ref={(el) => (projectRefs.current[index] = el)}
//             className="education-one my-4 project-card fade-in"
//           >
//             <div className="d-flex flex-column new-one">
//               <span className="project-name">
//                 {project.name}
//                 <span className="project-subtext">
//                   {project.description}
//                 </span>
//               </span>
//               <span className="tech-used">
//                 Tech Used: {project.tech}
//               </span>
//             </div>
//             <div className="project-links d-flex flex-row gap-2">
//               {project.demo && (
//                 <a
//                   className="demo-link d-flex align-items-center justify-content-center"
//                   href={project.demo}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={`View live demo of ${project.name}`}
//                 >
//                   <i className="fas fa-external-link-alt me-2"></i>
//                   Live Demo
//                 </a>
//               )}
//               <a
//                 className="repository-link d-flex align-items-center justify-content-center"
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label={`View ${project.name} on GitHub`}
//               >
//                 <i className="fab fa-github me-2"></i>
//                 GitHub
//               </a>
//             </div>
//           </div>
//         ))}

//       </div>
//     </>
//   );
// }


import React, { useEffect, useRef } from "react";
import "./projects.css";

export const projects = [
    // ── CYBERSECURITY PROJECTS ──────────────────────────────────────
    {
      id: 101,
      name: "Ursnif Malware — Network Forensics Investigation",
      description: "Investigated a real Ursnif/Gozi banking trojan PCAP. Reconstructed the full 6-stage infection chain: macro execution → disguised payload delivery (.avi DLLs) → C2 beaconing via TLS. Extracted 10 IOCs and wrote 5 Splunk SPL detection rules mapped to MITRE ATT&CK.",
      tech: "Wireshark, Splunk SPL, MITRE ATT&CK, VirusTotal",
      github: "https://github.com/himanshumodi3108/cybersec-portfolio/tree/main/01-network-forensics",
      demo: null,
      category: "cybersec",
      impact: "Identified C2 infrastructure, blocked 4 attacker IPs, wrote 5 production-ready Splunk detection rules.",
    },
    {
      id: 102,
      name: "Trickbot Infostealer — Live Credential Theft Analysis",
      description: "Analyzed a Trickbot infostealer PCAP and caught live credential exfiltration in progress. Identified 5 compromised accounts (Google, Facebook, Yahoo) in plaintext HTTP POST body. Detected port 447 C2 evasion, fake IE7 User-Agent, and bot ID fingerprinting. Full exfiltration confirmed in 96 seconds — 2,342 bytes across 5 POST requests.",
      tech: "Wireshark, Splunk SPL, MITRE ATT&CK, VirusTotal",
      github: "https://github.com/himanshumodi3108/cybersec-portfolio/tree/main/02-network-forensics-trickbot",
      demo: null,
      category: "cybersec",
      impact: "Detected live credential theft, mapped 9 MITRE ATT&CK TTPs, wrote zero-false-positive detection rule for IE7/Win10 User-Agent anomaly.",
    },
    // ── DEVELOPMENT PROJECTS ─────────────────────────────────────────
    {
      id: 8,
      name: "IntelliShieldX",
      description: "A hybrid AI-powered security platform that scans files, URLs, repositories, and codebases to detect vulnerabilities using static analysis, threat intelligence, and LLM-based reasoning, with auto-remediation and downloadable security reports.",
      tech: "React TypeScript, Node.js, Express.js, Python, RestAPI, LLMs",
      github: "https://github.com/himanshumodi3108/IntelliShieldX-AI",
      demo: "https://intelli-shield-x-ai.vercel.app/",
      category: "dev",
    },
    {
      id: 1,
      name: "CreatiSketch",
      description: "A collaborative online drawing tool that enables real-time multi-user drawing sessions with advanced canvas features.",
      tech: "Next.js, Node.js, Tailwind CSS",
      github: "https://github.com/himanshumodi3108/CreatiSketch",
      demo: "https://creati-sketch.vercel.app/",
      category: "dev",
    },
    {
      id: 2,
      name: "ProctorAI",
      description: "Adaptive Proctoring for Seamless Assessments — an AI-powered online exam proctoring system with facial recognition and behavior analysis.",
      tech: "ReactJS, NodeJS, MongoDB, Flask, Tensorflow",
      github: "https://github.com/himanshumodi3108/ProctorAI",
      demo: null,
      category: "dev",
    },
    {
      id: 3,
      name: "SocialSphere",
      description: "A full-featured social media web application with user authentication, posts, comments, likes, and real-time updates. Implemented JWT authentication and XSS input sanitization.",
      tech: "MERN Stack, REST API",
      github: "https://github.com/himanshumodi3108/Social-Sphere",
      demo: null,
      category: "dev",
    },
    {
      id: 4,
      name: "Bookish Bliss",
      description: "An online book store with user authentication, shopping cart, payment integration, and order management system.",
      tech: "MERN Stack",
      github: "https://github.com/himanshumodi3108/BookishBliss",
      demo: "https://bookish-bliss-six.vercel.app/",
      category: "dev",
    },
    {
      id: 5,
      name: "HR Analytics Dashboard",
      description: "A data-driven HR insights platform providing comprehensive analytics on employee performance, retention, and organizational metrics.",
      tech: "Power BI, Power Query, SQL",
      github: "https://github.com/himanshumodi3108/Employee-Dashboard",
      demo: null,
      category: "dev",
    },
    {
      id: 7,
      name: "TextCryptor",
      description: "A Python-based text encoding tool with multiple encryption algorithms including Base64, MD5, SHA-256, and AES for secure text transformation.",
      tech: "Python, Tkinter, Base64, MD5, SHA-256, AES",
      github: "https://github.com/himanshumodi3108/TextCryptor",
      demo: null,
      category: "dev",
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

  const cybersecProjects = projects.filter(p => p.category === "cybersec");
  const devProjects = projects.filter(p => p.category === "dev");

  const renderProject = (project, index) => (
    <div
      key={project.id}
      ref={(el) => (projectRefs.current[index] = el)}
      className="education-one my-4 project-card fade-in"
      style={project.category === "cybersec" ? { borderLeft: "4px solid #02203c" } : {}}
    >
      <div className="d-flex flex-column new-one">
        <span className="project-name">
          {project.category === "cybersec" && (
            <span style={{ fontSize: "0.75rem", background: "#02203c", color: "#fff", padding: "2px 10px", borderRadius: "12px", marginRight: "8px", fontWeight: 600 }}>
              SOC / DFIR
            </span>
          )}
          {project.name}
          <span className="project-subtext">
            {project.description}
          </span>
          {project.impact && (
            <span className="project-subtext" style={{ marginTop: "6px", color: "#02203c", fontWeight: 600 }}>
              Impact: {project.impact}
            </span>
          )}
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
  );

  return (
    <>
      <div className="d-flex flex-column">
        <div style={{ marginBottom: "8px" }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#02203c" }}>
            Cybersecurity Investigations
          </span>
        </div>
        {cybersecProjects.map((project, index) => renderProject(project, index))}

        <div style={{ margin: "16px 0 8px", borderTop: "1px solid #e0e0e0", paddingTop: "16px" }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#555" }}>
            Development Projects
          </span>
        </div>
        {devProjects.map((project, index) => renderProject(project, cybersecProjects.length + index))}
      </div>
    </>
  );
}