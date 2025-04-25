import React, { useState } from 'react';
import { FaFilter, FaSort, FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Sample product data with proper image URLs
const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg',
    category: 'Electronics',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Electronics',
    rating: 4.8,
    reviews: 95
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    category: 'Sports',
    rating: 4.3,
    reviews: 76
  },
  {
    id: 4,
    name: 'Backpack',
    price: 49.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
    category: 'Fashion',
    rating: 4.6,
    reviews: 112
  },
  {
    id: 5,
    name: 'Wireless Earbuds',
    price: 129.99,
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg',
    category: 'Electronics',
    rating: 4.7,
    reviews: 89
  },
  {
    id: 6,
    name: 'Fitness Tracker',
    price: 89.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Sports',
    rating: 4.4,
    reviews: 67
  }
];

const Shop = () => {
  const [products] = useState(sampleProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const { addToCart } = useCart();

  const categories = ['All', 'Electronics', 'Fashion', 'Sports'];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' ? true : product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-12">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Shop Hero"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/1200x400';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Shop Our Collection</h1>
            <p className="text-xl">Discover amazing products at great prices</p>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.filter(cat => cat !== 'All').map(category => (
            <div key={category} className="relative h-48 rounded-lg overflow-hidden group">
              <img
                src={`https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg`}
                alt={category}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/800x600';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-2 mb-2">
            <FaFilter className="text-gray-600" />
            <span className="font-semibold">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <FaSort className="text-gray-600" />
            <span className="font-semibold">Sort by:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300x300';
                }}
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                <FaShoppingCart 
                  className="text-blue-600 cursor-pointer hover:text-blue-800"
                  onClick={() => addToCart(product)}
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
              </div>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Get the latest updates on new products and special offers</p>
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

export default Shop; 