import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";
import HeaderMobile from "./Components/Header2Mobile";
import HeaderDesktop from "./Components/Header2Desktop";
import Header2 from "./Components/Header2";
import Header1 from "./Components/Header1";
import Signup from "./Components/Sigup";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [totalHeaderHeight, setTotalHeaderHeight] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (headerRef.current) {
      setTotalHeaderHeight(headerRef.current.offsetHeight);
    }

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <BrowserRouter>
        <CustomCursor />
        <Header1  />
        <div ref={headerRef} className="relative z-20">
          <HeaderMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <HeaderDesktop />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-10 backdrop-blur-xs bg-black/60 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </BrowserRouter>
    </>
  );
};

export default App;