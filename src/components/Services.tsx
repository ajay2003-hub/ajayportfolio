
import React from 'react';
import { Code, Database, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'Building modern, scalable web applications using cutting-edge technologies and best practices.'
    },
    {
      icon: Database,
      title: 'API & Backend Architecture',
      description: 'Designing robust backend systems and RESTful APIs that power seamless user experiences.'
    },
    {
      icon: Smartphone,
      title: 'Responsive UI Design',
      description: 'Creating pixel-perfect, mobile-first interfaces that work flawlessly across all devices.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and superior user experience.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="text-[#00ff41]">Do</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#00ff41]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <service.icon 
                    size={48} 
                    className="text-[#00ff41] group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00ff41] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
