
import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Collaborative Study Planner',
      description: 'A comprehensive study planning platform with group collaboration features',
      image: '/lovable-uploads/5dde20b4-c9ce-45bc-a44d-da86264477f0.png',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'OpenWeather API', 'Tailwind CSS'],
      github: '#',
      live: 'https://cloudpointapp.netlify.app',
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-[#00ff41]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00ff41]/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm relative"
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
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a 
                      href={project.github}
                      className="p-3 bg-[#00ff41] text-black rounded-full hover:bg-[#00ff41]/90 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.live}
                      className="p-3 bg-[#00ff41] text-black rounded-full hover:bg-[#00ff41]/90 transition-all duration-300 hover:scale-110 shadow-lg"
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ff41]/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Portfolio;
