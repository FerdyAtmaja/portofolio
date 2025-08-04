import React, { useState } from 'react';
import { ExternalLink, Github, BookOpen, Calendar, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks';
import { articles } from '../data/articles';

// Add custom scrollbar styles
const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(234, 179, 8, 0.3);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(234, 179, 8, 0.5);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = customScrollbarStyles;
  document.head.appendChild(styleSheet);
}

// Format date to dd mmmm yyyy
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });
};

const Projects: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('projects');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

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
              {articles.slice(0, 4).map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
                          <span>{formatDate(article.date)}</span>
                          <span>•</span>
                          <span className="px-2 py-0.5 text-xs bg-gray-700/50 text-gray-300 rounded">{article.type}</span>
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
                        <ExternalLink className="w-5 h-5 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  setCurrentPage(1);
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200"
              >
                <BookOpen className="w-5 h-5" />
                <span>View All Articles</span>
              </button>
            </div>
          </div>
        )}

        {/* Articles Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Soft Backdrop */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            ></div>
            
            {/* Modal Container */}
            <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl border border-yellow-500/20 shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
              {/* Subtle Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-500/3 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-yellow-500/3 rounded-full blur-2xl"></div>
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-yellow-500/15">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">
                      All <span className="text-yellow-500">Articles</span>
                    </h3>
                    <p className="text-gray-400 text-sm">Technical insights and thoughts</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/15 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-yellow-500" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)] custom-scrollbar">
                <div className="space-y-5 mb-6">
                  {(() => {
                    const startIndex = (currentPage - 1) * articlesPerPage;
                    const endIndex = startIndex + articlesPerPage;
                    const currentArticles = articles.slice(startIndex, endIndex);
                    
                    return currentArticles.map((article) => (
                      <a
                        key={article.id}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-black/30 backdrop-blur-sm rounded-xl border border-yellow-500/10 hover:border-yellow-500/25 transition-all duration-300 p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-4">
                            {/* Meta Info */}
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="px-3 py-1 text-xs bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20">
                                {article.category}
                              </span>
                              <div className="flex items-center text-gray-400 text-sm space-x-2">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(article.date)}</span>
                                <span>•</span>
                                <span className="px-2 py-0.5 text-xs bg-gray-700/50 text-gray-300 rounded">{article.type}</span>
                              </div>
                            </div>
                            
                            {/* Title */}
                            <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-200 mb-2 leading-snug">
                              {article.title}
                            </h4>
                            
                            {/* Excerpt */}
                            <p className="text-gray-300 leading-relaxed text-sm">
                              {article.excerpt}
                            </p>
                            
                            {/* Read More */}
                            <div className="flex items-center mt-3 text-yellow-500 text-sm group-hover:text-yellow-400 transition-colors">
                              <span>Read more</span>
                              <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </div>
                          </div>
                          
                          {/* Action Button */}
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/15 flex items-center justify-center group-hover:bg-yellow-500/15 group-hover:border-yellow-500/25 transition-all duration-200">
                              <ExternalLink className="w-4 h-4 text-yellow-500" />
                            </div>
                          </div>
                        </div>
                      </a>
                    ));
                  })()
                }
                </div>
                
                {/* Pagination */}
                {(() => {
                  const totalPages = Math.ceil(articles.length / articlesPerPage);
                  if (totalPages <= 1) return null;
                  
                  return (
                    <div className="flex items-center justify-between bg-black/20 rounded-xl border border-yellow-500/10 p-4">
                      <div className="text-sm text-gray-400">
                        Showing <span className="text-yellow-400">{((currentPage - 1) * articlesPerPage) + 1}-{Math.min(currentPage * articlesPerPage, articles.length)}</span> of <span className="text-yellow-400">{articles.length}</span> articles
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="p-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/15 border border-yellow-500/15 hover:border-yellow-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                          <ChevronLeft className="w-4 h-4 text-yellow-500" />
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                              currentPage === page
                                ? 'bg-yellow-500 text-black'
                                : 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/15 border border-yellow-500/15 hover:border-yellow-500/25'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                        
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="p-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/15 border border-yellow-500/15 hover:border-yellow-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                          <ChevronRight className="w-4 h-4 text-yellow-500" />
                        </button>
                      </div>
                    </div>
                  );
                })()
              }
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;