// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  return (
    <div className="bg-white shadow-lg rounded-md p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[23%] flex flex-col transition hover:scale-105 duration-300">
      <img src={product.image} alt={product.name} className="h-40 object-cover mb-2 rounded" />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="text-orange-600 underline mb-2">Details</Link>
      <button
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        className="bg-orange-600 text-white py-1 px-3 rounded hover:bg-orange-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
