import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./components/About";
import BottomNavBar from "./components/BottomNavBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import { useAppContext } from "./contexts/useAppContext";

function App() {
  const { showOtherSideBar } = useAppContext();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      {!showOtherSideBar && (
        <>
          <SocialLinks />
          <BottomNavBar />
        </>
      )}
    </div>
  );
}

export default App;
