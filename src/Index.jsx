import React, { useRef, useState } from "react";

// Imports dels components del lloc web
import Footer from "./paginas/Footer.jsx";
import Header from "./paginas/Header.jsx";
import Welcome from "./paginas/Welcome.jsx";
import AboutUs from "./paginas/AboutUs.jsx";
import Fabincci from "./paginas/Fabincci.jsx";
import Reservas from "./paginas/Reservas.jsx";
import Contact from "./paginas/Contact.jsx";

function Index() {

  // Configuració dels botons del Header per anar a les seves seccions
  const welcomeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const fabincciRef = useRef(null);
  const reservasRef = useRef(null);
  const contactRef = useRef(null);

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

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  // Configuració del scroll horitzontal de la pàgina

  const handleScroll = (event) => {
    
    if (event.ctrlKey) return;

    const container = containerRef.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    let scrollAmount = event.deltaY;

    console.log()
    console.log(event.deltaY)
    
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
        onScroll={ () => { setScrollLeft(containerRef.current.scrollLeft) } }
      >
        <div className="">
          <Welcome ref={welcomeRef} />
        </div>
        <div className="">
          <AboutUs ref={aboutUsRef} />
        </div>
        <div className="">
          <Fabincci ref={fabincciRef} />
        </div>
        <div className="">
          <Reservas ref={reservasRef} />
        </div>
        <div className="">
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
