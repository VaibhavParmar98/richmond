import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Footer from "./Components/Footer";
import Check from "./Pages/Check";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header1 />
        <Header2 />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
