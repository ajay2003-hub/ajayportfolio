
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 82 }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 83 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 86 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'MySQL', level: 78 }
      ]
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 72 },
        { name: 'CI/CD', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Tech <span className="text-[#00ff41]">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-2xl border border-gray-800 hover:border-[#00ff41]/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-[#00ff41] group-hover:text-white transition-colors duration-300">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-[#00ff41]" />
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                          </div>
                          <span className="text-[#00ff41] text-xs bg-[#00ff41]/10 px-2 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-[#00ff41] to-[#00ff41]/70 h-2 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-[#00ff41]/30"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff41]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ff41]/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Skills;
