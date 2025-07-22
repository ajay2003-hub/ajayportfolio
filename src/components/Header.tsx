
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-white text-xl font-semibold">Refokus</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">
              Home
            </button>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">
                Work
              </button>
            </div>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">
              Culture
            </button>
            <div className="w-px h-6 bg-gray-600"></div>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">
              News
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200"
            >
              Get Started →
            </Button>
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
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm font-medium">
                Work
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm font-medium">
                Culture
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm font-medium">
                News
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 w-fit mt-4"
              >
                Get Started →
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
