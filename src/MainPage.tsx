import { useEffect, useState } from "react";
import About from "./components/About";
import AIAssistant from "./components/AIAssistant";
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
import Services from "./components/Services";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import WelcomeModal from "./components/WelcomeModal/WelcomeModal";
import { useAppContext } from "./contexts/useAppContext";

function MainPage() {
  const { showOtherSideBar, modalState } = useAppContext();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      // Show back to top button when scrolled past 300px
      if (winScroll > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Smart Header: Always show at the very top, hide on scroll down, show on scroll up
      if (winScroll < 50) {
        setShowNavbar(true);
      } else {
        if (winScroll > lastScrollY) {
          setShowNavbar(false); // scrolling down
        } else {
          setShowNavbar(true); // scrolling up
        }
      }
      setLastScrollY(winScroll);
    };

    window.addEventListener("scroll", scrollFunction, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, [lastScrollY]);

  return (
    <LoaderWrapper>
      <div
        id="top-anchor"
        className="dark:bg-dark-bg w-full bg-transparent overflow-hidden"
      >
        <ScrollIndicator />
        <NavBar isVisible={showNavbar} />

        {/* Home usually has its own hero animation, but we can wrap it or leave it. 
            User asked for transitions FROM one to other, so wrapping all provides consistency. 
            However, Home is top of page. Let's wrap others. */}
        <Home />

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Experience />
        </SectionWrapper>

        {/* Projects Section */}
        {/* <SectionWrapper> */}
        <Portfolio />
        {/* </SectionWrapper> */}

        <SectionWrapper>
          <Services />
        </SectionWrapper>

        {/* <SectionWrapper> */}
        <Skills />
        {/* </SectionWrapper> */}

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
        <AIAssistant />
        <BackToTop isVisible={showBackToTop} />
      </div>
    </LoaderWrapper>
  );
}

export default MainPage;
