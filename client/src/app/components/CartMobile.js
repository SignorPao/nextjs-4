"use client";

// context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// components
import CartTop from "./CartTop";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";

const CartMobile = () => {
  const { isOpen, cart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } fixed w-full h-full z-20 transition-all duration-300 lg:hidden flex flex-col bg-white`}
    >
      {/* top */}
      <CartTop />
      {/* cart items */}
      <div>
        {cart?.map((pizza, index) => {
          return <CartItem pizza={pizza} key={index} />;
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};

export default CartMobile;
