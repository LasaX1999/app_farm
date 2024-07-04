"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextProps {
  cartCount: number;
  incrementCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = () => setCartCount((prevCount) => prevCount + 1);

  return (
    <CartContext.Provider value={{ cartCount, incrementCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
