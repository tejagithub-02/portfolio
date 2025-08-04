import React, { useEffect, useState } from 'react';
import './Preloader.css';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const [activeShape, setActiveShape] = useState(0);
  const [activeColor, setActiveColor] = useState('#FF0055');

  const shapes = [
    { name: 'hypercube', color: '#FF0055' },
    { name: 'star', color: '#00FF88' },
    { name: 'spiral', color: '#8800FF' },
    { name: 'nebula', color: '#FFAA00' }
  ];

  const colorPalette = [
    '#FF0055', '#00FF88', '#8800FF', '#FFAA00', 
    '#00FFFF', '#FF00FF', '#FFFF00', '#00FF00'
  ];

  useEffect(() => {
    // Variable speed loading progress
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        const increment = prev < 30 ? 0.7 :
                         prev < 70 ? 1.5 :
                         prev < 90 ? 1.0 : 0.4;
        return prev + increment;
      });
    }, 20);

    // Rotate through shapes every 1.2 seconds
    const shapeInterval = setInterval(() => {
      setActiveShape((prev) => (prev + 1) % shapes.length);
      setActiveColor(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
    }, 1200);

    // Background color pulse effect
    const bgColorInterval = setInterval(() => {
      document.documentElement.style.setProperty(
        '--bg-pulse-color', 
        colorPalette[Math.floor(Math.random() * colorPalette.length)]
      );
    }, 3000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(shapeInterval);
      clearInterval(bgColorInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      controls.start("exit").then(() => {
        setTimeout(() => setLoading(false), 500);
      });
    }
  }, [progress, controls]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="preloader"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { 
            opacity: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.83, 0, 0.17, 1],
              when: "afterChildren"
            }
          }
        }}
      >
        {/* Animated gradient background */}
        <motion.div 
          className="gradient-background"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, var(--bg-pulse-color), #0a0e17)',
              'radial-gradient(circle at 80% 50%, var(--bg-pulse-color), #0a0e17)',
              'radial-gradient(circle at 50% 20%, var(--bg-pulse-color), #0a0e17)',
              'radial-gradient(circle at 50% 80%, var(--bg-pulse-color), #0a0e17)'
            ],
            transition: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />

        {/* Particle explosion system */}
        <div className="particle-explosion">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="explosion-particle"
              style={{ backgroundColor: activeColor }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: Math.random() * 1000 - 500,
                y: Math.random() * 1000 - 500,
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
                transition: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }
              }}
            />
          ))}
        </div>

        {/* Main content container */}
        <div className="preloader-content">
          {/* Morphing cosmic shape */}
          <motion.div 
            className="cosmic-shape-container"
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {shapes.map((shape, index) => (
              <motion.div
                key={shape.name}
                className={`cosmic-shape ${shape.name}`}
                style={{ 
                  backgroundColor: shape.color,
                  boxShadow: `0 0 30px ${shape.color}`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: activeShape === index ? 1 : 0,
                  scale: activeShape === index ? [0.8, 1.2, 1] : 0,
                  rotate: activeShape === index ? [0, 180, 360] : 0,
                  transition: {
                    duration: 1.5,
                    ease: "backInOut"
                  }
                }}
              />
            ))}
          </motion.div>

          {/* Animated title with color shift */}
          <motion.div className="title-container">
            <motion.h1
              className="main-title"
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.34, 1.56, 0.64, 1]
                }
              }}
            >
              <motion.span
                className="title-word"
                animate={{
                  color: [
                    '#FF0055', '#00FF88', '#8800FF', '#FFAA00'
                  ],
                  textShadow: [
                    '0 0 10px #FF0055',
                    '0 0 10px #00FF88',
                    '0 0 10px #8800FF',
                    '0 0 10px #FFAA00'
                  ],
                  y: [0, -15, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                LEELA'S
              </motion.span>
              <motion.span
                className="title-word"
                animate={{
                  color: [
                    '#00FF88', '#8800FF', '#FFAA00', '#FF0055'
                  ],
                  textShadow: [
                    '0 0 10px #00FF88',
                    '0 0 10px #8800FF',
                    '0 0 10px #FFAA00',
                    '0 0 10px #FF0055'
                  ],
                  y: [0, 15, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }
                }}
              >
                {" "}COSMIC
              </motion.span>
              <motion.span
                className="title-word"
                animate={{
                  color: [
                    '#8800FF', '#FFAA00', '#FF0055', '#00FF88'
                  ],
                  textShadow: [
                    '0 0 10px #8800FF',
                    '0 0 10px #FFAA00',
                    '0 0 10px #FF0055',
                    '0 0 10px #00FF88'
                  ],
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }
                }}
              >
                {" "}PORTFOLIO
              </motion.span>
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                color: activeColor,
                transition: {
                  delay: 0.6,
                  duration: 1
                }
              }}
            >
              PREPARING INTERGALACTIC EXPERIENCE
            </motion.p>
          </motion.div>

          {/* Energy wave progress indicator */}
          <motion.div 
            className="energy-wave-container"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.8 }
            }}
          >
            <div className="energy-wave">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="wave-segment"
                  style={{ backgroundColor: activeColor }}
                  animate={{
                    height: progress/2.5 > i ? 
                      [`${Math.random() * 30 + 20}px`, `${Math.random() * 50 + 30}px`] : 
                      [`${Math.random() * 10 + 5}px`, `${Math.random() * 15 + 5}px`],
                    opacity: progress/2.5 > i ? [0.8, 1] : [0.2, 0.4],
                    transition: {
                      duration: 0.5 + Math.random(),
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.03
                    }
                  }}
                />
              ))}
            </div>
            <motion.div 
              className="progress-percent"
              animate={{
                color: activeColor,
                scale: progress === 100 ? [1, 1.5, 1] : 1,
                textShadow: `0 0 10px ${activeColor}`,
                transition: {
                  duration: 0.5
                }
              }}
            >
              {Math.floor(progress)}%
            </motion.div>
          </motion.div>

          {/* Floating cosmic dust */}
          <div className="cosmic-dust">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="dust-particle"
                style={{ backgroundColor: colorPalette[i % colorPalette.length] }}
                initial={{
                  x: Math.random() * 1000 - 500,
                  y: Math.random() * 1000 - 500,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  x: [0, Math.random() * 400 - 200],
                  y: [0, Math.random() * 400 - 200],
                  opacity: [0, 0.6, 0],
                  scale: [0, Math.random() * 1.5, 0],
                  rotate: [0, 360],
                  transition: {
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 5
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Radial pulse effect */}
        <motion.div 
          className="radial-pulse"
          style={{ borderColor: activeColor }}
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.3, 0.1, 0],
            transition: {
              duration: 3,
              repeat: Infinity
            }
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;