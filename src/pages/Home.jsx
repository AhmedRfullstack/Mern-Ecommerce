import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaHeart } from 'react-icons/fa';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 299.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 89.99,
      rating: 4.3,
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      category: 'Sports'
    }
  ];

  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      link: '/categories/electronics'
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
      link: '/categories/fashion'
    },
    {
      id: 3,
      name: 'Home & Living',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      link: '/categories/home-living'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-lg overflow-hidden mb-20">
        <img
          src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
          alt="Hero Banner"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x500?text=Welcome+to+Our+Store';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Store</h1>
            <p className="text-xl mb-10">Discover amazing products at great prices</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="bg-transparent text-white px-8 py-3 rounded-full text-lg font-semibold border-2 border-white hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our most popular items</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Product+Image';
                  }}
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <FaHeart className="text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <FaShoppingCart className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{product.category}</span>
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <div className="flex items-center mt-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600">Browse our wide range of categories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Category+Image';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">Get the latest updates on new products and special offers</p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home; 