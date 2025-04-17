// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br from-orange-50 to-orange-100 min-h-[80vh]">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Welcome to Thermo Packers</h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">Premium EPS & Packaging Solutions Tailored to Your Needs</p>
      <Link to="/products" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition shadow">
        Browse Products
      </Link>
    </div>
  );
}
