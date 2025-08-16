import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./AboutUs.css";
import profileImg from "../assets/profile.jpg";

const AboutUs = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.aboutus-text, .aboutus-image').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="aboutus-section">
      {/* Animated background elements */}
      <div className="aboutus-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="container">
        <h2 className="section-title">
          <span className="title-decorator">//</span> About Me
        </h2>

        <div className="aboutus-content">
          {/* Left Side - Text */}
          <div className="aboutus-text">
            <p className="animate-on-scroll">
              Hi, I'm <strong>K. Leela Sasi Priya</strong>, an enthusiastic 
              <strong> Full-Stack Developer</strong> with a background in 
              Electronics and Communication Engineering. I specialize in building 
              responsive, SEO-friendly, and dynamic web applications that make a 
              real-world impact.
            </p>

            <p className="animate-on-scroll">
              I have hands-on experience in developing websites using 
              <strong> Python, HTML, CSS, JavaScript, PHP, Django</strong>, and 
              <strong> MySQL</strong>. My journey started with converting static 
              websites into dynamic, database-driven applications — and I've since 
              worked on professional projects, admin dashboards, and business 
              platforms.
            </p>

            <p className="animate-on-scroll">
              As a quick learner and problem solver, I'm always eager to take on 
              challenges, explore new technologies, and contribute to meaningful 
              projects. My goal is to craft elegant, user-friendly, and innovative 
              solutions for clients and businesses.
            </p>

            <ul className="aboutus-highlights animate-on-scroll">
              <li>
                <span className="highlight-icon">🌍</span>
                <span>Based in Bangalore</span>
              </li>
              <li>
                <span className="highlight-icon">💻</span>
                <span>Skilled in Full-Stack Development</span>
              </li>
              <li>
                <span className="highlight-icon">🚀</span>
                <span>Passionate about Dynamic Web Applications</span>
              </li>
              <li>
                <span className="highlight-icon">🤝</span>
                <span>Open to Collaborations & Projects</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Image & Info */}
          <div className="aboutus-image animate-on-scroll">
          <div className="image-container">
      <img 
        src={profileImg} 
        alt="Leela Sasi Priya" 
        className="profile-img"
      />
      <div className="image-overlay"></div>
    </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 8897876517</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>leelasasipriyakasani@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Bangalore, India</span>
              </div>
              
              <div className="social-links">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;