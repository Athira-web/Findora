// src/routes/page-routes.tsx

export const pageRoutes = [
  {
    path: "/",
    lazy: async () => {
      const HomePage = (await import("@/pages/home")).default; // Accessing the default export correctly
      return { Component: HomePage };
    },
  },
  {
    path: "/about", // Example About route
    lazy: async () => {
      const AboutPage = (await import("@/pages/about/About")).default; // Change path to your About page
      return { Component: AboutPage };
    },
  },
  {
    path: "/wedding-vendor/wedding", // 
    lazy: async () => {
      const WeddingPage = (await import("@/pages/wedding-vendor/wedding")).default; // Adjust the path to your Wedding component
      return { Component: WeddingPage };
    },
  },
  {
    path: "/wedding-vendor/venues", // New route for Venue Contact
    lazy: async () => {
      const VenueContactPage = (await import("@/pages/wedding-vendor/VenueContact")).default; // Adjust the path to your VenueContact component
      return { Component: VenueContactPage };
    },
  },
  {
    path: "/wedding-vendor/photographers", // Photographer contact page
    lazy: async () => {
      const PhotographerContact = (await import("@/pages/wedding-vendor/PhotographerContact")).default; // Adjust the path to your PhotographerContact component
      return { Component: PhotographerContact };
    },
  },
  {
    path: "/wedding-vendor/food", // Food contact page
    lazy: async () => {
      const FoodContact = (await import("@/pages/wedding-vendor/FoodContact")).default; // Adjust the path to your FoodContact component
      return { Component: FoodContact };
   }, 
  },
  {
    path: "/wedding-vendor/music", // Music contact page
    lazy: async () => {
      const MusicContact = (await import("@/pages/wedding-vendor/MusicContact")).default; // Adjust the path to your MusicContact component
      return { Component: MusicContact }
    }, 
  },
  {
    path: "/Dentist/Dentist", // New 
    lazy: async () => {
      const DentistPage = (await import("@/pages/Dentist/Dentist")).default; // Adjust the path to your Wedding component
      return { Component: DentistPage };
    },
  },
  {
    path: "/BeautySpa/BeautySpa", 
    lazy: async () => {
      const BeautySpaPage = (await import("@/pages/BeautySpa/BeautySpa")).default; // Adjust the path to your Wedding component
      return { Component: BeautySpaPage };
    },
  },
  {
    path: "/Hospitals/Hospitals", 
    lazy: async () => {
      const HospitalPage = (await import("@/pages/Hospitals/Hospitals")).default; // Adjust the path to your Wedding component
      return { Component: HospitalPage };
    },
  },
  {
    path: "/Restaurants/Restaurants", 
    lazy: async () => {
      const RestaurantPage = (await import("@/pages/Restaurants/Restaurants")).default; // Adjust the path to your Wedding component
      return { Component: RestaurantPage };
    },
  },
  {
    path: "/PG-hostel/PG-hostel", 
    lazy: async () => {
      const HostelPage = (await import("@/pages/PG-hostel/PG-hostel")).default; // Adjust the path to your Wedding component
      return { Component: HostelPage };
    },
  },
  // You can add more routes as needed, just remove any for "Amenities"
];
