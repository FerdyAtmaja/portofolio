import React, { useState } from 'react';
import { ExternalLink, Github, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks';

const Projects: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('projects');

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include payment integration, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AI Image Recognition",
      description: "Machine learning application for image classification using TensorFlow and Python. Achieves 95% accuracy on custom datasets.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Vue.js", "Firebase", "Socket.io", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large React applications using TypeScript, including advanced patterns and performance optimization techniques.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      url: "#"
    },
    {
      id: 2,
      title: "Machine Learning Model Deployment with Docker",
      excerpt: "A comprehensive guide to containerizing and deploying ML models in production environments using Docker and cloud services.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Machine Learning",
      url: "#"
    },
    {
      id: 3,
      title: "Advanced State Management in Modern Web Apps",
      excerpt: "Exploring different state management solutions and when to use each approach in complex web applications.",
      date: "2023-12-22",
      readTime: "10 min read",
      category: "Web Development",
      url: "#"
    },
    {
      id: 4,
      title: "Optimizing Database Performance for High-Traffic Apps",
      excerpt: "Database optimization strategies and techniques for handling millions of requests with minimal latency.",
      date: "2023-12-15",
      readTime: "15 min read",
      category: "Backend",
      url: "#"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className={`py-24 bg-gradient-to-b from-black to-gray-900 ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
            My <span className="text-yellow-500">Work</span>
          </h2>
          <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects and technical articles
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-black/30 backdrop-blur-sm rounded-xl border border-yellow-500/20">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none ${activeTab === 'projects' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:text-white'}`}
            >
              Featured Projects
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none ${activeTab === 'articles' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:text-white'}`}
            >
              Articles & Insights
            </button>
          </div>
        </div>

        {/* Featured Projects Tab */}
        {activeTab === 'projects' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 px-3 py-2 border border-yellow-500/50 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-all duration-200 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {articles.map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  className="group block bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 p-6 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 text-xs bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div className="ml-6 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <ArrowRight className="w-5 h-5 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200"
              >
                <BookOpen className="w-5 h-5" />
                <span>View All Articles</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;