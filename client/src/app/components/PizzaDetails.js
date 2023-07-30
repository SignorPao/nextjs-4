import React, { useEffect, useState } from "react";

// image
import Image from "next/image";

// components
import SizeSelection from "./SizeSelection";
import CrustSelection from "./CrustSelection";
import Topping from "./Topping";

const PizzaDetails = ({ pizza }) => {
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

  console.log(price);

  return <div>PizzaDetails</div>;
};

export default PizzaDetails;
