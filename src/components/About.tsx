import React from 'react';
import { Code, Brain, Rocket, Zap, Globe, Layers } from 'lucide-react';
import { useScrollAnimation } from '../hooks';

const About: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" ref={sectionRef} className={`py-24 bg-gradient-to-b from-black to-gray-900 ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        {/* Section heading with animated underline */}
        <div className="relative z-10 mb-20">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl lg:text-6xl font-bold text-white font-serif mb-4">
              About <span className="text-yellow-500">Me</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 rounded-full mb-8"></div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left column - Profile */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative mb-8">
              {/* Profile image with frame */}
              <div className="relative w-72 h-96 overflow-hidden rounded-2xl border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/10">
                <img
                  src="/images/profile.jpg"
                  alt="Ferdy Atmaja Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Ferdy Atmaja</h3>
                  <p className="text-yellow-500 font-medium">Fresh Graduate Developer</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-yellow-500/30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-yellow-500/30"></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 w-full mt-6">
              <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300">
                <p className="text-3xl font-bold text-yellow-500 mb-1">2025</p>
                <p className="text-sm text-gray-400">Graduate</p>
              </div>
              <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300">
                <p className="text-3xl font-bold text-yellow-500 mb-1">10+</p>
                <p className="text-sm text-gray-400">Personal Projects</p>
              </div>
              <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300">
                <p className="text-3xl font-bold text-yellow-500 mb-1">3.82</p>
                <p className="text-sm text-gray-400">GPA</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Bio and expertise */}
          <div className="lg:col-span-7 space-y-10">
            {/* Bio with animated border */}
            <div className="relative p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/20 overflow-hidden group hover:border-yellow-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-yellow-500 mb-6 relative z-10">My Story</h3>
              
              <div className="space-y-4 text-lg leading-relaxed relative z-10">
                <p className="text-white">
                  I am a <span className="text-yellow-500 font-semibold">Fresh Graduate Developer</span> with a strong focus on 
                  <span className="text-yellow-500 font-semibold"> Backend Programming</span> and 
                  <span className="text-yellow-500 font-semibold"> Machine Learning</span>, driven by a passion for building intelligent systems that create real-world impact.
                </p>
                <p className="text-gray-300">
                  Through academic projects and independent learning, I have developed expertise in designing scalable backend architectures with Node.js and Python, and implementing machine learning algorithms including Naive Bayes classification, LDA topic modeling using Gensim, scikit-learn, etc.
                </p>
                <p className="text-gray-300">
                  I am actively expanding my skills in Artificial Intelligence and backend technologies to deepen my expertise and stay current with industry trends. My <a href="https://www.16personalities.com/intp-personality" target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors duration-200 underline decoration-dotted underline-offset-2">INTP personality</a> empowers me to approach challenges analytically, embrace new technologies, and innovate with purpose.
                </p>
              </div>
            </div>
            
            {/* Expertise cards */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">My Expertise</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Backend Development</h4>
                  </div>
                  <p className="text-gray-400">Building secure server-side applications and REST APIs with Node.js and Python.</p>
                </div>
                
                <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mr-4">
                      <Brain className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Machine Learning & AI</h4>
                  </div>
                  <p className="text-gray-400">Implementing classification algorithms and topic modeling using Naive Bayes, LDA with Gensim, scikit-learn, etc.</p>
                </div>
                
                <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mr-4">
                      <Layers className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Data Engineering</h4>
                  </div>
                  <p className="text-gray-400">Creating data pipelines and ETL processes for analytics and machine learning.</p>
                </div>
                
                <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Cloud Solutions</h4>
                  </div>
                  <p className="text-gray-400">Deploying scalable systems on AWS and Google Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* What I Do section */}
        <div className="mt-24 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white font-serif mb-4">What I <span className="text-yellow-500">Do</span></h3>
            <div className="h-1 w-16 bg-yellow-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl group">
              <div className="h-full p-8 bg-gray-900 rounded-lg flex flex-col items-center text-center group-hover:bg-gray-900/95 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Web Applications</h4>
                <p className="text-gray-400">Building fast, responsive, and user-friendly web applications with modern technologies.</p>
              </div>
            </div>
            
            <div className="p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl group">
              <div className="h-full p-8 bg-gray-900 rounded-lg flex flex-col items-center text-center group-hover:bg-gray-900/95 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">AI Solutions</h4>
                <p className="text-gray-400">Developing intelligent systems that leverage machine learning and data science.</p>
              </div>
            </div>
            
            <div className="p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl group">
              <div className="h-full p-8 bg-gray-900 rounded-lg flex flex-col items-center text-center group-hover:bg-gray-900/95 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Performance Optimization</h4>
                <p className="text-gray-400">Enhancing application speed, efficiency, and scalability for optimal user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;