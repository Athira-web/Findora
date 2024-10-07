import React from 'react';
import { getSelectedState, getSelectedCity } from '@/components/LocationStore'; // Update the import path accordingly
import ContactCard from '@/components/ContactCard'; // Adjust the import path as necessary

const Restaurants: React.FC = () => {
  const contacts = [
    {
      title: 'Italian Bistro',
      rating: '4.8',
      deal: '20% off on first order',
      phone: '+1 234-567-8901',
      state: 'Maharashtra',
      city: 'Mumbai',
    },
    {
      title: 'Sushi Haven',
      rating: '4.7',
      deal: 'Buy 1 get 1 free on select rolls',
      phone: '+91 1234567890',
      state: 'Maharashtra',
      city: 'Pune',
    },
    {
      title: 'Seafood Delight',
      rating: '4.9',
      deal: '20% off on seafood dishes',
      phone: '+91 9876543210',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Vegan Paradise',
      rating: '4.8',
      deal: 'Buy 1 get 1 free on all vegan meals',
      phone: '+91 9876543211',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Kochi Spice Market',
      rating: '4.6',
      deal: 'Free tasting menu with reservations',
      phone: '+91 9876543212',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Mexican Grill',
      rating: '4.6',
      deal: 'Free appetizer with any entree',
      phone: '+91 123456789',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Indian Spice',
      rating: '4.5',
      deal: 'Complimentary dessert with every meal',
      phone: '+9 987654321',
      state: 'Kerala',
      city: 'Kozhikode',
    },
    {
      title: 'Fast Food Junction',
      rating: '4.9',
      deal: 'Special combo offers available',
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
      <h1 className="text-2xl font-bold mb-6 text-left text-black">Restaurant Details</h1> {/* Title */}
      <div className="space-y-4 overflow-auto h-full bg-green-100 p-4 rounded-md"> {/* Scrollable area */}
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

export default Restaurants;
