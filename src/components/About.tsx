
import React from 'react';
import { Code2, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/60 border border-[#00ff41]/20 shadow-xl backdrop-blur-lg px-8 py-14 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Text, Cards, Skills */}
            <div className="flex-1 flex flex-col justify-center items-start text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white animate-fade-in">About <span className="text-[#00ff41]">Me</span></h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">Results-driven Java Full Stack Developer specializing in backend development with Spring Boot and RESTful APIs. Proficient in Java, React.js, MySQL, and scalable system design. Strong in Data Structures, Algorithms, and analytical problem-solving, with a focus on writing clean, efficient, and maintainable code.</p>
              {/* Cards */}
              <div className="grid grid-cols-2 gap-6 mb-8 w-full max-w-md">
                <div className="text-center p-6 bg-zinc-900 rounded-xl border border-[#00ff41]/30 shadow group">
                  <Code2 className="mx-auto mb-3 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" size={32} />
                  <div className="text-2xl font-bold text-[#00ff41] mb-1">10+</div>
                  <div className="text-gray-300 text-sm">Projects</div>
                </div>
                <div className="text-center p-6 bg-zinc-900 rounded-xl border border-[#00ff41]/30 shadow group">
                  <Zap className="mx-auto mb-3 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" size={32} />
                  <div className="text-2xl font-bold text-[#00ff41] mb-1">Udaipur</div>
                  <div className="text-gray-300 text-sm">Based in</div>
                </div>
              </div>
              {/* Skills */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
                <div className="flex flex-wrap gap-6">
                  <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10 mb-2" />
                    <span className="text-[#00ff41] text-sm">Java</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-10 h-10 mb-2" />
                    <span className="text-[#00ff41] text-sm">Spring Boot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 mb-2" />
                    <span className="text-[#00ff41] text-sm">React.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 mb-2" />
                    <span className="text-[#00ff41] text-sm">MySQL</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 mb-2" />
                    <span className="text-[#00ff41] text-sm">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10 mb-2" />
                    <span className="text-[#00ff41] text-sm">Git</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Profile Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                {/* Profile image with animation */}
                <img
                  src="/lovable-uploads/880fdf99-648d-4fd8-8263-af19d15256fc.png"
                  alt="Ajay Kumar"
                  className="w-96 h-96 object-cover rounded-full shadow-2xl animate-image-slide-in"
                  style={{ position: 'relative', zIndex: 1 }}
                />
                {/* Decorative background shapes */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-10 left-10 w-32 h-2 bg-[#00ff41]/20 rounded-full opacity-40 rotate-12"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-2 bg-[#00ff41]/20 rounded-full opacity-30 -rotate-6"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-2 bg-[#00ff41]/10 rounded-full opacity-20 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fade-in animation */}
      <style>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInAbout 1s cubic-bezier(.4,2,.3,1) forwards;
        }
        @keyframes fadeInAbout {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-image-slide-in {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          animation: imageSlideIn 1.2s cubic-bezier(.4,2,.3,1) 0.3s forwards;
        }
        @keyframes imageSlideIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
