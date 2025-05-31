
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">AJAY</span>
                <span className="text-[#00ff41]">.</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating exceptional digital experiences.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#00ff41] transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#00ff41] transition-colors duration-300"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#00ff41] transition-colors duration-300"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#00ff41] transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/ajay-kumar-24349b335/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff41] transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/ajay2003-hub" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff41] transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} Ajay Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
