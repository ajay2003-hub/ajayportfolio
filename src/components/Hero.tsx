
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "HEY, I'M AJAY KUMAR";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    window.open('http://127.0.0.1:5500/resume.html', '_blank');
  };

  return (
  <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-zinc-900">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-[#23244a] via-[#2b2e6c] to-[#3a3e8c] backdrop-blur-xl shadow-2xl px-8 py-12 border border-white/10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            {text}
            <span className="animate-pulse text-[#00ff41]">|</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-[#00ff41] mb-4 font-semibold drop-shadow-lg">
            Full Stack Web Developer
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting scalable web applications and modern interfaces using <span className="text-[#00ff41] font-semibold">MERN stack</span> & other cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#00ff41] to-[#1e90ff] text-[#00ff41] hover:bg-[#00ff41] hover:text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00ff41]/25 rounded-full"
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadCV}
              className="border-[#00ff41] bg-black text-[#00ff41] hover:bg-[#00ff41] hover:text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-full"
            >
              Download CV
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce mt-2">
            <ArrowDown className="mx-auto text-[#00ff41] opacity-80" size={32} />
          </div>
        </div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#00ff41]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-[#1e90ff]/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00ff41] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-[#1e90ff] rounded-full animate-ping delay-500"></div>
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>
    </section>
  );
};

export default Hero;
