import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks';
import { Gauge, Rocket, Cpu, Share2, Globe, Bot, Brain, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('technical');
  
  // Technical skills with logo paths - only 9 skills displayed
  const technicalSkills = [
    { name: 'React', logoPath: '/logos/react.svg' },
    { name: 'Python', logoPath: '/logos/python.svg' },
    { name: 'MySQL', logoPath: '/logos/mysql.svg' },
    { name: 'GitHub', logoPath: '/logos/github.svg' },
    { name: 'Tailwind CSS', logoPath: '/logos/tailwind.svg' },
    { name: 'Laravel', logoPath: '/logos/laravel.svg' },
    { name: 'Java', logoPath: '/logos/java.svg' },
    { name: 'Go', logoPath: '/logos/go.svg' },
    { name: 'Flask', logoPath: '/logos/flask.svg' },
  ];

  const softSkills = [
    { name: 'Analytical Thinking', level: 95, isINTP: true },
    { name: 'Problem Solving', level: 95, isINTP: true },
    { name: 'Innovation & Creativity', level: 90, isINTP: true },
    { name: 'Independent Learning', level: 95, isINTP: true },
    { name: 'Communication', level: 85 },
    { name: 'Teamwork', level: 85 },
    { name: 'Adaptability', level: 90 },
    { name: 'Time Management', level: 80 },
  ];

  const currentlyLearning = [
    {
      name: 'Next.js 14',
      progress: 75,
      description: 'Exploring App Router and Server Components for full-stack development.',
      icon: Rocket
    },
    {
      name: 'Rust',
      progress: 40,
      description: 'Focusing on performance, memory safety, and systems programming.',
      icon: Cpu
    },
    {
      name: 'Kubernetes',
      progress: 60,
      description: 'Learning container orchestration for scalable and resilient applications.',
      icon: Share2
    },
    {
      name: 'GraphQL',
      progress: 80,
      description: 'Building efficient and flexible APIs for modern applications.',
      icon: Globe
    },
    {
      name: 'Web3',
      progress: 50,
      description: 'Diving into decentralized applications and blockchain technology.',
      icon: Bot
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className={`py-24 bg-gradient-to-b from-gray-900 to-black ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
            Skills & <span className="text-yellow-500">Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-black/30 backdrop-blur-sm rounded-xl border border-yellow-500/20">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'technical' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:text-white'}`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'soft' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:text-white'}`}
            >
              Soft Skills
            </button>
            <button
              onClick={() => setActiveTab('learning')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'learning' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:text-white'}`}
            >
              Currently Learning
            </button>
          </div>
        </div>

        {/* Technical Skills Tab */}
        {activeTab === 'technical' && (
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {/* First row - 5 items */}
              <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-8 md:gap-12">
                  {technicalSkills.slice(0, 5).map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group relative flex items-center justify-center"
                    >
                      {/* Main logo container */}
                      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-black/40 backdrop-blur-sm rounded-2xl border border-yellow-500/10 flex items-center justify-center transition-all duration-500 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/5 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                        <img 
                          src={skill.logoPath} 
                          alt={`${skill.name} logo`} 
                          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 font-bold text-lg';
                            fallback.textContent = skill.name.charAt(0);
                            e.currentTarget.parentElement.appendChild(fallback);
                          }}
                        />
                      </div>
                      
                      {/* Floating background effect */}
                      <div className="absolute inset-0 bg-yellow-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      
                      {/* Tooltip on hover */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-yellow-500 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Second row - 4 items centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-8 md:gap-12">
                  {technicalSkills.slice(5, 9).map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group relative flex items-center justify-center"
                    >
                      {/* Main logo container */}
                      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-black/40 backdrop-blur-sm rounded-2xl border border-yellow-500/10 flex items-center justify-center transition-all duration-500 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/5 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                        <img 
                          src={skill.logoPath} 
                          alt={`${skill.name} logo`} 
                          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 font-bold text-lg';
                            fallback.textContent = skill.name.charAt(0);
                            e.currentTarget.parentElement.appendChild(fallback);
                          }}
                        />
                      </div>
                      
                      {/* Floating background effect */}
                      <div className="absolute inset-0 bg-yellow-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      
                      {/* Tooltip on hover */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-yellow-500 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Soft Skills Tab */}
        {activeTab === 'soft' && (
          <div className="max-w-5xl mx-auto">
            {/* INTP Personality Highlight */}
            <div className="mb-12 text-center">
              <a 
                href="https://www.16personalities.com/intp-personality" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm rounded-2xl border border-yellow-500/20 px-6 py-4 mb-6 hover:border-yellow-500/40 hover:bg-gradient-to-r hover:from-yellow-500/15 hover:to-yellow-600/15 transition-all duration-300 cursor-pointer"
              >
                <Brain className="w-8 h-8 text-yellow-500 mr-3" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white hover:text-yellow-400 transition-colors duration-200">INTP Personality</h3>
                  <p className="text-yellow-500 text-sm font-medium">The Innovative Problem Solver</p>
                </div>
              </a>
              <p className="text-gray-300 max-w-3xl mx-auto">
                As an <a 
                  href="https://www.16personalities.com/intp-personality" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-2"
                >
                  INTP
                </a>, I excel at breaking down complex problems, thinking outside the box, and creating innovative solutions through logical analysis and creative exploration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className={`bg-black/40 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    skill.isINTP 
                      ? 'border-yellow-500/30 hover:border-yellow-500/50 bg-gradient-to-br from-yellow-500/5 to-transparent' 
                      : 'border-yellow-500/10 hover:border-yellow-500/30'
                  }`}
                >
                  {skill.isINTP && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Lightbulb className="w-3 h-3 text-yellow-500" />
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                    <span className="text-yellow-500 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        skill.isINTP 
                          ? 'bg-gradient-to-r from-yellow-300 to-yellow-500' 
                          : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  {skill.isINTP && (
                    <div className="mt-2 text-xs text-yellow-400 font-medium">
                      INTP Strength
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    <a 
                      href="https://www.16personalities.com/intp-personality" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-4"
                    >
                      INTP
                    </a> Mindset
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  My <a 
                    href="https://www.16personalities.com/intp-personality" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-2"
                  >
                    INTP personality
                  </a> drives me to approach every project with deep analytical thinking and innovative problem-solving. 
                  I excel at understanding complex systems, identifying patterns, and creating elegant solutions that others might overlook.
                </p>
              </div>
              
              <div className="p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
                    <Gauge className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Impact</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  This analytical nature, combined with strong technical skills, allows me to deliver innovative solutions that exceed expectations. 
                  I thrive in environments that value creative thinking and continuous learning.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Currently Learning Tab */}
        {activeTab === 'learning' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentlyLearning.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mr-4">
                      <tech.icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{tech.name}</h4>
                      <div className="flex items-center mt-1">
                        <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden mr-3">
                          <div 
                            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                            style={{ width: `${tech.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-yellow-500 font-medium">{tech.progress}% Complete</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 ml-16">{tech.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-400 max-w-3xl mx-auto italic">
                "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
              </p>
              <p className="text-yellow-500 mt-2">— Brian Herbert</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;