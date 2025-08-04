import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Adjust time as needed
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Preloader /> : (
        // Your portfolio content goes here
        <></>
      )}
    </div>
  );
}

export default App;