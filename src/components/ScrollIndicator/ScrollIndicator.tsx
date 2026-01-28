import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/useAppContext";
import "../../styles/scrollIndicator.css";

function ScrollIndicator() {
  const { darkMode } = useAppContext();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!document.documentElement) return;

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 2000 }}>
      <div className="progress-container">
        <div
          style={{ 
            background: darkMode ? "#4db5ff" : "#fca61f",
            width: `${scrollWidth}%`,
            height: '4px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
          className="progress-bar"
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
