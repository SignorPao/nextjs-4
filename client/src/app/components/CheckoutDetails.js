import React, { useState, useEffect, useContext } from "react";

// image
import Image from "next/image";

// context
import { CartContext } from "../context/CartContext";

const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);

  return (
    <div>
      <div>
        {/* title */}
        <h2>Shipping & checkout</h2>
        <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
          {/* box 1 */}
          <div className="bg-green-300 flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
            {/* input wrapper */}
            <div className="flex flex-col gap-4 h-full">
              {/* firstname & lastname */}
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                <input
                  type="text"
                  className="w-full input"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Last Name"
                />
              </div>

              {/* phone & email */}
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                <input
                  type="tel"
                  className="w-full input"
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  className="w-full input"
                  placeholder="Email Address"
                />
              </div>

              {/* street */}
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Street Name"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Street No."
                />
              </div>

              {/* block, floor & apartment */}
              <div className="flex justify-between gap-x-4">
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Block"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Floor"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Apt. No."
                />
              </div>

              {/* textarea */}
              <div className="flex-1 h-full">
                <textarea
                  className="textarea w-full h-full"
                  placeholder="Mentions (optional)"
                ></textarea>
              </div>
            </div>
          </div>

          {/* box 2 */}
          <div className="bg-yellow-300 flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
            box 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
