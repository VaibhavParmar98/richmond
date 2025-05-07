import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";
import Signup from "./Components/Sigup";
import Header1 from "./Components/Header/Header1";
import HeaderMobile from "./Components/Header/Header2Mobile";
import HeaderDesktop from "./Components/Header/Header2Desktop";
import About from "./Pages/About";
import Event from "./Pages/Event";
import ArtFusionFestival from "./Pages/ArtFusionFestival";
import Gallery from "./Pages/Gallery";
// import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <BrowserRouter>
      <CustomCursor />
      <Header1 />
      <div ref={headerRef} className="relative z-20">
        <HeaderMobile
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          setIsMenuOpen={setIsMenuOpen}
        />
        <HeaderDesktop />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/art" element={<ArtFusionFestival />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {isMenuOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 h-1/2 z-10 bg-black/80 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </BrowserRouter>
  );
};

export default App;
