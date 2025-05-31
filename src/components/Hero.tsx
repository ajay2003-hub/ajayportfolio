
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {text}
            <span className="animate-pulse text-[#00ff41]">|</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            <span className="text-[#00ff41] font-semibold">Full Stack Web Developer</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting scalable web applications and modern interfaces using MERN stack & other cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#00ff41]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-[#00ff41]/30 rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
