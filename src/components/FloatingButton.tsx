import React, { useState, useEffect, useMemo } from 'react';
import { MessageCircle } from 'lucide-react';
import { throttle } from '../utils/throttle';

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const throttledScrollHandler = useMemo(
    () => throttle(() => setIsVisible(window.pageYOffset > 300), 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler);
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [throttledScrollHandler]);

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