// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, dispatch } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="border p-4 mb-4 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="font-semibold text-xl">{item.name}</h3>
              <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
            </div>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
              <button
                onClick={() => dispatch({ type: 'DECREASE', payload: item.id })}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch({ type: 'INCREASE', payload: item.id })}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
              <button
                onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}
                className="ml-4 text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
