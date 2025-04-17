// src/pages/Products.jsx
import React, { useState } from 'react';
import { allProducts, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [selectedCat, setSelectedCat] = useState('');
  const [page, setPage] = useState(1);
  const limit = 4;

  const filtered = selectedCat
    ? allProducts.filter(p => p.category === selectedCat)
    : allProducts;

  const paginated = filtered.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(filtered.length / limit);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <select
        className="p-2 border border-gray-300 rounded mb-6"
        onChange={e => setSelectedCat(e.target.value)}
        value={selectedCat}
      >
        <option value="">All Categories</option>
        {Object.keys(categories).map(cat => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <div className="flex flex-wrap gap-4 justify-center">
        {paginated.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            onClick={() => setPage(i + 1)}
            key={i}
            className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
