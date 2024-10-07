import React from 'react';
import { getSelectedState, getSelectedCity } from '@/components/LocationStore'; // Update the import path accordingly
import ContactCard from '@/components/ContactCard'; // Adjust the import path as necessary

const BeautySpa: React.FC = () => {
  // Define the contacts with state and city
  const contacts = [
    {
      title: 'Radiant Glow Spa',
      rating: '4.8',
      deal: '20% off first treatment',
      phone: '+1 234-567-8901',
      state: 'Maharashtra',
      city: 'Pune',
    },
    {
      title: 'Serenity Beauty Lounge',
      rating: '4.7',
      deal: 'Complimentary massage with facial',
      phone: '+91 1234567890',
      state: 'Maharashtra',
      city: 'Mumbai',
    },
    {
      title: 'Glamour Beauty Studio',
      rating: '4.9',
      deal: 'Free makeup consultation',
      phone: '+91 123456789',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Tranquil Spa Retreat',
      rating: '4.6',
      deal: 'Discounts on packages',
      phone: '+9 987654321',
      state: 'Kerala',
      city: 'Kozhikode',
    },
    {
      title: 'The Beauty Bar',
      rating: '4.5',
      deal: 'Loyalty rewards for frequent visits',
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
      <h1 className="text-2xl font-bold mb-6 text-left text-black">Beauty and Spa Services</h1> {/* Title */}
      <div className="space-y-4 overflow-auto h-full bg-purple-100 p-4 rounded-md"> {/* Scrollable area */}
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

export default BeautySpa;
