import React, { useState, useRef, useEffect, Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import "./styles/global.css";
import Typed from "typed.js";
import { projects as projectsData, certificates as certificatesData, programmingSkills, blogPostsData } from "./components/sections";
import { ErrorBoundary, BlogSkeleton, ContactSkeleton } from "./components";

// Lazy load components for code splitting
const Certificates = lazy(() => import("./components/sections/Certificates"));
const Education = lazy(() => import("./components/sections/Education"));
const Programming = lazy(() => import("./components/sections/Programming"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Work = lazy(() => import("./components/sections/Work"));
const Contact = lazy(() => import("./components/sections/Contact"));
//const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Blog = lazy(() => import("./components/sections/Blog"));
const LanguageSwitcher = lazy(() => import("./components/sections/LanguageSwitcher"));

// Loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

// Enhanced Loading Components
const BlogLoading = () => (
  <div className="row">
    {[1, 2, 3].map((i) => (
      <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <BlogSkeleton />
      </div>
    ))}
  </div>
);

// Stats Component
function StatsSection() {
  const blogsCount = blogPostsData.length;
  const projectsCount = projectsData.length;
  const certificatesCount = certificatesData.length;
  const technologiesCount = programmingSkills.length;

  useEffect(() => {
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          element.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target;
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => observer.observe(stat));

    return () => {
      statNumbers.forEach((stat) => observer.unobserve(stat));
    };
  }, []);

  return (
    <div className="stats-section py-5" id="stats">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="stat-card">
              <div className="stat-number" data-target={projectsCount}>0</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="stat-card">
              <div className="stat-number" data-target={certificatesCount}>0</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="stat-card">
              <div className="stat-number" data-target={blogsCount}>0</div>
              <div className="stat-label">Blogs</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="stat-card">
              <div className="stat-number" data-target={technologiesCount}>0</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { t } = useTranslation();
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [certificates, setcertificates] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const el = useRef(null);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Handle smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.currentTarget;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'aboutme', 'resume', 'contactme', 'blog'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Typed.js effect
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-content" aria-label="Skip to main content">
        Skip to main content
      </a>
      
      <div 
        className="navbar-option-mobile bg-new"
        id="mobile-menu"
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center justify-content-center">
            Himanshu Kumar Modi{" "}
          </span>
          <button 
            className="bars mx-2" 
            onClick={() => setopennav(!opennav)}
            aria-label="Toggle navigation menu"
            aria-expanded={opennav}
            aria-controls="mobile-menu"
            type="button"
          >
            {" "}
          </button>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex bg-new px-9 navbar-new py-2 flex-rows transition-all align-items-center"
            : "d-flex bg-new px-9 navbar-fixed-new py-2 flex-rows transition-all align-items-center"
        }
        role="navigation"
        aria-label="Main navigation"
      >
        <span className="brand-name">HIMANSHU KUMAR MODI</span>
        <div className="d-flex flex-rows align-items-center">
          <a
            className={`mx-4 nav-items ${activeSection === 'home' ? 'active-nav' : ''}`}
            href="#home"
            onClick={() => setopennav(false)}
            aria-label="Navigate to home section"
          >
            {t('nav.home')}
          </a>
          <a
            className={`mx-4 nav-items ${activeSection === 'aboutme' ? 'active-nav' : ''}`}
            href="#aboutme"
            onClick={() => setopennav(false)}
            aria-label="Navigate to about me section"
          >
            {t('nav.about')}
          </a>
          <a
            className={`mx-4 nav-items ${activeSection === 'resume' ? 'active-nav' : ''}`}
            href="#resume"
            onClick={() => setopennav(false)}
            aria-label="Navigate to resume section"
          >
            {t('nav.resume')}
          </a>
          <a
            className={`mx-4 nav-items ${activeSection === 'contactme' ? 'active-nav' : ''}`}
            href="#contactme"
            onClick={() => setopennav(false)}
            aria-label="Navigate to contact me section"
          >
            {t('nav.contact')}
          </a>
          <a
            className={`mx-4 nav-items ${activeSection === 'blog' ? 'active-nav' : ''}`}
            href="#blog"
            onClick={() => setopennav(false)}
            aria-label="Navigate to blog section"
          >
            {t('nav.blog')}
          </a>
          <Suspense fallback={<div></div>}>
            <LanguageSwitcher />
          </Suspense>
        </div>
      </nav>
      <main id="main-content">
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <div className="mx-2 nav-items yo" role="list" aria-label="Social media links">
                <a href="https://github.com/himanshumodi3108/" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
                  <i className="fa fa-github mx-2" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-kumar-modi-063b88239/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit LinkedIn profile"
                >
                  <i className="fa fa-linkedin mx-2" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/modi4520/" target="_blank" rel="noreferrer" aria-label="Visit Instagram profile">
                  <i className="fa fa-instagram mx-2" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.facebook.com/himanshu.modi.35"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Facebook profile"
                >
                  <i className="fa fa-facebook mx-2" aria-hidden="true"></i>
                </a>
                <a
                  href="https://x.com/Himansh93945818"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Twitter profile"
                >
                  <i className="fa fa-twitter mx-2" aria-hidden="true"></i>
                </a>
              </div>
              <span className="Im-text">
                {t('hero.greeting')}{" "}
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
                {t('hero.subtitle')}
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me" aria-label="Navigate to contact section">
                  {t('hero.hireMe')}
                </a>
                <a
                  className="btn-resume-me"
                  href="https://drive.google.com/uc?export=download&id=1RCW237x2cfhO_Fn3qCmaqXHQS5S4v3Lp"
                  download="Himanshu_Kumar_Modi_Resume.pdf"
                  aria-label="Download resume PDF"
                >
                  <i className="fas fa-download me-2"></i>
                  {t('hero.downloadResume')}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
                <img
                className="img-fluid custom-img"
                src="https://res.cloudinary.com/dnrel9myp/image/upload/v1737456743/Portfolio/IMG-20241007-WA0125_copy_iwp2ih.jpg"
                alt="Himanshu Kumar Modi - Full Stack Developer"
                loading="lazy"
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
      {/* Stats Section */}
      <StatsSection />

      <div className="about-me-section about-me-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            {t('about.title')}
          </span>
          <span className="why-text-sub">{t('about.subtitle')}</span>
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
              {t('about.description')}
              <br />
              {t('about.description2')}
              <br />
              {t('about.description3')}
              </span>
              <span className="few-highlights">
                <span className="few-text">{t('about.highlights')}</span>
                <span className="few-list">
                  <ul>
                    <li>Full Stack Developer</li>
                    <li>MERN Stack Developer</li>
                    <li>Cyber Security Enthusiast</li>
                    <li>AWS Certified Cloud Practitioner</li>
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
        <span className="about-me-text" id="resume">{t('resume.title')}</span>
        <span className="why-text-sub">{t('resume.subtitle')}</span>
        <div
          className="resume-new-section row"
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
            <Suspense fallback={<LoadingSpinner />}>
              {education === true && <Education />}
              {workhistory === true && <Work />}
              {programmings === true && <Programming />}
              {projects === true && <Projects />}
              {certificates === true && <Certificates />}
            </Suspense>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section - Hidden */}
      {/* <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense> */}
      
      {/* Blog Section */}
      <Suspense fallback={<BlogLoading />}>
        <ErrorBoundary>
          <Blog />
        </ErrorBoundary>
      </Suspense>
      
      <div className="contact-me-part">
        <div className="contact-inner-part d-flex flex-column">
          <span className="contact-me-text" id="contactme">{t('contact.title')}</span>
          <span className="touch-text mb-5">
            {t('contact.subtitle')}
            <span role="img" aria-label="Close">
              🙂
            </span>
          </span>
          <Suspense fallback={<ContactSkeleton />}>
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
      
      <div className="footer-section d-flex flex-column">
        <span className="footer-text-sub">
          {t('footer.copyright')}
        </span>
        <div className="mx-2 footer-nav-items yo" role="list" aria-label="Social media links">
          <a href="https://github.com/himanshumodi3108/" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
            <i className="fa fa-github mx-4" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-kumar-modi-063b88239/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            <i className="fa fa-linkedin mx-4" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/modi4520/" target="_blank" rel="noreferrer" aria-label="Visit Instagram profile">
            <i className="fa fa-instagram mx-4" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/himanshu.modi.35" target="_blank" rel="noreferrer" aria-label="Visit Facebook profile">
            <i className="fa fa-facebook mx-4" aria-hidden="true"></i>
          </a>
          <a href="https://x.com/Himansh93945818" target="_blank" rel="noreferrer" aria-label="Visit Twitter profile">
            <i className="fa fa-twitter mx-4" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          type="button"
        >
          <i className="fas fa-arrow-up" aria-hidden="true"></i>
        </button>
      )}
      </main>
    </div>
  );
}
