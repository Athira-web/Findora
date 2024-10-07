import React from 'react';
import { useNavigate } from 'react-router-dom';

const Wedding: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Venues',
      path: '/wedding-vendor/venues',
      gradient: 'bg-gradient-to-t from-gray-100 to-red-200',
      darkerGradient: 'bg-gradient-to-t from-red-500 to-red-700',
      description: 'Stunning venues for your big day.',
    },
    {
      title: 'Photographers',
      path: '/wedding-vendor/photographers',
      gradient: 'bg-gradient-to-t from-gray-100 to-teal-200',
      darkerGradient: 'bg-gradient-to-t from-teal-500 to-teal-700',
      description: 'Capture every moment beautifully.',
    },
    {
      title: 'Food',
      path: '/wedding-vendor/food',
      gradient: 'bg-gradient-to-t from-gray-100 to-lime-200',
      darkerGradient: 'bg-gradient-to-t from-lime-500 to-lime-700',
      description: (
        <>
          Delicious catering options <br /> available.
        </>
      ),
    },
    {
      title: 'Music',
      path: '/wedding-vendor/music',
      gradient: 'bg-gradient-to-t from-gray-100 to-amber-200',
      darkerGradient: 'bg-gradient-to-t from-amber-500 to-amber-700',
      description: (
        <>
          Create the perfect atmosphere <br /> with music.
        </>
      ),
    },
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-indigo-50">
      {/* Heading with gap below */}
      <p className="text-center text-black text-4xl font-bold p-4 shadow-xl bg-gradient-to-t border-gray-400 mb-6">
        Wedding Categories
      </p>

      {/* Grid with gaps between cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card.path)}
            className={`relative cursor-pointer ${card.gradient} p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-[90%] h-56 flex items-center justify-end mx-auto`}
          >
            {/* Curved Section with title */}
            <div
              className={`absolute right-0 top-0 h-full w-1/2 ${card.darkerGradient} rounded-l-full flex items-center justify-center`}
              style={{ clipPath: 'ellipse(70% 70% at 80% 50%)' }}
            >
              <h2 className="text-3xl font-bold text-white">{card.title}</h2>
            </div>

            {/* Description below the title, ensuring it does not overlap */}
            <div className="flex-grow flex items-center justify-start">
              <p className="text-lg text-black text-center mt-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wedding;
