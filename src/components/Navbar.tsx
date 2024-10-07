// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl ">findora</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          {/* Add more links here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
