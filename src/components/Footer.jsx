// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} ThermoPackers. All rights reserved.</p>
    </footer>
  );
}
