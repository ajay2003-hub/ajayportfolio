
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#23244a] via-[#2b2e6c] to-[#3a3e8c] shadow-lg px-8 py-3 mt-4 mb-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* You can replace this with your own SVG or logo */}
            <span className="text-3xl font-bold text-[#7b7bff]">&#x21A6;</span>
            <span className="text-2xl font-bold text-white">Ajay<span className="text-[#7b7bff]">.</span></span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200">Home</button>
            <span className="h-8 w-px bg-white/20 mx-2"></span>
            <button onClick={() => scrollToSection('about')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#00ff41] rounded-full"></span>About
            </button>
            <span className="h-8 w-px bg-white/20 mx-2"></span>
            <button onClick={() => scrollToSection('services')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200">Services</button>
            <span className="h-8 w-px bg-white/20 mx-2"></span>
            <button onClick={() => scrollToSection('portfolio')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200">Projects</button>
            <span className="h-8 w-px bg-white/20 mx-2"></span>
            <button onClick={() => scrollToSection('skills')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200">Skills</button>
            <span className="h-8 w-px bg-white/20 mx-2"></span>
            <button onClick={() => scrollToSection('contact')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200">Contact</button>
            <span className="h-8 w-px bg-white/20 mx-2"></span>
            
            
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="flex flex-col space-y-4 mt-4 bg-gradient-to-r from-[#23244a] via-[#2b2e6c] to-[#3a3e8c] rounded-2xl px-6 py-4 shadow-lg">
              <button onClick={() => scrollToSection('home')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200 text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200 text-left flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#00ff41] rounded-full"></span>About
              </button>
              <button onClick={() => scrollToSection('services')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200 text-left">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200 text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200 text-left">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="font-semibold text-white hover:text-[#7b7bff] transition-colors duration-200 text-left">Contact</button>
              <button className="bg-gray-400/40 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-400/60 transition-all duration-200 shadow-md mt-2">
                Get Started <span className="text-lg">&#x21B7;</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
