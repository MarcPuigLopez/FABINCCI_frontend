import React, { useEffect, useRef, useState } from "react";

// Import react-router-dom components
import { useLocation } from "react-router-dom";

// Imports dels components del lloc web
import Footer from "./components/helpers/Footer";
import Header from "./components/helpers/Header";
import Welcome from "./components/home/Welcome";
import AboutUs from "./components/home/AboutUs";
import Fabincci from "./components/home/Fabincci";
import Reservas from "./components/home/Reservations";
import Contact from "./components/home/Contact";

function Index() {
  // Configuració dels botons del Header per anar a les seves seccions
  const welcomeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const fabincciRef = useRef(null);
  const reservasRef = useRef(null);
  const contactRef = useRef(null);

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  const location = useLocation();

  const scrollToWelcome = () => {
    welcomeRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(1);
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(aboutUsRef.current.clientWidth);
  };

  const scrollToFabincci = () => {
    fabincciRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(fabincciRef.current.clientWidth * 2);
  };

  const scrollToReservas = () => {
    reservasRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(reservasRef.current.clientWidth * 3);
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(contactRef.current.clientWidth * 4);
  };
  
  // Configuració per mantenir el scroll al fer reload de la pàgina
  // Guarda la posició del scroll al sortir de la pàgina
  useEffect(() => {
    const handleBeforeUnload = () => {
      console.log(containerRef.current.scrollLeft);
      localStorage.setItem("scrollposHome", containerRef.current.scrollLeft);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Restaura la posició del scroll al carregar la página
  useEffect(() => {
    const scrollpos = localStorage.getItem("scrollposHome");
    if (scrollpos) {
      containerRef.current.scrollTo({
        left: parseInt(scrollpos),
      });
    }
  }, []);

  // Configuració del scroll horitzontal de la pàgina
  const handleScroll = (event) => {
    if (event.ctrlKey) return;

    const container = containerRef.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    let scrollAmount = event.deltaY;

    if (!event.shiftKey) scrollAmount = scrollAmount / 2;

    const newScrollLeft = Math.max(
      0,
      Math.min(maxScrollLeft, scrollLeft + scrollAmount)
    );
    if (newScrollLeft !== scrollLeft) {
      setScrollLeft(newScrollLeft);
      const now = performance.now();
      if (now - lastScrollTime > 5000) {
        setLastScrollTime(now);
        container.scrollTo({
          top: 0,
          left: newScrollLeft,
        });
      } else {
        requestAnimationFrame(() => {
          container.scrollTo({
            top: 0,
            left: newScrollLeft,
          });
        });
      }
    }
  };

  // Configuració de les seccions de la pàgina
  return (
    <div>
      <header>
        <Header
          handleWelcomeClick={scrollToWelcome}
          handleAboutUsClick={scrollToAboutUs}
          handleFabincciClick={scrollToFabincci}
          handleReservasClick={scrollToReservas}
          handleContactClick={scrollToContact}
        />
      </header>
      <div
        ref={containerRef}
        className="flex flex-nowrap overflow-x-scroll overflow-y-hidden"
        onWheel={handleScroll}
        onScroll={() => {
          setScrollLeft(containerRef.current.scrollLeft);
        }}
      >
        <div className="bg-[url('assets/images/HomeBg/bg-welcome.webp')] bg-cover bg-center">
          <Welcome ref={welcomeRef} />
        </div>
        <div className="bg-[url('assets/images/HomeBg/bg-saberHacer.webp')] bg-cover bg-no-repeat bg-center">
          <AboutUs ref={aboutUsRef} />
        </div>
        {/* <div className="bg-[url('assets/images/HomeBg/2-bg-saberHace.webp')] bg-cover bg-no-repeat bg-center"> */}
        <div className="bg-[url('assets/images/HomeBg/FONDO3.png')] bg-cover bg-center bg-no-repeat ">
          <Fabincci ref={fabincciRef} />
        </div>
        <div className="bg-[url('assets/images/HomeBg/bg-reservas.webp')] bg-cover bg-no-repeat bg-center">
          <Reservas ref={reservasRef} />
        </div>
        <div className="bg-[url('assets/images/HomeBg/bg-contacto.webp')] bg-cover bg-no-repeat bg-center">
          <Contact ref={contactRef} />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Index;
