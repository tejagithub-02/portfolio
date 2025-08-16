import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaLaptopCode, 
  FaChartLine, 
  FaPaintBrush
 
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="service-icon" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with Python, PHP, Django, and JavaScript. From front-end interfaces to backend APIs and database integration.",
      highlights: ["RESTful APIs", "Database Design", "Authentication Systems", "Performance Optimization"]
    },
    {
      icon: <FaCode className="service-icon" />,
      title: "Responsive Web Design",
      description: "Crafting elegant, user-friendly, and mobile-first designs using HTML, CSS, and modern frameworks. Ensuring a smooth user experience across all devices.",
      highlights: ["Mobile-First Approach", "CSS Animations", "Cross-Browser Compatibility", "UI/UX Principles"]
    },
    {
      icon: <FaChartLine className="service-icon" />,
      title: "SEO & Digital Presence",
      description: "Optimizing websites with SEO strategies to improve visibility, rankings, and user engagement. Helping brands grow their online presence.",
      highlights: ["Keyword Research", "Technical SEO", "Content Strategy", "Analytics Integration"]
    },
    {
      icon: <FaPaintBrush className="service-icon" />,
      title: "Poster Designing",
      description: "Creating visually appealing posters and digital graphics for branding, marketing, and promotional campaigns with a professional touch.",
      highlights: ["Brand Consistency", "Typography", "Color Theory", "Visual Hierarchy"]
    }
  ];

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
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="services" className="services-section">
      {/* Animated background elements */}
      <div className="services-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-decorator">//</span> My Services
          </h2>
          <p className="section-subtitle">
            Delivering tailored solutions with modern web technologies
          </p>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="service-icon-container">
                {service.icon}
                <div className="icon-bg"></div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <div className="service-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {service.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <motion.button 
                className="service-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;