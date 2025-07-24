import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main>{children}</main>
      <FloatingButton />
      <Footer />
    </div>
  );
};

export default PortfolioLayout;