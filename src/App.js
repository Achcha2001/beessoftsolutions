import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/Hero';
import Contact from './components/Contact';
import MenuBar from './components/menubar'; // Corrected case for the import
import Footer from './pages/Footer';
import Services from './pages/Services';
import About from './pages/Aboutus';

function App() {
  return (
    <BrowserRouter>
      {/* Add MenuBar at the top */}
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
