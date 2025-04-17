// src/context/CartContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'INCREASE':
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREASE':
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      );
    case 'REMOVE':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
