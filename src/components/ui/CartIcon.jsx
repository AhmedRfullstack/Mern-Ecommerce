import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const CartIcon = () => {
  const { cartItemsCount } = useCart();

  return (
    <div className="relative">
      <FaShoppingCart size={20} />
      {cartItemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cartItemsCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon; 