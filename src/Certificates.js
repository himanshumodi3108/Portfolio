import React from "react";
import "./certificates.css";

export default function Certificates() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">
              Google Cybersecurity Certificate{" "}
            </span>
            <span className="issuing-authority">
              Google{" "}
            </span>
          </div>{" "}
          <div>
            <a className="credential-link d-flex flex-column" href="https://www.credly.com/badges/e326bb78-733d-4dc9-8fdc-ed5247a4c584/public_url" target="_blank">Credential Link</a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">
              AWS Certified Cloud Practitioner{" "}
            </span>
            <span className="issuing-authority">
              Amazon Web Services{" "}
            </span>
          </div>{" "}
          <div>
            <a className="credential-link d-flex flex-column" href="https://www.credly.com/badges/ec2cdab0-c51b-4af0-b1f4-8e5332734498/public_url" target="_blank">Credential Link</a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">
              MERN Full Stack Developer{" "}
            </span>
            <span className="issuing-authority">
              Ethnus{" "}
            </span>
          </div>{" "}
          <div>
            <a className="credential-link d-flex flex-column" href="https://drive.google.com/file/d/1HphBShVfntLaAQuVD5ydjINZYE8m96BV/view?usp=sharing" target="_blank">Credential Link</a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">
              Data Analysis with Python{" "}
            </span>
            <span className="issuing-authority">
              Coursera{" "}
            </span>
          </div>{" "}
          <div>
            <a className="credential-link d-flex flex-column" href="https://www.credly.com/badges/4e006692-02b7-400e-a893-39eaa011d884/public_url" target="_blank">Credential Link</a>
          </div>
        </div>
      </div>
    </>
  );
}
