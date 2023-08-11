// context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// icons
import { IoCloseOutline } from "react-icons/io5";

const CartTop = () => {
  const { setIsOpen } = useContext(CartContext);

  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10">
      {/* shopping bag text */}
      <div className="font-semibold">Shopping bag (3)</div>
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl group-hover:scale-110 transition-all duration-300" />
      </div>
    </div>
  );
};

export default CartTop;
