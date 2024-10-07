import React from 'react';
import headerImage from '@/assets/home/headerpic.jpg';

const Header: React.FC = () => {
  return (
    <div className="relative h-64">
      
      <img
        src={headerImage}
        alt="Project Background"
        className="absolute inset-0 w-full h-full object-cover "
      />

      
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl flex-centre  transform transition-all duration-500 hover:scale-105 cursor cursor-pointer font-extrabold">
          FINDORA
        </h1>
        
      </div>
    </div>
  );
};

export default Header;
