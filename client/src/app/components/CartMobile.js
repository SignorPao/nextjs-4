"use client";

// context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// components
import CartTop from "./CartTop";

const CartMobile = () => {
  const { isOpen } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } fixed w-full h-full z-20 transition-all duration-300 lg:hidden flex flex-col bg-white`}
    >
      <CartTop />
    </div>
  );
};

export default CartMobile;
