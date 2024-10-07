import React from 'react';
import { getSelectedState, getSelectedCity } from '@/components/LocationStore'; // Update the import path accordingly
import ContactCard from '@/components/ContactCard'; // Adjust the import path as necessary

const MusicContact: React.FC = () => {
  const contacts = [
    {
      title: 'Band 1 - The Harmonizers',
      rating: '4.9',
      deal: '10% off for early bookings',
      phone: '+1 234-567-8901',
      state: 'Maharashtra',
      city: 'Mumbai',
    },
    {
      title: 'DJ 1 - Beats and Vibes',
      rating: '4.8',
      deal: 'Free lighting setup with booking',
      phone: '+91 1234567890',
      state: 'Maharashtra',
      city: 'Pune',
    },
    {
      title: 'Solo Artist 1 - Melodic Tunes',
      rating: '4.7',
      deal: '20% off for wedding packages',
      phone: '+91 123456789',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Band 2 - Sound of Celebration',
      rating: '4.6',
      deal: 'Complimentary rehearsal',
      phone: '+9 987654321',
      state: 'Kerala',
      city: 'Kozhikode',
    },
    {
      title: 'Orchestra 1 - Symphony of Sounds',
      rating: '4.9',
      deal: '15% off for full-day bookings',
      phone: '+91 9876543210',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'DJ 3 - Mix Masters',
      rating: '4.7',
      deal: 'Free consultation for events',
      phone: '+91 9876543211',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Live Band 1 - Acoustic Nights',
      rating: '4.6',
      deal: 'Complimentary drinks for wedding bookings',
      phone: '+91 9876543212',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'DJ 4 - Electric Sounds',
      rating: '4.8',
      deal: '20% off for themed parties',
      phone: '+91 9876543213',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'DJ 2 - Party Star DJ',
      rating: '4.8',
      deal: 'Exclusive combo offers',
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
      <h1 className="text-2xl font-bold mb-6 text-left text-black">Music Service Details</h1> {/* Title */}
      <div className="space-y-4 overflow-auto h-full bg-amber-100 p-4 rounded-md"> {/* Scrollable area */}
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

export default MusicContact;
