import React from 'react';
import { getSelectedState, getSelectedCity } from '@/components/LocationStore'; // Update the import path accordingly
import ContactCard from '@/components/ContactCard'; // Adjust the import path as necessary

const PGHostel: React.FC = () => {
  const contacts = [
    {
      title: 'Comfort PG Accommodation',
      rating: '4.7',
      deal: '10% off for first month',
      phone: '+1 234-567-8901',
      state: 'Maharashtra',
      city: 'Mumbai',
    },
    {
      title: 'Elite Hostel',
      rating: '4.6',
      deal: 'Free meals for a week',
      phone: '+91 1234567890',
      state: 'Maharashtra',
      city: 'Pune',
    },
    {
      title: 'Cozy PG for Students',
      rating: '4.9',
      deal: 'Free Wi-Fi and laundry service',
      phone: '+91 123456789',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Luxury PG Suites',
      rating: '4.8',
      deal: 'Discount on annual bookings',
      phone: '+9 987654321',
      state: 'Kerala',
      city: 'Kozhikode',
    },
    {
      title: 'Budget-Friendly Hostel',
      rating: '4.5',
      deal: 'Group discounts available',
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
      <h1 className="text-2xl font-bold mb-6 text-left text-black">PG and Hostel Services</h1> {/* Title */}
      <div className="space-y-4 overflow-auto h-full bg-blue-100 p-4 rounded-md"> {/* Scrollable area */}
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

export default PGHostel;
