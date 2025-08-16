import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  // Project data with additional details
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and secure checkout.",
      image: "https://source.unsplash.com/600x400/?ecommerce,shopping",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Creative Portfolio",
      description: "Interactive portfolio showcasing design work with smooth animations and responsive layout.",
      image: "https://source.unsplash.com/600x400/?portfolio,creative",
      tags: ["GSAP", "React", "CSS3"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Fitness Mobile App",
      description: "Health tracking application with workout plans, nutrition logging, and progress analytics.",
      image: "https://source.unsplash.com/600x400/?fitness,app",
      tags: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive business intelligence tool with real-time data visualization and reporting.",
      image: "https://source.unsplash.com/600x400/?dashboard,analytics",
      tags: ["D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Comprehensive social media management tool with scheduling and analytics features.",
      image: "https://source.unsplash.com/600x400/?social,media",
      tags: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Travel Booking App",
      description: "End-to-end travel booking system with hotel search, reservations, and payment processing.",
      image: "https://source.unsplash.com/600x400/?travel,booking",
      tags: ["Next.js", "GraphQL", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#"
    },
  ];

  useEffect(() => {
    // Animation for project cards on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id='projects'>
      {/* Animated background elements */}
      <div className="projects-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">
            <span className="title-decorator">//</span> Featured Projects
          </h2>
          <p className="section-subtitle">
            Selected works showcasing my design and development expertise
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.id} data-aos-delay={index * 100}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;