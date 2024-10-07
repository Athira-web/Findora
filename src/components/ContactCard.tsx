import React from 'react';

interface ContactCardProps {
  title: string;
  rating: string;
  deal: string;
  phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, rating, deal, phone }) => {
  return (
    <div className="bg-white shadow-lg p-4 flex items-start gap-4 w-full"> {/* Ensures full width */}
      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-md" // Responsive image size
      />
      <div className="flex-grow text-left">
        <h2 className="text-lg md:text-xl font-bold">{title}</h2> {/* Responsive text size */}
        <div className="flex items-center mb-2">
          <span className="text-orange-500 text-lg mr-1">★★★★☆</span>
          <span className="text-gray-600">{rating} stars</span>
        </div>
        <div className="text-violet-600">{deal}</div>
        <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded">
          Call {phone}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
