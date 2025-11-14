import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Testimonials.css";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonialRefs = useRef([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Senior Developer",
      company: "Tech Corp",
      content: "Himanshu is an exceptional developer with a strong understanding of modern web technologies. His attention to detail and problem-solving skills are outstanding.",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Project Manager",
      company: "Innovate Solutions",
      content: "Working with Himanshu was a pleasure. He delivered high-quality work on time and was always ready to go the extra mile to ensure project success.",
      rating: 5
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "CTO",
      company: "StartupXYZ",
      content: "Himanshu's expertise in full-stack development and his ability to quickly adapt to new technologies make him a valuable asset to any team.",
      rating: 5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRefs = testimonialRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">{t('testimonials.title')}</h2>
      <p className="testimonials-subtitle">{t('testimonials.subtitle')}</p>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (testimonialRefs.current[index] = el)}
            className={`testimonial-card fade-in ${currentTestimonial === index ? 'active' : ''}`}
          >
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p className="testimonial-content">"{testimonial.content}"</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="testimonial-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentTestimonial === index ? 'active' : ''}`}
            onClick={() => setCurrentTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

