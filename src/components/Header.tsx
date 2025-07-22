
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">AJAY</span>
            <span className="text-purple-400">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 text-sm font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 text-sm font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 text-sm font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 text-sm font-medium relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 text-sm font-medium relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 text-sm font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
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
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-white/90 hover:text-white transition-colors duration-200 text-left text-sm font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-white transition-colors duration-200 text-left text-sm font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white/90 hover:text-white transition-colors duration-200 text-left text-sm font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white/90 hover:text-white transition-colors duration-200 text-left text-sm font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-white/90 hover:text-white transition-colors duration-200 text-left text-sm font-medium">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/90 hover:text-white transition-colors duration-200 text-left text-sm font-medium">
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
