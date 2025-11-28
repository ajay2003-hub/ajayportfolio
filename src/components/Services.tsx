
import React from 'react';
import { useState } from 'react';
import { Code, Database, Smartphone, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  // Color themes for each service
  const colorTheme = {
    bg: 'bg-[#23244a]',
    glow: 'shadow-[0_0_40px_0_#00ff41]',
    icon: 'text-[#00ff41]',
    iconActive: 'text-[#00ff41]',
    title: 'text-white',
    titleActive: 'text-[#00ff41]',
    feature: 'bg-[#23244a] text-[#00ff41] border-[#00ff41]/30',
    featureActive: 'bg-[#23244a] text-[#00ff41] border-[#00ff41]/30',
    border: 'border-[#00ff41]'
  };

  const [active, setActive] = useState(-1);
  const services = [
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust, scalable backend systems with Spring Boot and RESTful APIs.',
      features: ['Spring Boot', 'REST APIs', 'Microservices']
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with Java backend and React frontend.',
      features: ['Java/Spring', 'React.js', 'MySQL']
    },
    {
      icon: Smartphone,
      title: 'API Integration',
      description: 'Creating and integrating secure, efficient APIs for seamless data flow.',
      features: ['RESTful APIs', 'Authentication', 'Security']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden flex justify-center items-center min-h-[350px]">
      {/* Gradient Stripe Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[90vw] max-w-7xl h-[200px] rounded-3xl bg-gradient-to-r from-[#23244a] via-[#1e2a4f] to-[#1e90ff] opacity-80 shadow-2xl" />
      </div>
      <div className="relative w-full flex justify-center items-center">
        <div className="flex flex-row gap-8 w-[90vw] max-w-7xl px-4 py-8">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <div
                key={index}
                className={`group flex-1 min-w-[220px] max-w-xs ${colorTheme.bg} rounded-2xl border ${colorTheme.border} shadow-xl backdrop-blur-lg px-8 py-10 flex flex-col items-center justify-center transition-all duration-500 relative cursor-pointer ${isActive ? colorTheme.glow : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                onClick={() => setActive(index)}
              >
                <div className="flex flex-col items-center mb-2">
                  <service.icon size={isActive ? 44 : 32} className={`mb-2 transition-all duration-300 ${isActive ? colorTheme.iconActive : colorTheme.icon}`} />
                  <span className={`text-lg font-semibold mb-2 text-center transition-colors duration-300 ${isActive ? colorTheme.titleActive : colorTheme.title}`}>{service.title}</span>
                </div>
                <div className={`text-xs text-center mb-2 transition-colors duration-300 text-zinc-300`}>{service.description}</div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`px-3 py-1 rounded-full border text-xs transition-colors duration-300 ${colorTheme.feature}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <ArrowRight className={`absolute top-6 right-6 transition-all duration-300 ${isActive ? colorTheme.iconActive : colorTheme.icon} ${isActive ? 'scale-125' : ''}`} size={isActive ? 28 : 20} />
              </div>
            );
          })}
        </div>
      </div>
      {/* Custom Animations */}
      <style>{`
        #services .group {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeStripeIn 1s cubic-bezier(.4,2,.3,1) forwards;
        }
        @keyframes fadeStripeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
