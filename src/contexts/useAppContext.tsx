import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AppContextInterface {
  toggleDarkMode: () => void;
  changeActiveTab: (tab: string) => void;
  toggleShowOtherSideBar: () => void;
  currentTab: string;
  darkMode: boolean;
  showOtherSideBar: boolean;
  toggleModal: () => void;
  modalState: boolean;
  loading: boolean;
}

export const AppContext = createContext<AppContextInterface>({
  toggleDarkMode: () => {},
  changeActiveTab: () => {},
  toggleShowOtherSideBar: () => {},
  currentTab: "home",
  darkMode: true,
  showOtherSideBar: false,
  toggleModal: () => {},
  modalState: false,
  loading: false,
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentTab, setCurrentTab] = useState("home");
  const [showOtherSideBar, setShowOtherSideBar] = useState(false);
  const [modalState, setModalState] = useState(true);
  const [loading] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleShowOtherSideBar = () => {
    setShowOtherSideBar(!showOtherSideBar);
  };

  const changeActiveTab = (tab: string) => {
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
        loading,
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
