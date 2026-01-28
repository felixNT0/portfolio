import { useState } from "react";
import "../../styles/styles.css";
import MainNavBar from "./MainNavBar";
import OtherNavBar from "./OtherNavBar";

import MobileDrawer from "./MobileDrawer";

const NavBar = ({ isVisible = true }: { isVisible?: boolean }) => {
  const [nav, setNav] = useState(false);
  const [navBarState, setNavBarState] = useState(false);

  return (
    <>
      <div 
        id="navbar" 
        style={{ 
          position: 'fixed', 
          top: isVisible ? '20px' : '-500px', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'auto',
          minWidth: '350px',
          maxWidth: '90%',
          zIndex: 1000,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          borderRadius: '9999px',
          overflow: 'hidden',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
        className="glass"
      >
        <MainNavBar nav={nav} setNav={setNav} />

        {!nav && (
          <OtherNavBar
            navBarState={navBarState}
            setNavBarState={setNavBarState}
          />
        )}
      </div>
      
      {/* Mobile Drawer rendered outside the transformed container */}
      <MobileDrawer nav={nav} setNav={setNav} />
    </>
  );
};

export default NavBar;
