
import { useEffect, useState } from "react";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import BottomNavBar from "./components/BottomNavBar";
import Contact from "./components/Contacts/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoaderWrapper from "./components/Loader/LoaderWrapper";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import SectionWrapper from "./components/SectionWrapper";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import WelcomeModal from "./components/WelcomeModal/WelcomeModal";
import { useAppContext } from "./contexts/useAppContext";

function MainPage() {
  const { showOtherSideBar, modalState } = useAppContext();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Debug log to confirm new code version
    console.log("MainPage mounted - v7 (AOS removed)");

    const scrollFunction = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > 100) {
        setShowNavbar(true);
        setShowBackToTop(true);
      } else {
        setShowNavbar(false);
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);
    
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <LoaderWrapper>
      <div id="top-anchor" className="dark:bg-dark-bg w-full bg-white overflow-hidden">
        <ScrollIndicator />
        <NavBar isVisible={showNavbar} />
        
        {/* Home usually has its own hero animation, but we can wrap it or leave it. 
            User asked for transitions FROM one to other, so wrapping all provides consistency. 
            However, Home is top of page. Let's wrap others. */}
        <Home />
        
        <SectionWrapper>
          <About />
        </SectionWrapper>
        
        {/* <SectionWrapper> */}
          <Portfolio />
        {/* </SectionWrapper> */}
        
        {/* <SectionWrapper> */}
          <Skills />
        {/* </SectionWrapper> */}
        
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        
        <SectionWrapper>
          <Contact />
        </SectionWrapper>

        <Footer />
        {!showOtherSideBar && (
          <>
            <SocialLinks />
            <BottomNavBar />
          </>
        )}
        {modalState && <WelcomeModal isModalOpen={modalState} />}
        <BackToTop isVisible={showBackToTop} />
      </div>
    </LoaderWrapper>
  );
}

export default MainPage;
