import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'With over 15 years of experience in e-commerce, John leads our company with vision and innovation.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Jane brings her creative expertise to drive our brand forward in the digital marketplace.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Product Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Mike ensures our product selection meets the highest standards of quality and customer satisfaction.'
    }
  ];

  const values = [
    {
      icon: FaShoppingBag,
      title: 'Quality Products',
      description: 'We source only the best products from trusted suppliers.'
    },
    {
      icon: FaUsers,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our business.'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We conduct our business with honesty and transparency.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-20">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="About Us"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x400?text=About+Us';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl">Your Trusted Shopping Destination</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, we started as a small online store with a big dream. Today, we've grown into a leading e-commerce platform,
            serving millions of customers worldwide. Our journey has been marked by innovation, customer satisfaction, and a commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              alt="Our Journey"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Our+Journey';
              }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
            <p className="text-gray-600 mb-4">
              From humble beginnings to becoming a market leader, our journey has been fueled by passion and dedication.
              We've continuously evolved to meet the changing needs of our customers while staying true to our core values.
            </p>
            <p className="text-gray-600">
              Our success is built on strong relationships with our customers, suppliers, and team members.
              We believe in creating a positive impact in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600">The talented people behind our success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Team+Member';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Be part of our growing community of satisfied customers. Experience the difference of shopping with a company that truly cares.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Shopping
          </Link>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 