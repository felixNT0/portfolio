import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({
  toggleDarkMode: () => {},
  changeActiveTab: () => {},
  toggleShowOtherSideBar: () => {},
  currentTab: 0,
  darkMode: true,
  showOtherSideBar: false,
  toggleModal: () => {},
  modalState: false,
});

const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  const [showOtherSideBar, setShowOtherSideBar] = useState(false);
  const [modalState, setModalState] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleShowOtherSideBar = () => {
    setShowOtherSideBar(!showOtherSideBar);
  };

  const changeActiveTab = (tab) => {
    setCurrentTab(tab);
  };

  const toggleModal = () => {
    setModalState(!modalState);
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

    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   // document.documentElement.classList.add("dark");
    //   // setDarkMode
    // }
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        currentTab,
        modalState,
        toggleModal,
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
