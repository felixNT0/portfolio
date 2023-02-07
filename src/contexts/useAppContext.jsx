import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({
  toggleDarkMode: () => {},
  changeActiveTab: () => {},
  toggleShowOtherSideBar: () => {},
  currentTab: "",
  darkMode: false,
  showOtherSideBar: false,
});

const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTab, setCurrentTab] = useState("");
  const [showOtherSideBar, setShowOtherSideBar] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleShowOtherSideBar = () => {
    setShowOtherSideBar(!showOtherSideBar);
  };

  const changeActiveTab = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    switch (darkMode) {
      case true:
        document.documentElement.classList.add("dark");
        break;
      case false:
        document.documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        currentTab,
        changeActiveTab,
        showOtherSideBar,
        toggleShowOtherSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
