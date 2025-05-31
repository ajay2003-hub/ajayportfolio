
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tech: ['React', 'Chart.js', 'Express', 'MySQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'OpenWeather API', 'Tailwind CSS'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-[#00ff41]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-[#00ff41]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a 
                      href={project.github}
                      className="p-2 bg-[#00ff41] text-black rounded-full hover:bg-[#00ff41]/90 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.live}
                      className="p-2 bg-[#00ff41] text-black rounded-full hover:bg-[#00ff41]/90 transition-colors duration-300"
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
                        className="px-3 py-1 bg-[#00ff41]/10 text-[#00ff41] text-sm rounded-full border border-[#00ff41]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
