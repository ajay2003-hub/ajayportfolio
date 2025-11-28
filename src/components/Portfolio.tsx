
import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Collaborative Study Planner',
      description: 'A comprehensive study planning platform with group collaboration features',
      image: '/lovable-uploads/5dde20b4-c9ce-45bc-a44d-da86264477f0.png',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/ajay2003-hub/studyCollabUI',
      live: 'https://lucky-narwhal-e9b91a.netlify.app',
      featured: true
    },
    {
      title: 'Refokus',
      description: 'Refokus is a top Webflow Agency combining high-end design with Webflow Development expertise.',
  // ...existing code...
      image: './lovable-uploads/refokus.png',
      tech: ['React.js', 'Animation'],
      github: 'https://github.com/ajay2003-hub/refokus',
      live: 'https://refokuus.netlify.app',
      featured: false
    },
    {
      title: 'Movieist-FullStack',
      description: 'A full-stack movie streaming platform with secure authentication and user watchlist management',
      image: '/lovable-uploads/movieist-fullstack.png',
      tech: ['Spring Boot', 'Spring Security', 'JWT', 'React'],
      github: 'https://github.com/ajay2003-hub/movieist',
      live: 'https://movie4u-api.netlify.app',
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-[#00ff41]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-800/80 to-zinc-900/60 rounded-3xl overflow-hidden border border-[#00ff41]/30 shadow-2xl hover:shadow-[#00ff41]/40 hover:border-[#00ff41] transition-all duration-500 hover:scale-105 backdrop-blur-lg relative animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 bg-[#00ff41]/20 rounded-full border border-[#00ff41]/50">
                    <Star size={12} className="text-[#00ff41] fill-current" />
                    <span className="text-[#00ff41] text-xs font-medium">Featured</span>
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      className="p-3 bg-[#00ff41] text-black rounded-full hover:bg-[#00ff41]/90 transition-all duration-300 hover:scale-110 shadow-lg"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 bg-[#00ff41] text-black rounded-full hover:bg-[#00ff41]/90 transition-all duration-300 hover:scale-110 shadow-lg"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00ff41] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#00ff41]/10 text-[#00ff41] text-sm rounded-full border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ff41]/3 rounded-full blur-3xl"></div>
      {/* Fade-in animation */}
      <style>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInPortfolio 1s cubic-bezier(.4,2,.3,1) forwards;
        }
        @keyframes fadeInPortfolio {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
