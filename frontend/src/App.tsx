import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavigationBar";
import Home from "./pages/home";
import Product from "./components/Product";
import HeroSection from "./components/HeroSection";
import SpecialistStoreSection from "./components/SpecialistStoreSection";

const App: React.FC = () => {
  return (
    <Router>

      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/product" element={<Product link={""} imgSrc={""} alt={""} title={""} />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/specialiststore" element={<SpecialistStoreSection />} />
      </Routes>
    </Router>
  );
};

export default App;
