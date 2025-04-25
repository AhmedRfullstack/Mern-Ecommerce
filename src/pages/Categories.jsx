import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop, FaTshirt, FaRunning, FaHome, FaBook, FaGamepad, FaArrowRight } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    icon: FaLaptop,
    description: 'Latest gadgets and tech accessories',
    itemCount: 156,
    color: 'bg-blue-500',
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg'
  },
  {
    id: 2,
    name: 'Fashion',
    icon: FaTshirt,
    description: 'Trendy clothing and accessories',
    itemCount: 289,
    color: 'bg-pink-500',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg'
  },
  {
    id: 3,
    name: 'Sports',
    icon: FaRunning,
    description: 'Sports equipment and activewear',
    itemCount: 134,
    color: 'bg-green-500',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'
  },
  {
    id: 4,
    name: 'Home & Living',
    icon: FaHome,
    description: 'Home decor and essentials',
    itemCount: 210,
    color: 'bg-yellow-500',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  },
  {
    id: 5,
    name: 'Books',
    icon: FaBook,
    description: 'Best sellers and new releases',
    itemCount: 178,
    color: 'bg-purple-500',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
  },
  {
    id: 6,
    name: 'Gaming',
    icon: FaGamepad,
    description: 'Gaming consoles and accessories',
    itemCount: 95,
    color: 'bg-red-500',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
  }
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-12">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Categories Hero"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/1200x400';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
            <p className="text-xl">Discover our wide range of products</p>
          </div>
        </div>
      </div>

      {/* Main Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/shop?category=${category.name.toLowerCase()}`}
            className="block group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x600';
                  }}
                />
                <div className={`${category.color} absolute top-4 right-4 p-3 rounded-full`}>
                  <category.icon className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {category.itemCount} items
                  </span>
                  <span className="text-blue-600 group-hover:translate-x-2 transition-transform">
                    Browse <FaArrowRight className="inline ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Collections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
            alt="New Arrivals"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=New+Arrivals';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">New Arrivals</h2>
              <p className="mb-4">Discover our latest products</p>
              <Link
                to="/shop?sort=newest"
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
            alt="Special Offers"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=Special+Offers';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Special Offers</h2>
              <p className="mb-4">Limited time deals and discounts</p>
              <Link
                to="/shop?sort=discount"
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                View Deals
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 4).map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-semibold group-hover:text-blue-600">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.itemCount} items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest category updates and special offers</p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories; 