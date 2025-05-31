
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const SocialSidebar = () => {
  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ajay-kumar-24349b335/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/ajay2003-hub', label: 'GitHub' },
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#00ff41] transition-all duration-300 hover:scale-110 p-2"
          aria-label={social.label}
        >
          <social.icon size={24} />
        </a>
      ))}
      <div className="w-px h-20 bg-gray-600 mx-auto mt-4"></div>
    </div>
  );
};

export default SocialSidebar;
