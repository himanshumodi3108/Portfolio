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
            <span className="issuing-authority">Coursera </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://www.credly.com/badges/e326bb78-733d-4dc9-8fdc-ed5247a4c584/public_url"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">
              AWS Certified Cloud Practitioner{" "}
            </span>
            <span className="issuing-authority">Amazon Web Services </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://www.credly.com/badges/ec2cdab0-c51b-4af0-b1f4-8e5332734498/public_url"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">MERN Full Stack Developer </span>
            <span className="issuing-authority">Ethnus Codemithra </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://drive.google.com/file/d/1HphBShVfntLaAQuVD5ydjINZYE8m96BV/view?usp=sharing"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">Google Data Analytics Certificate </span>
            <span className="issuing-authority">Coursera </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://www.credly.com/badges/e7403a8e-d9a1-4020-a0bd-b23afc942d92/public_url"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
