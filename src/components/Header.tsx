
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-white">AJAY</span>
            <span className="text-[#00ff41]">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#00ff41] transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#00ff41] transition-colors duration-300">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#00ff41] transition-colors duration-300">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-[#00ff41] transition-colors duration-300">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-white hover:text-[#00ff41] transition-colors duration-300">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#00ff41] transition-colors duration-300">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#00ff41] transition-colors duration-300 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#00ff41] transition-colors duration-300 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#00ff41] transition-colors duration-300 text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-[#00ff41] transition-colors duration-300 text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-[#00ff41] transition-colors duration-300 text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#00ff41] transition-colors duration-300 text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
