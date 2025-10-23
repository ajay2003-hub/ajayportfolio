
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'REST APIs', level: 90 },
        { name: 'Hibernate', level: 82 }
      ]
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'JDBC', level: 85 }
      ]
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Maven', level: 85 },
        { name: 'Postman', level: 88 },
        { name: 'Docker', level: 72 }
      ]
    }
  ];

  // Flatten all skills into a single array
  const allSkills = skillCategories.flatMap(cat => cat.skills.map(skill => skill.name));
  return (
    <section id="skills" className="py-20 bg-zinc-900 relative overflow-hidden">
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
          {/* Marquee 1: left to right */}
          <div className="overflow-hidden w-full py-4 mb-6 relative">
            <div className="flex whitespace-nowrap animate-marquee-ltr gap-8">
              {allSkills.map((skill, i) => (
                <span key={i} className="px-6 py-2 bg-zinc-800 rounded-full text-[#00ff41] text-lg font-semibold shadow-lg border border-[#00ff41]/30">{skill}</span>
              ))}
              {/* Repeat for infinite effect */}
              {allSkills.map((skill, i) => (
                <span key={i + 'r'} className="px-6 py-2 bg-zinc-800 rounded-full text-[#00ff41] text-lg font-semibold shadow-lg border border-[#00ff41]/30">{skill}</span>
              ))}
            </div>
          </div>
          {/* Marquee 2: right to left */}
          <div className="overflow-hidden w-full py-4 relative">
            <div className="flex whitespace-nowrap animate-marquee-rtl gap-8">
              {allSkills.map((skill, i) => (
                <span key={i + 'rtl'} className="px-6 py-2 bg-zinc-800 rounded-full text-[#00ff41] text-lg font-semibold shadow-lg border border-[#00ff41]/30">{skill}</span>
              ))}
              {/* Repeat for infinite effect */}
              {allSkills.map((skill, i) => (
                <span key={i + 'rtl2'} className="px-6 py-2 bg-zinc-800 rounded-full text-[#00ff41] text-lg font-semibold shadow-lg border border-[#00ff41]/30">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff41]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ff41]/3 rounded-full blur-3xl"></div>
      {/* Marquee Animations */}
      <style>{`
        .animate-marquee-ltr {
          animation: marquee-ltr 22s linear infinite;
        }
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 22s linear infinite;
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
