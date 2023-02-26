import React from "react";
import { useAppContext } from "../contexts/useAppContext";

function ToggleDarkModeSwitch() {
  const { toggleDarkMode } = useAppContext();
  return (
    <div className="switch_holder">
      <label class="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleDarkModeSwitch;
