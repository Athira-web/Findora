import React from 'react';
import { getSelectedState, getSelectedCity } from '@/components/LocationStore'; // Update the import path accordingly
import ContactCard from '@/components/ContactCard'; // Adjust the import path as necessary

const VenueContact: React.FC = () => {
  const contacts = [
    {
      title: 'Venue 1 - Wedding Palace',
      rating: '4.7',
      deal: '10% off summer bookings',
      phone: '+1 234-567-8901',
      state: 'Maharashtra',
      city: 'Mumbai',
    },
    {
      title: 'Venue 2 - Elegant Banquet Hall',
      rating: '4.6',
      deal: '15% off weekend events',
      phone: '+91 1234567890',
      state: 'Maharashtra',
      city: 'Pune',
    },
    {
      title: 'Venue 3 - Grand Resort Weddings',
      rating: '4.9',
      deal: 'Free wedding planner service',
      phone: '+91 123456789',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Venue 4 - Classic Country Club',
      rating: '4.5',
      deal: 'Complimentary decor package',
      phone: '+9 987654321',
      state: 'Kerala',
      city: 'Kozhikode',
    },
    {
      title: 'Venue 6 - Serene Gardens',
      rating: '4.9',
      deal: 'Free decor consultation',
      phone: '+91 9876543215',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Venue 7 - Beachside Resort',
      rating: '4.8',
      deal: '20% off for beach weddings',
      phone: '+91 9876543216',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Venue 8 - Royal Heritage Hall',
      rating: '4.7',
      deal: 'Complimentary drinks for first bookings',
      phone: '+91 9876543217',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Venue 9 - Urban Convention Center',
      rating: '4.6',
      deal: 'Discounts for corporate events',
      phone: '+91 9876543218',
      state: 'Kerala',
      city: 'Kochi',
    },
    {
      title: 'Venue 5 - Luxurious Rooftop',
      rating: '4.8',
      deal: 'Exclusive weekday pricing',
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
      <h1 className="text-2xl font-bold mb-6 text-left text-black">Venue Details</h1> {/* Title */}
      <div className="space-y-4 overflow-auto h-full bg-red-100 p-4 rounded-md"> {/* Scrollable area */}
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

export default VenueContact;
