import React from 'react';
import PortfolioLayout from './PortfolioLayout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <PortfolioLayout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </PortfolioLayout>
  );
}

export default App;