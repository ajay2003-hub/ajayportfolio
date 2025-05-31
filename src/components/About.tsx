
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-[#00ff41]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto"></div>
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
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-black/50 rounded-lg border border-gray-800">
                  <div className="text-3xl font-bold text-[#00ff41] mb-2">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-black/50 rounded-lg border border-gray-800">
                  <div className="text-3xl font-bold text-[#00ff41] mb-2">Udaipur</div>
                  <div className="text-gray-400">Based in</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-[#00ff41]/20 to-transparent rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center text-6xl text-gray-400">
                    RM
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-[#00ff41]/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
