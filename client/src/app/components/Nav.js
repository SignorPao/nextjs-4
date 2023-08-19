"use client";

import { useContext } from "react";

// image
import Image from "next/image";

// link
import Link from "next/link";

// context
import { CartContext } from "../context/CartContext";

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);

  return (
    <nav className="absolute w-full py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        {/* logo */}
        <Link href="#" className="max-w-[160px] lg:max-w-max">
          <Image width={180} height={180} src={"logo.svg"} alt="logo" />
        </Link>
        {/* phone & cart */}
        <div className="flex gap-x-8 items-center">
          {/* phone */}
          <div className="flex gap-x-3 items-center">
            <Image width={42} height={42} src={"phone.svg"} alt="phone" />
            <div className="text-white font-robotoCondensed">
              <div className="uppercase font-medium text-sm leading-none">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-extrabold leading-none tracking-wide">
                996 958 7558
              </div>
            </div>
          </div>
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden lg:flex"
          >
            <Image width={38} height={38} src={"bag.svg"} alt="cart" />
            {/* amount */}
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex items-center justify-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
