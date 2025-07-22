
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-zinc-900 border-t border-[#00ff41]/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/60 border border-[#00ff41]/20 shadow-xl backdrop-blur-lg px-8 py-10 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Brand */}
            <div className="flex-1 min-w-[180px]">
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-white tracking-wide">AJAY</span>
                <span className="text-[#00ff41] text-3xl">.</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating exceptional digital experiences.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex-1 min-w-[180px]">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#00ff41] transition-colors duration-300 text-left px-2 py-1 rounded-lg hover:bg-[#00ff41]/10"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#00ff41] transition-colors duration-300 text-left px-2 py-1 rounded-lg hover:bg-[#00ff41]/10"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#00ff41] transition-colors duration-300 text-left px-2 py-1 rounded-lg hover:bg-[#00ff41]/10"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#00ff41] transition-colors duration-300 text-left px-2 py-1 rounded-lg hover:bg-[#00ff41]/10"
                >
                  Contact
                </button>
              </div>
            </div>
            {/* Social Media */}
            <div className="flex-1 min-w-[180px]">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/ajay-kumar-24349b335/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff41] transition-colors duration-300 bg-zinc-800 rounded-full p-2 hover:bg-[#00ff41]/10 shadow hover:shadow-[#00ff41]/30"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/ajay2003-hub" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff41] transition-colors duration-300 bg-zinc-800 rounded-full p-2 hover:bg-[#00ff41]/10 shadow hover:shadow-[#00ff41]/30"
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
