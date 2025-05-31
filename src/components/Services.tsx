
import React from 'react';
import { Code, Database, Smartphone, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'Building modern, scalable web applications using cutting-edge technologies and best practices.',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design']
    },
    {
      icon: Database,
      title: 'API & Backend Architecture',
      description: 'Designing robust backend systems and RESTful APIs that power seamless user experiences.',
      features: ['Node.js/Express', 'Database Design', 'Authentication']
    },
    {
      icon: Smartphone,
      title: 'Responsive UI Design',
      description: 'Creating pixel-perfect, mobile-first interfaces that work flawlessly across all devices.',
      features: ['Mobile-First', 'Cross-Browser', 'Performance']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and superior user experience.',
      features: ['Code Splitting', 'Caching', 'SEO Ready']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="text-[#00ff41]">Do</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-2xl border border-gray-800 hover:border-[#00ff41]/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="p-3 bg-[#00ff41]/10 rounded-xl border border-[#00ff41]/30">
                      <service.icon 
                        size={32} 
                        className="text-[#00ff41] group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <ArrowRight className="text-gray-600 group-hover:text-[#00ff41] group-hover:translate-x-2 transition-all duration-300" size={20} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00ff41] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-[#00ff41]/10 text-[#00ff41] text-xs rounded-full border border-[#00ff41]/30 group-hover:bg-[#00ff41]/20 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00ff41]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00ff41]/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Services;
