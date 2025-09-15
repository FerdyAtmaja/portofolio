import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { experiences } from '../data/experiences';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4" />;
      case 'training':
        return <GraduationCap className="w-4 h-4" />;
      case 'certification':
        return <Award className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/25';
      case 'training':
        return 'bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-lg shadow-yellow-500/20';
      case 'certification':
        return 'bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-400/30';
      default:
        return 'bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/25';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 to-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div
          ref={ref}
          className={`text-center mb-16 relative z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
            Experience & <span className="text-yellow-500">Training</span>
          </h2>
          <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and continuous learning path
          </p>
        </div>

        <div className="relative z-10">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 shadow-sm"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-5 w-8 h-8 rounded-full ${getTypeColor(exp.type)} flex items-center justify-center text-black z-10 border-2 border-yellow-400/20`}>
                {getIcon(exp.type)}
              </div>

              {/* Content Card */}
              <div className="ml-20 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 hover:border-yellow-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white mb-1 sm:mb-0">
                    {exp.title}
                  </h3>
                  <span className="text-yellow-400 text-sm font-medium">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 font-medium mb-4">
                  {exp.company}
                </p>

                <p className="text-gray-400 mb-4">
                  {exp.description[0]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 text-yellow-400 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;