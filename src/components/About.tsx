
import React from 'react';
import { Code2, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-[#00ff41]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate developer creating digital experiences that matter
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                I specialize in building robust, performant, and scalable web applications using modern tools like React, 
                Node.js, MongoDB, and Express.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With a keen eye for detail and a commitment to clean, efficient code, I transform complex problems 
                into elegant solutions that deliver exceptional user experiences.
              </p>
              
              {/* Enhanced feature cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-black/50 rounded-xl border border-gray-800 hover:border-[#00ff41]/50 transition-all duration-300 group">
                  <Code2 className="mx-auto mb-3 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div className="text-2xl font-bold text-[#00ff41] mb-1">10+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="text-center p-4 bg-black/50 rounded-xl border border-gray-800 hover:border-[#00ff41]/50 transition-all duration-300 group">
                  <Globe className="mx-auto mb-3 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div className="text-2xl font-bold text-[#00ff41] mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Available</div>
                </div>
                <div className="text-center p-4 bg-black/50 rounded-xl border border-gray-800 hover:border-[#00ff41]/50 transition-all duration-300 group">
                  <Zap className="mx-auto mb-3 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div className="text-2xl font-bold text-[#00ff41] mb-1">Udaipur</div>
                  <div className="text-gray-400 text-sm">Based in</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-[#00ff41]/20 to-transparent rounded-full flex items-center justify-center p-4">
                  <img 
                    src="/lovable-uploads/880fdf99-648d-4fd8-8263-af19d15256fc.png" 
                    alt="Ajay Kumar" 
                    className="w-64 h-64 rounded-full object-cover border-4 border-[#00ff41]/30 shadow-2xl shadow-[#00ff41]/20"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-[#00ff41]/30 animate-pulse"></div>
                {/* Floating particles */}
                <div className="absolute top-10 right-10 w-2 h-2 bg-[#00ff41] rounded-full animate-ping"></div>
                <div className="absolute bottom-10 left-10 w-1 h-1 bg-[#00ff41] rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;
