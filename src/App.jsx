import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Footer from "./Components/Footer";

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]); 

  return (
    <>
      <BrowserRouter>
        <div ref={headerRef} className="relative z-20">
          <Header1 />
          <Header2 isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        {isMenuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/20 md:hidden"
            style={{ top: `${totalHeaderHeight}px` }}
            onClick={toggleMenu}
          />
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
