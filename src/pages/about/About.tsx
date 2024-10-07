// src/components/About.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Feedback from '@/pages/about/Feedback'


const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
          <p className="text-gray-700 text-center mb-8">
            At <strong>FINDORA</strong>, our mission is to empower individuals and communities by simplifying the process of finding essential local services. In a world that is becoming increasingly fast-paced and interconnected, we recognize the need for reliable and accessible information that can help people make informed decisions. Our platform is designed to bridge the gap between service providers and those in need, ensuring that no one has to navigate this journey alone.

                                          We aim to create a comprehensive directory of local services that are readily available and tailored to the unique needs of our users. Whether you’re searching for wedding planners, catering services, or rental equipment, FINDORA connects you to a diverse range of service providers, all at your fingertips. We believe that by providing accurate and up-to-date information, we can enhance the decision-making process for our users and ultimately contribute to a more vibrant and supportive community.

                                          Our commitment goes beyond just listing services. We strive to cultivate a platform where user experiences and feedback play a vital role in shaping the services offered. By encouraging reviews and recommendations, we foster a sense of trust and transparency that is crucial in today’s digital landscape. We understand that choosing a service can be daunting, which is why our mission includes empowering our users with the insights and experiences of others.

                                          Furthermore, we are dedicated to continuously improving our platform to meet the evolving needs of our users. Through innovative features and user-friendly design, we aim to enhance the overall experience of finding local services, making it as seamless and efficient as possible.

                                          In essence, our mission is not just about connecting people with services; it’s about building a community where everyone can thrive by having easy access to the resources they need. At FINDORA, we believe that together, we can create a better future, one connection at a time.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">
                                                At FINDORA, our mission is to make finding local services as easy as possible. We understand that in today’s busy world, having quick access to reliable information is essential. That’s why we created a platform where you can effortlessly discover the services you need right in your area.

                                                Whether you’re looking for a wedding planner, rental services, or any essential help, FINDORA connects you with local providers tailored to your needs. We believe in transparency, which is why we encourage users to share their experiences through reviews. This way, you can make informed choices based on the feedback from others.

                                                Our goal is to build a community where everyone can find what they need with confidence. We are dedicated to continuously improving our platform, ensuring it meets your expectations and simplifies your search for local services.

                                                Join us at FINDORA, where your needs are our priority, and finding the right service is just a click away!
          </p>

          <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-blue-400 p-6 rounded-lg shadow-lg mb-6">
            <ul className="list-none text-black text-xl">
              <li className="flex items-center mb-4">
                <span className="text-white mr-3">✅</span> Location-Based Search: Easily find services in your area.
              </li>
              <li className="flex items-center mb-4">
                <span className="text-white mr-3">✅</span> Comprehensive Listings: From rental services to wedding planners, we cover it all.
              </li>
              <li className="flex items-center mb-4">
                <span className="text-white mr-3">✅</span> User Reviews: Make informed decisions based on feedback from others.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Feedback/>
    </div>
  );
};

export default About;
