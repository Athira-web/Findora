// src/pages/home/index.tsx
import React from 'react';
import LocationSelector from './LocationSelector';
import Header from './Header.tsx'; 
import Navbar from '@/components/Navbar.tsx'; 

const HomePage: React.FC = () => {
  return (
    <div className="bg-blue-50">
      <Header/>
      <Navbar />
      <LocationSelector />
     
    </div>
  );
};

export default HomePage;
