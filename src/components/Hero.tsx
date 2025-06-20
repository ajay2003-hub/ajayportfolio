
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
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {text}
            <span className="animate-pulse text-[#00ff41]">|</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            <span className="text-[#00ff41] font-semibold">Full Stack Web Developer</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting scalable web applications and modern interfaces using MERN stack & other cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00ff41]/25"
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadCV}
              className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-[#00ff41] opacity-60" size={24} />
          </div>
        </div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#00ff41]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-[#00ff41]/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00ff41] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-[#00ff41] rounded-full animate-ping delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>
    </section>
  );
};

export default Hero;
