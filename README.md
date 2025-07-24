# Dark Gold Elegant Portfolio

A stunning single-page portfolio website built with React.js and Tailwind CSS, featuring a sophisticated dark gold theme that exudes luxury, professionalism, and modern elegance.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Single Page Application**: Smooth scrolling navigation between sections
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project cards with hover effects
- **Skills Visualization**: Animated skill bars and learning badges
- **Social Media Integration**: Easy-to-update social media links

### Visual Design
- **Dark Gold Theme**: Sophisticated color palette with deep blacks and elegant gold accents
- **Glassmorphism Effects**: Modern translucent elements for depth
- **Smooth Animations**: Subtle hover effects and scroll animations
- **Typography**: Premium font pairing (Playfair Display + Inter)
- **Professional Layout**: Clean, organized sections with proper visual hierarchy

### Technical Features
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Efficient React components and optimized images
- **Accessibility**: ARIA labels and keyboard navigation support
- **Modern CSS**: Tailwind CSS with custom utilities and animations

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18.3.1
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dark-gold-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.tsx       # Navigation bar with smooth scroll
│   ├── Hero.tsx         # Hero section with CTA
│   ├── About.tsx        # About me section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills and learning section
│   ├── Contact.tsx      # Contact form and social links
│   └── FloatingButton.tsx # Floating contact button
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles and custom utilities
```

## 🎨 Design Philosophy

### Dark Gold Elegant Theme

The design philosophy centers around creating a **premium, sophisticated experience** that reflects professionalism while maintaining excellent usability.

**Color Psychology:**
- **Deep Black (#0A0A0A)**: Represents sophistication, luxury, and focus
- **Elegant Gold (#FFD700)**: Conveys success, premium quality, and attention to detail
- **Strategic Contrast**: Ensures excellent readability and visual hierarchy

**Typography Strategy:**
- **Playfair Display**: Serif font for headings that adds elegance and personality
- **Inter**: Sans-serif for body text ensuring optimal readability across devices

**Visual Elements:**
- **Glassmorphism**: Subtle transparency effects for modern appeal
- **Geometric Patterns**: Background patterns that add texture without distraction
- **Smooth Animations**: Enhance user experience without overwhelming content

### Responsive Design Approach

- **Mobile-First**: Designed starting from mobile screens (320px+)
- **Breakpoint Strategy**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px  
  - Desktop: > 1024px
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts
- **Scalable Typography**: Responsive font sizes using clamp() and rem units

## 🚀 Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your Git repository for continuous deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables
No environment variables required for basic deployment.

## 🎯 Customization Guide

### Personalizing Content

1. **Update Personal Information**
   - Edit `src/components/Hero.tsx` for name and title
   - Modify `src/components/About.tsx` for bio and description
   - Update `src/components/Contact.tsx` for contact details

2. **Add Your Projects**
   - Edit the `projects` array in `src/components/Projects.tsx`
   - Replace project images with your own
   - Update project links and descriptions

3. **Customize Skills**
   - Modify the `skills` array in `src/components/Skills.tsx`
   - Update skill levels and categories
   - Add new technologies to "Currently Learning"

4. **Social Media Links**
   - Update `socialLinks` array in `src/components/Contact.tsx`
   - Add or remove social platforms as needed

### Styling Customization

1. **Colors**: Update CSS custom properties in `src/index.css`
2. **Fonts**: Modify Google Fonts import and font-family classes
3. **Animations**: Customize animations in Tailwind config or CSS
4. **Layout**: Adjust grid systems and spacing in components

## 📋 SEO & Performance

### SEO Features
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions and titles
- Alt text for images
- Structured data ready

### Performance Optimization
- Optimized images
- Efficient React component rendering
- Minimal external dependencies
- CSS optimization with Tailwind's purge

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Ferdy Atmaja**
- Portfolio: [https://ferdyatmaja.com]
- LinkedIn: [https://linkedin.com/in/ferdyatmaja]
- GitHub: [https://github.com/ferdyatmaja]

---

*Designed and developed by Ferdy Atmaja*