// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import PortfolioPage from './components/PortfolioPage';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="app">
          <PortfolioPage />
         <Projects/>
         <AboutUs/>
         <Services/>
         <Contact/>
        </div>
      )}
    </>
  );
};

export default App;
