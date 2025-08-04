import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const baseClasses = "p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-500/10";
  const hoverClasses = hover ? "hover:border-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({ 
  icon, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <Card className={className}>
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </Card>
  );
};

interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <Card className="text-center p-4">
      <p className="text-2xl font-bold text-yellow-500 mb-1">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </Card>
  );
};