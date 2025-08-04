import React, { useEffect, useState } from 'react';
import './Preloader.css';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="preloader-container">
        <motion.div 
          className="logo-container"
          initial={{ scale: 0.8, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          <div className="logo">L</div>
          <div className="logo-circle"></div>
        </motion.div>
        
        <motion.h1
          className="loading-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Leela's Portfolio
        </motion.h1>
        
        <motion.div 
          className="progress-container"
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="progress-bar"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
          <span className="progress-text">{progress}%</span>
        </motion.div>
        
        <motion.p
          className="quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          "Crafting digital experiences with passion"
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;