import React, { useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { name, price, rating, image, description } = product;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // Stop showing loading state on error
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="relative aspect-w-1 aspect-h-1 mb-4 bg-gray-100 rounded-lg overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
        )}
        {!imageError ? (
          <img 
            src={image} 
            alt={name}
            className={`object-cover w-full h-48 rounded-lg transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            <span className="text-sm">Image not available</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? "text-yellow-400" : "text-gray-300"} 
          />
        ))}
        <span className="text-gray-600 text-sm ml-2">({rating}/5)</span>
      </div>
      <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
          isAdded 
            ? 'bg-green-500 text-white cursor-default'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        <FaShoppingCart />
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard; 