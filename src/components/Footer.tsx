import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ferdyatmaja', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ferdyatmaja', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@ferdyatmaja.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-yellow-500/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center items-center mb-4">
          <span className="font-serif text-xl text-white">Ferdy Atmaja</span>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        {/* <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;