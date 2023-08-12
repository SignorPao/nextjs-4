"use client";

import { createContext, useState } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);

  // cart state
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (id, image, name, price, topping, size, crust) => {
    // sort topping array by name
    topping.sort((a, b) => a.name.localeCompare(b.name));
    const newItem = {
      id,
      image,
      name,
      price,
      topping,
      size,
      crust,
      amount: 1,
    };
    setCart([...cart, newItem]);
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
