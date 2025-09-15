import React from 'react';
import { ChevronDown, Download, MapPin, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1z_VbzSNoBF3ELZXly9Clzk8I3oVXbN5i/view?usp=sharing', '_blank');
  };

  const scrollToProject = () => {
    try {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Projects section not found');
      }
    } catch (error) {
      console.error('Error scrolling to projects:', error);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-yellow-500 text-sm font-medium">Available for new opportunities</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight">
                <span className="text-yellow-500">Ferdy</span> Atmaja
              </h1>
              
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl text-white font-light">
                  Fresh Graduate Developer
                </p>
                <p className="text-lg text-yellow-500 font-medium">
                  <a 
                    href="https://www.16personalities.com/intp-personality" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-4"
                  >
                    INTP
                  </a> • Problem Solver • Ready to Learn
                </p>
              </div>
              
              <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                Passionate about creating innovative digital solutions through modern web technologies and machine learning. Ready to contribute fresh ideas and grow with your team.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={downloadCV}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-yellow-500/25 hover:scale-105 focus:outline-none"
              >
                <Download className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button
                onClick={scrollToProject}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-yellow-500 border-2 border-yellow-500/50 rounded-xl hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300 focus:outline-none"
              >
                <span>View My Work</span>
              </button>
            </div>
            
            {/* Quick Contact Info */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Sidoarjo, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">ferdy.atmaja308@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Professional Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Professional Card */}
              <div className="w-80 h-96 bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 shadow-2xl">
                {/* Profile Image */}
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-yellow-500/50">
                  <img 
                    src="/images/profile3.jpg" 
                    alt="Ferdy Atmaja" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center';
                      fallback.innerHTML = '<span class="text-2xl font-bold text-black">FA</span>';
                      e.currentTarget.parentElement.appendChild(fallback);
                    }}
                  />
                </div>
                
                {/* Professional Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-white">Ferdy Atmaja</h3>
                  <p className="text-yellow-500 font-medium">Fresh Graduate Developer</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-500">2025</p>
                      <p className="text-xs text-gray-400">Graduate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-500">10+</p>
                      <p className="text-xs text-gray-400">Personal Projects</p>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <a href="https://github.com/ferdyatmaja" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition-colors">
                      <Github className="w-5 h-5 text-yellow-500" />
                    </a>
                    <a href="https://linkedin.com/in/ferdy-atmaja" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-yellow-500" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-yellow-500/30 rounded-bl-2xl"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToProject}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-yellow-400 transition-colors duration-200 cursor-pointer focus:outline-none"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8 text-yellow-500 hover:text-yellow-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;