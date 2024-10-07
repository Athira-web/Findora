// src/pages/home/element-section.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaClinicMedical, FaTooth, FaHome, FaCut, FaUtensils, FaChurch } from 'react-icons/fa';

const ElementSection: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <h1 className=" text-4xl mb-12 mt-20">SERVICES</h1>

      <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {/* Wedding Vendors */}
        <Link to="/wedding-vendor/wedding" className="flex flex-col items-center bg-gradient-to-t from-zinc-50 to-gray-200 hover:bg-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
          <FaChurch className="text-6xl text-blue-900 mb-4" />
          <h2 className="text-xl font-semibold transform transition-all duration-500 hover:scale-105 hover:text-gray-800">Wedding Vendors</h2>
        </Link>

        {/* Hospital */}
        <Link to="/Hospitals/Hospitals" className="flex flex-col items-center bg-gradient-to-t from-zinc-50 to-gray-200  hover:bg-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
          <FaClinicMedical className="text-6xl text-red-900 mb-4" />
          <h2 className="text-xl font-semibold transform transition-all duration-500 hover:scale-105 hover:text-gray-800">Hospital</h2>
        </Link>

        {/* Dentist */}
        <Link to="/Dentist/Dentist" className="flex flex-col items-center bg-gradient-to-t from-zinc-50 to-gray-200 hover:bg-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
          <FaTooth className="text-6xl text-green-900 mb-4" />
          <h2 className="text-xl font-semibold transform transition-all duration-500 hover:scale-105 hover:text-gray-800">Dentist</h2>
        </Link>

        {/* PG/Hostel */}
        <Link to="/PG-hostel/PG-hostel" className="flex flex-col items-center bg-gradient-to-t from-zinc-50 to-gray-20  hover:bg-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
          <FaHome className="text-6xl text-pink-900 mb-4" />
          <h2 className="text-xl font-semibold transform transition-all duration-500 hover:scale-105 hover:text-gray-800">PG/Hostel</h2>
        </Link>

        {/* Beauty Spa */}
        <Link to="/BeautySpa/BeautySpa" className="flex flex-col items-center bg-gradient-to-t from-zinc-50 to-gray-200   hover:bg-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
          <FaCut className="text-6xl text-purple-900 mb-4" />
          <h2 className="text-xl font-semibold transform transition-all duration-500 hover:scale-105 hover:text-gray-800">Beauty Spa</h2>
        </Link>

        {/* Restaurants */}
        <Link to="/Restaurants/Restaurants" className="flex flex-col items-center bg-gradient-to-t from-zinc-50 to-gray-200  hover:bg-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
          <FaUtensils className="text-6xl text-orange-900 mb-4" />
          <h2 className="text-xl font-semibold transform transition-all duration-500 hover:scale-105 hover:text-gray-800">Restaurants</h2>
        </Link>
      </div>
    </div>
  );
};

export default ElementSection;
