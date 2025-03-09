import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import Certificates from "./Certificates";
import Education from "./Education";
import Programming from "./Programming";
import Projects from "./Projects";
import Work from "./Work";
import Contact from "./Contact";
import Typed from "typed.js";

export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [certificates, setcertificates] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Enthusiastic Dev 😎",
        "Full-Stack Developer💻",
        "Cyber Security Enthusiast 👨‍💻",
        "MERN Stack Developer 💻",
        "AWS Cloud Practitioner 👨‍💻",
        "Data Analyst 💻",
      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const el = useRef(null);

  function SetAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogrammings(false);
    setcertificates(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center justify-content-center">
            Himanshu Kumar Modi{" "}
          </span>
          <div className="bars mx-2" onClick={() => setopennav(!opennav)}>
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex bg-new px-9 navbar-new py-2 flex-rows transition-all"
            : "d-flex bg-new px-9 navbar-fixed-new py-2 flex-rows transition-all"
        }
      >
        <span className="brand-name">HIMANSHU KUMAR MODI</span>
        <div className="d-flex flex-rows">
          <a
            className="mx-4 nav-items"
            href="#home"
            onClick={() => setopennav(false)}
          >
            Home
          </a>
          <a
            className="mx-4 nav-items"
            href="#aboutme"
            onClick={() => setopennav(false)}
          >
            About me
          </a>
          <a
            className="mx-4 nav-items"
            href="#resume"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            className="mx-4 nav-items"
            href="#contactme"
            onClick={() => setopennav(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <div className="mx-2 nav-items yo">
                <a href="https://github.com/himanshumodi3108/" target="_blank" rel="noreferrer">
                  <i className="fa fa-github mx-2"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-kumar-modi-063b88239/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin mx-2"></i>
                </a>
                <a href="https://www.instagram.com/modi4520/" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram mx-2"></i>
                </a>
                <a
                  href="https://www.facebook.com/himanshu.modi.35"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook mx-2"></i>
                </a>
                <a
                  href="https://x.com/Himansh93945818"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter mx-2"></i>
                </a>
              </div>
              <span className="Im-text">
                Hello, I'm{" "}
                <span className="name-Im-text">Himanshu Kumar Modi</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              >
                {/*Enthusiastic Dev 😎*/}
              </span>
              <span className="Im-text-subheading">
                Skilled Full-Stack Developer with a passion for building scalable 
                and secure web applications using modern frameworks and best coding practices.
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Hire me
                </a>
                <a
                  className="btn-resume-me"
                  href="https://drive.google.com/file/d/1RCW237x2cfhO_Fn3qCmaqXHQS5S4v3Lp/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                src="https://res.cloudinary.com/dnrel9myp/image/upload/v1737456743/Portfolio/IMG-20241007-WA0125_copy_iwp2ih.jpg"
                alt="Profile-pic"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="about-me-section about-me-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            About Me
          </span>
          <span className="why-text-sub">Why Choose Me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <dotlottie-player
                className="lottie-1"
                src="https://lottie.host/481055df-40f3-41b4-8f32-45194a92320e/96fRcQL0ks.json"
                background="transparent"
                align="center"
                speed="1"
                //style={{ width: "400px", height: "400px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="col-lg-6 cpl-md-6 col-sm-12 py-7 d-flex flex-column">
              <span className="some-text-about-me">
              I'm Himanshu Kumar Modi, a passionate Full-Stack Web Developer from Jharkhand, India.
              I'm currently pursuing a B.Tech in Computer Science and Engineering with specialization
              in Information Security at Vellore Institute of Technology. 
              My enthusiasm for web development fuels my drive to craft innovative digital solutions, 
              and I am constantly exploring new technologies to enhance my skill set.
              <br />
              I am committed to delivering high-quality, detail-oriented solutions that align with 
              client goals and industry best practices. Whether you need a dedicated developer to 
              bring your vision to life or a collaborator with a strong problem-solving mindset, 
              I am eager to contribute to your project's success.
              <br />
              Explore my resume below to learn more about my skills and experience. Let's collaborate to 
              turn your ideas into impactful digital solutions.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full Stack Developer</li>
                    <li>MERN Stack Developer</li>
                    <li>Cyber Security Enthusiast</li>
                    <li>AWS CertifiedCloud Practitoner</li>
                    <li>Data Analyst</li>
                    <li>Machine Learning Enthusiast</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text" id="resume">Resume</span>
        <span className="why-text-sub" >My formal details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i className="fas fa-user-graduate"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-briefcase"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-code"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-certificate"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-tasks"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column bg-white">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programmings === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogrammings, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects
              </span>
              <span
                className={
                  certificates === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setcertificates, true);
                }}
              >
                Certifications
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
            {certificates === true && <Certificates />}
          </div>
        </div>
      </div>
      <div className="contact-me-part">
        {/* <div className="relative-bg"></div> */}
        <div className="contact-inner-part d-flex flex-column">
          <span className="contact-me-text" id="contactme">Contact Me</span>
          <span className="touch-text mb-5">
            Get In Touch
            <span role="img" aria-label="Close">
              🙂
            </span>
          </span>
          <Contact />
        </div>
      </div>
      <div className="footer-section d-flex flex-column">
      <span className="footer-text-sub">
        © 2025 &nbsp; Himanshu Kumar Modi 
        </span>
        <div className="mx-2 footer-nav-items yo">
          <a href="https://github.com/himanshumodi3108/" target="_blank" rel="noreferrer">
            <i className="fa fa-github mx-4"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-kumar-modi-063b88239/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin mx-4"></i>
          </a>
          <a href="https://www.instagram.com/modi4520/" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram mx-4"></i>
          </a>
          <a href="https://www.facebook.com/himanshu.modi.35" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook mx-4"></i>
          </a>
          <a href="https://x.com/Himansh93945818" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter mx-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
