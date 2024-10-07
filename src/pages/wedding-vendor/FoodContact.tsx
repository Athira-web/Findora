import React from 'react';
import { getSelectedState, getSelectedCity } from '@/components/LocationStore'; // Update the import path accordingly
import ContactCard from '@/components/ContactCard'; // Adjust the import path as necessary

const FoodContact: React.FC = () => {
  const contacts = [
    {
      title: 'Caterer 1 - Gourmet Delights',
      rating: '4.8',
      deal: '15% off for first-time clients',
      phone: '+1 234-567-8901',
      state: 'Maharashtra',
      city: 'Mumbai',
    },
    {
      title: 'Caterer 6 - Spiced Delights',
      rating: '4.9',
      deal: '10% off on buffet services',
      phone: '+91 9876543215',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Caterer 7 - Royal Banquets',
      rating: '4.7',
      deal: 'Free consultation for weddings',
      phone: '+91 9876543216',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Caterer 8 - Coastal Cuisine',
      rating: '4.8',
      deal: '15% off for seafood catering',
      phone: '+91 9876543217',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Caterer 9 - Healthy Eats',
      rating: '4.6',
      deal: '10% off on healthy menu options',
      phone: '+91 9876543218',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Caterer 2 - Elegant Cuisine',
      rating: '4.7',
      deal: 'Free dessert with every order',
      phone: '+91 1234567890',
      state: 'Maharashtra',
      city: 'Pune',
    },
    {
      title: 'Caterer 3 - Savory Catering',
      rating: '4.9',
      deal: '20% off for large events',
      phone: '+91 123456789',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Caterer 4 - Fresh Feast',
      rating: '4.6',
      deal: 'Complimentary appetizer platter',
      phone: '+9 987654321',
      state: 'Kerala',
      city: 'Kozhikode',
    },
    {
      title: 'Caterer 5 - Exotic Flavors',
      rating: '4.8',
      deal: 'Exclusive seasonal menu',
      phone: '+91 8723456782',
      state: 'Maharashtra',
      city: 'Nagpur',
    },
  ];

  // Get the selected state and city from the location store
  const selectedState = getSelectedState();
  const selectedCity = getSelectedCity();

  // Determine which contacts to display
  const filteredContacts = (selectedState && selectedCity) 
    ? contacts.filter(contact => 
        contact.state === selectedState && contact.city === selectedCity
      )
    : contacts; // Show all contacts if no state and city are selected

  return (
    <div className="w-full h-screen p-4 flex flex-col bg-white"> {/* Outer background set to white */}
      <h1 className="text-2xl font-bold mb-6 text-left text-black">Catering Details</h1> {/* Title */}
      <div className="space-y-4 overflow-auto h-full bg-lime-100 p-4 rounded-md"> {/* Scrollable area */}
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))
        ) : (
          <p>No contacts available for the selected location.</p>
        )}
      </div>
    </div>
  );
};

export default FoodContact;
