import React from 'react';
import { getSelectedState, getSelectedCity } from '@/components/LocationStore'; // Update the import path accordingly
import ContactCard from '@/components/ContactCard'; // Adjust the import path as necessary

const PhotographContact: React.FC = () => {
  const contacts = [
    {
      title: 'Photographer 1 - Elegant Shots',
      rating: '4.8',
      deal: '10% off on first booking',
      phone: '+1 234-567-8901',
      state: 'Maharashtra',
      city: 'Mumbai',
    },
    {
      title: 'Photographer 2 - Captured Moments',
      rating: '4.7',
      deal: 'Free consultation',
      phone: '+91 1234567890',
      state: 'Maharashtra',
      city: 'Pune',
    },
    {
      title: 'Photographer 3 - Visual Storyteller',
      rating: '4.9',
      deal: '20% off for early bookings',
      phone: '+91 123456789',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Photographer 4 - Timeless Memories',
      rating: '4.6',
      deal: 'Complimentary photo album',
      phone: '+9 987654321',
      state: 'Kerala',
      city: 'Kozhikode',
    },
    {
      title: 'Photographer 5 - Stunning Portraits',
      rating: '4.8',
      deal: 'Exclusive package offers',
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
      <h1 className="text-2xl font-bold mb-6 text-left text-black">Photographer Details</h1> {/* Title */}
      <div className="space-y-4 overflow-auto h-full bg-teal-100 p-4 rounded-md"> {/* Scrollable area */}
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

export default PhotographContact;
