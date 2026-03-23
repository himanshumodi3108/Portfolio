// import React from "react";
// import "./certificates.css";

// export const certificates = [
//   {
//     id: 1,
//     name: "Google Cybersecurity Certificate",
//     authority: "Coursera",
//     link: "https://www.credly.com/badges/e326bb78-733d-4dc9-8fdc-ed5247a4c584/public_url"
//   },
//   {
//     id: 2,
//     name: "AWS Certified Cloud Practitioner",
//     authority: "Amazon Web Services",
//     link: "https://www.credly.com/badges/ec2cdab0-c51b-4af0-b1f4-8e5332734498/public_url"
//   },
//   {
//     id: 3,
//     name: "MERN Full Stack Developer",
//     authority: "Ethnus Codemithra",
//     link: "https://drive.google.com/file/d/1HphBShVfntLaAQuVD5ydjINZYE8m96BV/view?usp=sharing"
//   },
//   {
//     id: 4,
//     name: "Certified in Cybersecurity (CC)",
//     authority: "ISC2",
//     link: "https://drive.google.com/file/d/1htXfECDdiFel1OHx1Zan7lxur28ujIqC/view"
//   },
//   {
//     id: 5,
//     name: "Google Data Analytics Certificate",
//     authority: "Coursera",
//     link: "https://www.credly.com/badges/e7403a8e-d9a1-4020-a0bd-b23afc942d92/public_url"
//   }
// ];

// export default function Certificates() {
//   return (
//     <>
//       <div className="d-flex flex-column">
//         {certificates.map((cert) => (
//         <div key={cert.id} className="education-one my-4 justify-content-between d-flex flex-row">
//           <div className="d-flex flex-column new-one">
//             <span className="certificate-name">
//               {cert.name}{" "}
//             </span>
//             <span className="issuing-authority">{cert.authority} </span>
//           </div>{" "}
//           <div>
//             <a
//               className="credential-link d-flex align-items-center justify-content-center"
//               href={cert.link}
//               target="_blank"
//               rel="noreferrer"
//               aria-label={`View ${cert.name} credential`}
//             >
//               <i className="fas fa-certificate me-2"></i>
//               View Credential
//             </a>
//           </div>
//         </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React from "react";
import "./certificates.css";

export const certificates = [
  {
    id: 1,
    name: "Google Cybersecurity Professional Certificate",
    authority: "Google / Coursera",
    link: "https://www.credly.com/badges/e326bb78-733d-4dc9-8fdc-ed5247a4c584/public_url",
    category: "cybersec",
  },
  {
    id: 4,
    name: "Certified in Cybersecurity (CC)",
    authority: "ISC2",
    link: "https://drive.google.com/file/d/1htXfECDdiFel1OHx1Zan7lxur28ujIqC/view",
    category: "cybersec",
  },
  {
    id: 6,
    name: "Ethical Hacking Essentials (EHE)",
    authority: "EC-Council / Coursera",
    link: "#",
    category: "cybersec",
  },
  {
    id: 7,
    name: "BTL1 — Blue Team Level 1",
    authority: "Security Blue Team",
    link: "#",
    category: "cybersec",
    inProgress: true,
  },
  {
    id: 2,
    name: "AWS Certified Cloud Practitioner",
    authority: "Amazon Web Services",
    link: "https://www.credly.com/badges/ec2cdab0-c51b-4af0-b1f4-8e5332734498/public_url",
    category: "cloud",
  },
  {
    id: 3,
    name: "MERN Full Stack Developer",
    authority: "Ethnus Codemithra",
    link: "https://drive.google.com/file/d/1HphBShVfntLaAQuVD5ydjINZYE8m96BV/view?usp=sharing",
    category: "dev",
  },
  {
    id: 5,
    name: "Google Data Analytics Certificate",
    authority: "Coursera",
    link: "https://www.credly.com/badges/e7403a8e-d9a1-4020-a0bd-b23afc942d92/public_url",
    category: "data",
  },
];

export default function Certificates() {
  return (
    <>
      <div className="d-flex flex-column">
        {certificates.map((cert) => (
          <div key={cert.id} className="education-one my-4 justify-content-between d-flex flex-row"
            style={cert.category === "cybersec" ? { borderLeft: "4px solid #02203c" } : {}}>
            <div className="d-flex flex-column new-one">
              <span className="certificate-name">
                {cert.inProgress && (
                  <span style={{ fontSize: "0.7rem", background: "#f0a500", color: "#fff", padding: "2px 8px", borderRadius: "10px", marginRight: "8px", fontWeight: 600 }}>
                    IN PROGRESS
                  </span>
                )}
                {cert.name}
              </span>
              <span className="issuing-authority">{cert.authority}</span>
            </div>
            <div>
              {cert.inProgress ? (
                <span style={{ fontSize: "0.85rem", color: "#888", fontFamily: "Ubuntu", padding: "10px 0", display: "block" }}>
                  Attempting Week 7
                </span>
              ) : (
                <a
                  className="credential-link d-flex align-items-center justify-content-center"
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${cert.name} credential`}
                >
                  <i className="fas fa-certificate me-2"></i>
                  View Credential
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}