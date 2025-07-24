import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks';

const Contact: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });



  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ferdy.atmaja308@gmail.com',
      href: 'mailto:ferdy.atmaja308@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/ferdyatmaja',
      href: 'https://github.com/ferdyatmaja',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ferdyatmaja',
      href: 'https://linkedin.com/in/ferdy-atmaja',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className={`py-24 bg-gradient-to-b from-black to-gray-900 ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
            Let's <span className="text-yellow-500">Connect</span>
          </h2>
          <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/10 rounded-xl p-8 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-500/10 flex flex-col items-center text-center h-full transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20 mb-4 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/20 transition-all duration-300">
                    <detail.icon className="w-8 h-8 text-yellow-500 group-hover:text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{detail.label}</h3>
                  <p className="text-gray-400 group-hover:text-yellow-400 transition-colors duration-300 text-sm">{detail.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing teams. 
              Whether you have a specific project in mind or just want to chat about possibilities, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ferdy.atmaja308@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/ferdy-atmaja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-yellow-500/50 text-yellow-500 font-medium rounded-xl hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;