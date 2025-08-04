import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black rounded-full shadow-2xl hover:shadow-yellow-500/25 flex items-center justify-center z-50 transition-all duration-500 ease-in-out focus:outline-none ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      } hover:scale-110`}
      aria-label="Contact Me"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingButton;