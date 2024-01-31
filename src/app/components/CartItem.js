import { useContext } from "react";

// image
import Image from "next/image";

// icons
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

// context
import { CartContext } from "../context/CartContext";

const CartItem = ({ pizza }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="select-none">
      <div className="flex gap-x-4 mb-2">
        {/* image */}
        <div className="flex justify-center items-center">
          <Image src={pizza.image} width={90} height={90} alt="pizza" />
        </div>
        {/* pizza info */}
        <div className="flex-1 flex flex-col gap-y-1">
          {/* name */}
          <div className="text-lg capitalize font-bold">{pizza.name}</div>
          <div className="flex flex-col gap-y-1">
            {/* crust */}
            <div className="capitalize font-medium text-[15px]">
              {pizza.crust} crust
            </div>
            {/* size */}
            <div className="capitalize mb-2 font-medium text-[15px]">
              {pizza.size} size
            </div>
            {/* quantity */}
            <div className="flex items-center gap-x-1">
              {/* decrease amount */}
              <div
                onClick={() => decreaseAmount(pizza.id, pizza.price)}
                className="w-[28px] h-[28px] text-white gradient rounded-full flex items-center justify-center cursor-pointer"
              >
                <BiMinus />
              </div>
              {/* pizza amount */}
              <div className="font-semibold flex flex-1 max-w-[30px] items-center justify-center text-sm">
                {pizza.amount}
              </div>
              {/* increase amount */}
              <div
                onClick={() => increaseAmount(pizza.id, pizza.price)}
                className="w-[28px] h-[28px] text-white gradient rounded-full flex items-center justify-center cursor-pointer"
              >
                <BiPlus />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          {/* remove item */}
          <div
            onClick={() => removeFromCart(pizza.id, pizza.price, pizza.crust)}
            className="text-2xl flex items-center justify-center self-end cursor-pointer hover:scale-110 transition-all duration-300 text-orange"
          >
            <IoCloseOutline />
          </div>
          {/* price */}
          <div>
            <span className="text-[17px] font-medium font-robotoCondensed">
              $ {parseFloat(pizza.price * pizza.amount).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* toppings */}
      <div className="flex flex-wrap items-center gap-1 p-4 border-b border-black/10">
        <div className="font-semibold">
          Toppings: {pizza.topping.length === 0 && "None"}
        </div>
        {pizza.topping.map((topping, index) => {
          return (
            <div
              className="capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none"
              key={index}
            >
              {topping.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;
