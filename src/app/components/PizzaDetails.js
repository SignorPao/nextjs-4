import React, { useContext, useEffect, useState } from "react";

// image
import Image from "next/image";

// components
import SizeSelection from "./SizeSelection";
import CrustSelection from "./CrustSelection";
import Topping from "./Topping";

// context
import { CartContext } from "../context/CartContext";

const PizzaDetails = ({ pizza, setModal }) => {
  // pizza size state
  const [size, setSize] = useState("small");

  // pizza crust state
  const [crust, setCrust] = useState("traditional");

  // pizza topping state
  const [topping, setTopping] = useState([]);

  // pizza topping price
  const [toppingPrice, setToppingPrice] = useState(0);

  // price state
  const [price, setPrice] = useState(0);

  // context: add to cart
  const { addToCart } = useContext(CartContext);

  // pizza price based on size
  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(pizza.priceSm + toppingPrice).toFixed(2))
      : size === "medium"
      ? setPrice(parseFloat(pizza.priceMd + toppingPrice).toFixed(2))
      : size === "large"
      ? setPrice(parseFloat(pizza.priceLg + toppingPrice).toFixed(2))
      : null;
  });

  // pizza price with topping
  useEffect(() => {
    if (topping.length > 0) {
      const toppingPrice = topping.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setToppingPrice(toppingPrice);
    } else {
      setToppingPrice(0);
    }
  }, [topping]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
      {/* top */}
      <div className="lg:flex-1 flex justify-center items-center">
        {/* pizza img */}
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            width={450}
            height={450}
            src={pizza.image}
            alt="pizza"
            priority={true}
            className="mx-auto relative"
          />
        </div>
      </div>

      {/* details */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 bg-white overflow-y-scroll h-[50vh] scrollbar-thin scrollbar-thumb-secondary scrollbar-track-black/10 pr-2">
            {/* name */}
            <div className="font-semibold">
              <h2 className="capitalize text-2xl lg:text-3xl mb-1">
                {pizza.name}
              </h2>
              <div className="mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                    ? "30 cm"
                    : size === "large"
                    ? "35 cm"
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            {/* size */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            {/* crust */}
            <CrustSelection crust={crust} setCrust={setCrust} />
            {/* topping */}
            <div className="mb-4 text-xl font-semibold">Choose topping</div>
            <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
              {pizza.toppings.map((top, index) => {
                return (
                  <Topping
                    key={index}
                    top={top}
                    topping={topping}
                    setTopping={setTopping}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* add to cart btn */}
        <div className="h-full flex items-center px-2 lg:items-end">
          <button
            onClick={() => {
              addToCart(
                pizza.id,
                pizza.image,
                pizza.name,
                price,
                topping,
                size,
                crust
              ),
                setModal(false);
            }}
            className="btn btn-lg gradient w-full flex justify-center gap-x-2"
          >
            <div>Add to cart for</div>
            <div>$ {price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
