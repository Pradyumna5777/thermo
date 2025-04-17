// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="bg-orange-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">ThermoPackers</h1>
      <div className="space-x-4 text-sm md:text-base">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="bg-white text-orange-600 px-2 py-1 rounded hover:bg-orange-100 transition">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}
