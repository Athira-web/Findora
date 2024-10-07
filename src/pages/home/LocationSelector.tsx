import React, { useState, useEffect, useRef } from 'react';
import { locations } from '@/components/LocationData'; // Ensure this import path is correct
import searchIcon from '@/assets/home/search.png'; // Your search icon
import ElementSection from './element-section.tsx'; // Back
import { useLocationStore } from '@/components/LocationStore.tsx'; // Import from LocationStore

const LocationSelector: React.FC = () => {
  const { selectedState, selectedCity, updateSelectedLocation } = useLocationStore(); // Use LocationStore
  const [activeStateIndex, setActiveStateIndex] = useState<number | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Previous selections state
  const [previousSelections, setPreviousSelections] = useState<{ state: string; city: string | null }[]>([]);

  const handleStateClick = (index: number) => {
    setActiveStateIndex(index === activeStateIndex ? null : index);
  };

  const handleCitySelection = (city: string, state: string) => {
    // Store current selection in previousSelections before updating
    setPreviousSelections([...previousSelections, { state: selectedState, city: selectedCity }]);

    updateSelectedLocation(state, city); // Update location using LocationStore
    setSearchTerm(`${state}, ${city}`);
    setActiveStateIndex(null);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
    setActiveStateIndex(null);
  };

  const handleSearchClick = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackClick = () => {
    // Check if there are previous selections to revert to
    if (previousSelections.length > 0) {
      const lastSelection = previousSelections.pop(); // Get the last selection
      if (lastSelection) {
        updateSelectedLocation(lastSelection.state, lastSelection.city || ''); // Update state and city
        setSearchTerm(lastSelection.city ? `${lastSelection.state}, ${lastSelection.city}` : ''); // Update search term
        setPreviousSelections([...previousSelections]); // Update the state
      }
    } else {
      // Reset selections if no previous selections
      updateSelectedLocation('', ''); // Reset using LocationStore
      setSearchTerm('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveStateIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const displayedLocations = showMore ? locations : locations.slice(0, 10);
  const filteredLocations = displayedLocations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10 text-center">
      <div className="flex items-center justify-start mb-4" style={{ paddingLeft: '1cm' }}>
        <button className="text-2xl font-semibold text-black mr-4 bg-indigo-100 hover:bg-indigo-200 transition-all duration-150 rounded-md border border-light-gray-300" onClick={handleBackClick}>Back</button>
        <h1 className="text-4xl mb-12 mt-10 ml-[6cm]">States for Services</h1>
        <div className="relative ml-6">
          <div className="flex items-center">
            <div className="flex items-center bg-cyan-600 hover:bg-cyan-700  px-4 py-2 rounded-l-lg">
              <img
                src={searchIcon}
                alt="Search"
                className="w-6 h-6 cursor-pointer hover:scale-110 transition-all duration-150 "
                onClick={handleSearchClick} 
              />
            </div>
            <input
              type="text"
              placeholder="your area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-400 py-2 px-4 rounded-r-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap mb-12" ref={dropdownRef}>
        {filteredLocations.map((location, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="cursor-pointer hover:bg-slate-200 shadow-inner" onClick={() => handleStateClick(index)}>
              <img
                src={location.image}
                alt={location.name}
                className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover shadow-lg p-1"
              />
              <p className="mt-2 text-gray-700">{location.name}</p>
            </div>

            {activeStateIndex === index && (
              <ul className="absolute top-28 left-0 w-32 bg-white border border-gray-300 rounded-lg shadow-lg py-2 opacity-95 z-10">
                {location.cities.map((city, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
                    onClick={() => handleCitySelection(city, location.name)} 
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {selectedState ? (
          <div className="flex flex-col items-center">
            <img
              src={locations.find((loc) => loc.name === selectedState)?.image}
              alt={selectedState}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
            />
            <p className="mt-2 text-gray-700">{selectedState}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center relative">
            <div className="cursor-pointer" onClick={handleShowMore}>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex justify-center items-center bg-gray-200 shadow-lg">
                <span className="text-gray-700 font-semibold text-sm md:text-base">
                  {showMore ? 'Show Less' : 'View More'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedState && selectedCity && (
        <div className="mt-6 text-lg font-semibold bg-gray-100 p-4 rounded-lg">
          {selectedState}, {selectedCity}
        </div>
      )}

      <div className="mt-12" id="services-section">
        <ElementSection />
      </div>
    </div>
  );
};

export default LocationSelector;
