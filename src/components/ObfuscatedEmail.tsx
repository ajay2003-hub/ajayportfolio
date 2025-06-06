
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface ObfuscatedEmailProps {
  className?: string;
}

const ObfuscatedEmail: React.FC<ObfuscatedEmailProps> = ({ className = "" }) => {
  const [showEmail, setShowEmail] = useState(false);
  
  const email = 'ajykumar284@gmail.com';
  const obfuscatedEmail = 'ajy****84@g****.com';
  
  const handleRevealEmail = () => {
    setShowEmail(true);
  };
  
  return (
    <div className={className}>
      <div className="text-white font-semibold">Email</div>
      <div className="text-gray-400 flex items-center gap-2">
        {showEmail ? (
          <a href={`mailto:${email}`} className="hover:text-[#00ff41] transition-colors">
            {email}
          </a>
        ) : (
          <span 
            onClick={handleRevealEmail}
            className="cursor-pointer hover:text-[#00ff41] transition-colors flex items-center gap-1"
            title="Click to reveal email"
          >
            {obfuscatedEmail}
            <Mail size={12} />
          </span>
        )}
      </div>
    </div>
  );
};

export default ObfuscatedEmail;
