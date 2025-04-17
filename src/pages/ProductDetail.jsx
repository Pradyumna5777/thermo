// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = allProducts.find(p => p.id === id);

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt="" className="w-full md:w-1/2 rounded shadow" />
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="mb-4 text-gray-600">{product.description}</p>
        <p className="mb-4 text-lg font-semibold">Price: ₹{product.price}</p>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
