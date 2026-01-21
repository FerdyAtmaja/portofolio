export const featuredProjects = [
  {
    id: 1,
    title: "Dr. Capsule: Retro Puzzle Game with Vanilla JavaScript",
    description: "A classic Dr. Mario-style puzzle game built with vanilla JavaScript and modern web technologies.",
    detailedDescription: "Dr. Capsule is an addictive falling-block puzzle game where strategy meets speed! Drop colorful capsules to eliminate dangerous viruses by creating matches of 4 or more blocks. With 20 progressively challenging levels, each stage tests your puzzle-solving skills to the limit. Built with pure vanilla JavaScript, HTML5, and CSS3, featuring modular architecture, smooth animations, and retro pixel art aesthetics with modern polish.",
    image: "/images/projects/dr-capsule-game.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM API", "Amazon Q"],
    features: ["20 Challenging Levels", "Chain Reactions", "Retro Pixel Art Style", "Responsive Design", "Level Selection", "Advanced Scoring System"],
    demoUrl: "https://ferdyatmaja.github.io/Dr-Capsule---Pill-Puzzle-Game/",
    githubUrl: "https://github.com/FerdyAtmaja/Dr-Capsule---Pill-Puzzle-Game"
  },
  {
    id: 2,
    title: "E-commerce Backend API - Evermos x Rakamin Academy",
    description: "Backend Developer in a Project-Based Virtual Internship building transactional e-commerce backend using Golang (Fiber) and MySQL.",
    detailedDescription: "I work as a Backend Developer in a Project-Based Virtual Internship at Evermos x Rakamin Academy, responsible for building a transactional e-commerce backend using Golang (Fiber) and MySQL. Implemented RESTful APIs covering authentication, user management, store creation, product catalog, transactions, and address management with strict access control and data ownership enforcement. Applied Clean Architecture principles by separating handlers, use cases, and repositories to ensure maintainability and scalability. Secured APIs using JWT-based authentication and middleware-level authorization, enforcing role-based access (Admin vs Seller vs Buyer) and preventing cross-user data access across all services. Designed and implemented business rules such as automatic store creation upon user registration, transactional product logging, pagination, filtering, and file upload handling. Followed predefined API contracts (Postman collection) to simulate real-world collaboration with frontend and mobile teams, while integrating external APIs for regional data.",
    image: "/images/projects/Evermos.png",
    technologies: ["Go", "Fiber", "MySQL", "JWT", "REST APIs", "Swagger API", "Postman API", "GitHub"],
    features: ["Clean Architecture", "JWT Authentication", "Role-based Access Control", "RESTful APIs", "File Upload Handling", "Pagination & Filtering"],
    demoUrl: null,
    githubUrl: "https://github.com/FerdyAtmaja/go-commerce"
  },
  {
    id: 3,
    title: "Forum API | Dicoding AWS Backend Academy (2025)",
    description: "REST API forum discussion built with Hapi.js using Clean Architecture and separation of handler, use case, and repository layers.",
    detailedDescription: "Built REST API forum discussion using Hapi.js with Clean Architecture and separation of handler, use case, and repository layers. Designed and managed PostgreSQL database for thread, comment, and reply features with ownership & access validation. Implemented JWT authentication and user-based access control. Created API documentation using Swagger (OpenAPI) for all endpoints. Applied CI/CD pipeline and deployed to VPS for production environment.",
    image: "/images/projects/ForumAPI.png",
    technologies: ["Node.js", "Hapi.js", "PostgreSQL", "REST API", "JWT", "Swagger", "CI/CD", "VPS"],
    features: ["Clean Architecture", "JWT Authentication", "User Access Control", "API Documentation", "CI/CD Pipeline", "Production Deployment"],
    demoUrl: null,
    githubUrl: "https://github.com/FerdyAtmaja/forum-api-V2"
  },
  {
    id: 4,
    title: "Gazory: Real-time IoT Dashboard for Soil Moisture Monitoring (Unfinished Project)",
    description: "IoT-based soil moisture monitoring web application with real-time data visualization and heatmap generation. (Work in Progress)",
    detailedDescription: "Gazory is a comprehensive IoT soil moisture monitoring system built with Flask and modern web technologies. The application features real-time sensor data collection, interactive heatmap visualization using Plotly, user authentication, and responsive dashboard. It includes advanced data interpolation algorithms for accurate soil moisture mapping, WebSocket integration for live updates, and a complete user management system with secure login functionality.",
    image: "/images/projects/soil-moisture.png",
    technologies: ["Python", "Flask", "SQLAlchemy", "Plotly", "SocketIO", "SQLite"],
    features: ["Real-time Data Monitoring", "Interactive Heatmap Visualization", "User Authentication", "WebSocket Integration", "Data Interpolation", "Responsive Dashboard"],
    demoUrl: null,
    githubUrl: "https://github.com/FerdyAtmaja/soilmoisture-web"
  },
  {
    id: 5,
    title: "Sentiment Analysis System for Surabaya Citizens' Complaints (ML & NLP)",
    description: "Aspect-based sentiment analysis system for Surabaya citizens' complaints using Naive Bayes and NLP technologies.",
    detailedDescription: "Comprehensive web application for aspect-based sentiment analysis of Surabaya citizens' complaints. Built with Flask and machine learning technologies, this system uses LDA for topic modeling and Naive Bayes for sentiment classification. Key features include text preprocessing with Sastrawi, interactive data visualization with Plotly, analytics dashboard, wordcloud generation, and PDF/Excel report export. The system supports batch processing and stores results in MySQL database.",
    image: "/images/projects/absa-surabaya.png",
    technologies: ["Python", "Flask", "scikit-learn", "NLTK", "Sastrawi", "Plotly", "MySQL", "Naive Bayes"],
    features: ["LDA Topic Modeling", "Sentiment Analysis", "Interactive Dashboard", "Wordcloud Generation", "Batch Processing", "PDF/Excel Export"],
    demoUrl: null,
    githubUrl: "https://github.com/FerdyAtmaja/Surabaya-Aspect-Based-Sentiment-Analysis-Website-And-Dashboard"
  },
  {
    id: 6,
    title: "Simple Inventory Management Web App",
    description: "Complete inventory management information system for PT Antari Jaya Mandiri with comprehensive stock management features.",
    detailedDescription: "Comprehensive web application for inventory and stock management at PT Antari Jaya Mandiri. Built with PHP and MySQL, this system provides complete features for managing incoming goods, outgoing goods, suppliers, and reports. The application includes AdminLTE dashboard, DataTables for data management, user authentication system, and PDF/Excel report export. Responsive interface with Bootstrap and jQuery for optimal user experience.",
    image: "/images/projects/antari-jaya-dashboard.png",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery", "AdminLTE", "DataTables"],
    features: ["Inventory In/Out Management", "Supplier Management", "PDF/Excel Reports", "Dashboard Analytics", "User Management", "Responsive Design"],
    demoUrl: null,
    githubUrl: "https://github.com/FerdyAtmaja/Web-Manajemen-Inventory-PT-Antari-Jaya-Mandiri"
  },
];