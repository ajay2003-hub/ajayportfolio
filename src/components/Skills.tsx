
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 82 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 83 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 86 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'MySQL', level: 78 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 72 },
        { name: 'CI/CD', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Tech <span className="text-[#00ff41]">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-2xl font-bold text-[#00ff41] mb-6 text-center">
                  {category.category}
                </h3>
                
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-[#00ff41] text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#00ff41] to-[#00ff41]/70 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
