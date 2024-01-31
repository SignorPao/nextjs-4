import React, { useEffect, useState } from "react";

// image
import Image from "next/image";

// icons
import { IoMdCheckmark } from "react-icons/io";

const Topping = ({ top, topping, setTopping }) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // handle checkbox
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // handle topping
  const handleTopping = () => {
    if (isChecked) {
      const newToppings = new Set([...topping, { ...top }]);
      setTopping(Array.from(newToppings));
    } else {
      const newToppings = topping.filter((toppingObj) => {
        return toppingObj.name !== top.name;
      });
      setTopping(newToppings);
    }
  };

  useEffect(() => {
    handleTopping();
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        width={70}
        height={70}
        src={top.image}
        alt="topping"
        className="mb-2"
      />
      {/* topping name */}
      <div className={`${isChecked ? 'text-orange font-semibold' : 'text-black'} text-sm capitalize text-center font-medium`}>
        {top.name}
      </div>
      {/* checkbox */}
      <input
        type="checkbox"
        name=""
        checked={isChecked}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        onChange={handleCheckbox}
      />
      {/* checkmark icon */}
      <div
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};

export default Topping;
