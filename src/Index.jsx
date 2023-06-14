import React, { useEffect, useRef, useState, lazy } from "react";

import { useMediaQuery } from "react-responsive";

// Imports dels components del lloc web
import Footer from "./components/helpers/Footer";
import Header from "./components/helpers/Header";
import Home from "./components/home/Home";

const LazyAboutUs = lazy(() => import("./components/home/AboutUs"));
const LazyFabincci = lazy(() => import("./components/home/Fabincci"));
const LazyReservas = lazy(() => import("./components/home/Reservations"));
const LazyContact = lazy(() => import("./components/home/Contact"));

function Index() {
  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 1024px)" });
  // Configuració dels botons del Header per anar a les seves seccions
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const fabincciRef = useRef(null);
  const reservasRef = useRef(null);
  const contactRef = useRef(null);

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(0);
    localStorage.setItem("scrollposHome", 0);
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(aboutUsRef.current.clientWidth);
    localStorage.setItem("scrollposHome", aboutUsRef.current.clientWidth);
  };

  const scrollToFabincci = () => {
    fabincciRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(fabincciRef.current.clientWidth);
    localStorage.setItem("scrollposHome", fabincciRef.current.clientWidth * 2);
  };

  const scrollToReservas = () => {
    reservasRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(reservasRef.current.clientWidth);
    localStorage.setItem("scrollposHome", reservasRef.current.clientWidth * 3);
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(contactRef.current.clientWidth);
    localStorage.setItem("scrollposHome", contactRef.current.clientWidth * 4);
  };

  // Configuració per mantenir el scroll al fer reload de la pàgina
  // Guarda la posició del scroll al sortir de la pàgina
  useEffect(() => {
    const handleBeforeUnload = () => {
      // console.log(containerRef.current.scrollLeft);
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

  useEffect(() => {
    const scrollpos = localStorage.getItem("scrollposHome");
    if (isTabletOrSmaller) {
      homeRef.current.scrollIntoView();
      setScrollLeft(0);
    } else if (scrollpos) {
      containerRef.current.scrollTo({
        left: parseInt(scrollpos),
      });
    }
  }, []);

  // Configuració del scroll horitzontal de la pàgina
  const handleScroll = (event) => {
    if (isTabletOrSmaller) return;
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
          handleHomeClick={scrollToHome}
          handleAboutUsClick={scrollToAboutUs}
          handleFabincciClick={scrollToFabincci}
          handleReservasClick={scrollToReservas}
          handleContactClick={scrollToContact}
        />
      </header>
      <div
        ref={containerRef}
        className={`${
          isTabletOrSmaller
            ? "overflow-x-hidden"
            : "flex flex-nowrap overflow-x-scroll"
        } overflow-y-hidden`}
        onWheel={handleScroll}
        onScroll={() => {
          setScrollLeft(containerRef.current.scrollLeft);
        }}
      >
        <div
          className="bg-cover bg-center
                      lg:bg-[url('assets/images/HomeBg/bg-home.webp')] bg-[url('assets/images/HomeBg/bg-contacto.webp')] "
          alt="Sección de home de Fabincci Barbería"
        >
          <Home ref={homeRef} />
        </div>
        <div
          className="bg-[url('assets/images/HomeBg/bg-saberHacer.webp')] bg-cover bg-no-repeat bg-center"
          alt="Sección de Saber Hacer de Fabincci Barbería"
        >
          <LazyAboutUs ref={aboutUsRef} />
        </div>
        <div
          className="bg-[url('assets/images/HomeBg/bg-fabincci.webp')] bg-cover bg-center bg-no-repeat"
          alt="Sección de Fabincci de Fabincci Barbería"
        >
          <LazyFabincci ref={fabincciRef} />
        </div>
        <div
          className="bg-[url('assets/images/HomeBg/bg-reservas.webp')] bg-cover bg-no-repeat bg-center"
          alt="Sección de Reservas de Fabincci Barbería"
        >
          <LazyReservas ref={reservasRef} />
        </div>
        <div
          className="bg-[url('assets/images/HomeBg/bg-contacto.webp')] xl:bg-fixed md:bg-local bg-cover bg-center"
          alt="Sección de Contacto de Fabincci Barbería"
        >
          <LazyContact ref={contactRef} />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Index;
