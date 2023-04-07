import React, { useState } from "react";
import "../../styles/styles.css";
import ToggleDarkModeSwitch from "../ToggleDarkModeSwitch";
import MainNavBar from "./MainNavBar";
import OtherNavBar from "./OtherNavBar";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [navBarState, setNavBarState] = useState(false);

  return (
    <div >
      <MainNavBar nav={nav} setNav={setNav} />

      {!nav && (
        <OtherNavBar
          navBarState={navBarState}
          setNavBarState={setNavBarState}
        />
      )}

      <ToggleDarkModeSwitch />
    </div>
  );
};

export default NavBar;
