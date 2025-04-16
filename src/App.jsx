import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Footer from "./Components/Footer";
import Button from "./Pages/Button";
import CustomCursor from "./Components/CustomCursor";

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
        <div ref={headerRef} className="relative z-20">
          <Header1 />
          <Header2 isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/btn" element={<Button />} />
        </Routes>
        <Footer />
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-10 backdrop-blur-xs  bg-black/60 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </BrowserRouter>
    </>
  );
};

export default App;