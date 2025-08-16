import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
 
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import {
  FaHome,
  FaBars,
  FaFileAlt,
  FaTag,
  FaEnvelope,
} from "react-icons/fa";
import "./PortfolioPage.css";
import profileImg from "../assets/profile.jpg";

const PortfolioPage = () => {
  useEffect(() => {
    // Floating particles animation
    const container = document.querySelector(".portfolio-container");
    const colors = [
      "rgba(255,255,255,0.3)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.1)",
    ];
    const particleCount = window.innerWidth < 768 ? 30 : 80;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random properties
      const size = Math.random() * 5 + 1;
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const delay = Math.random() * 5;
      const duration = Math.random() * 15 + 10;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.backgroundColor = color;

      container.appendChild(particle);
    }

    return () => {
      const particles = document.querySelectorAll(".particle");
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <div className="portfolio-container" id="home">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>

      {/* Left Sticky Profile Section */}
      <div className="left-section">
        <div className="profile-card">
          <div className="availability pulse">
        
          </div>
          <div className="profile-img">
            <img src={profileImg} alt="Profile" />
            <div className="img-overlay"></div>
          </div>
          <h2 className="profile-name">K. Leela Sasi Priya</h2>
          <p className="email">leelasasipriyakasani@gmail.com</p>
          <p className="location">Based in Bangalore, India</p>
          <div className="social-icons">
            {[
              {
                icon: <FaLinkedin />,
                color: "#0A66C2",
                link: "https://linkedin.com",
              },
              { icon: <FaGithub />, color: "#333", link: "https://github.com" },
              { icon: <FaInstagram />, color: "#E1306C", link: "#" },
              { icon: <FaFacebookF />, color: "#1877F2", link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ "--hover-color": social.color }}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <button className="get-started">
            <span>Contact Me</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="right-section">
        <div className="content">
          <p className="time fade-in">Bangalore, IN 10:24 AM</p>
          <p className="intro slide-in">• Introduction</p>
          <h1 className="headline slide-in">
            Full-Stack Developer <br /> Passionate About Web Solutions
          </h1>
          <p className="description fade-in">
            Enthusiastic developer skilled in Python, Django, PHP, and modern
            front-end technologies. <br className="desktop-only" />
            I love building elegant, responsive, and scalable web applications.
          </p>

          <div className="tags">
            {[
              "Full-Stack Development",
              "Web Design",
              "SEO Optimization",
              "Dynamic Applications",
            ].map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="sidebar">
          {[
            { icon: <FaHome />, href: "#home" },
            { icon: <FaBars />, href: "#about" },
            { icon: <FaFileAlt />, href: "#projects" },
            { icon: <FaTag />, href: "#services" },
            { icon: <FaEnvelope />, href: "#contact" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`icon-link ${i === 0 ? "active" : ""}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
