import React from "react";
import { motion } from "framer-motion";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaPaperPlane,
  FaFileDownload
} from "react-icons/fa";
import "./Contact.css";

// ✅ Import resume from assets
import resumeFile from "../assets/resume.pdf";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Leela_Sasi_Priya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-page">
      <section id="contact" className="contact-section">
        {/* Background elements */}
        <div className="contact-bg-elements">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
        </div>

        <motion.div 
          className="contact-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="title-decorator">//</span> Get in Touch
            </h2>
            <p className="section-subtitle">
              I'm open to opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="section-divider"></div>
          </motion.div>

          <div className="contact-content">
            {/* Left Info Section */}
            <motion.div 
              className="contact-info"
              variants={itemVariants}
            >
              <h3 className="contact-name">K. Leela Sasi Priya</h3>
              <p className="contact-bio">
                Full-Stack Developer | Web Designer | Tech Enthusiast
              </p>

              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon-container">
                    <FaPhone className="info-icon" />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Phone</span>
                    <span className="info-value">+91 88978 76517</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-container">
                    <FaEnvelope className="info-icon" />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Email</span>
                    <span className="info-value">leelasasipriyakasani@gmail.com</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-container">
                    <FaMapMarkerAlt className="info-icon" />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Location</span>
                    <span className="info-value">Bangalore, India</span>
                  </div>
                </div>
              </div>

              {/* Resume Download Button */}
              <motion.button
                className="resume-btn"
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload className="btn-icon" />
                <span>Download Resume</span>
              </motion.button>

              {/* Social Links */}
              <div className="social-links">
                <motion.a
                  href="https://www.linkedin.com/in/leela-sasi-priya" 
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ y: -3 }}
                >
                  <FaLinkedin className="social-icon" />
                  <span>Connect on LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/leelasasipriya"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ y: -3 }}
                >
                  <FaGithub className="social-icon" />
                  <span>View GitHub Profile</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.form 
              className="contact-form"
              variants={itemVariants}
            >
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  rows="5" 
                  required 
                  className="form-textarea"
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="send-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="btn-icon" />
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
