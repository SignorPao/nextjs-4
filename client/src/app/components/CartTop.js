// context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// icons
import { IoCloseOutline } from "react-icons/io5";

const CartTop = () => {
  const { setIsOpen } = useContext(CartContext);

  return (
    <div>
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl group-hover:scale-110 transition-all duration-300" />
      </div>
    </div>
  );
};

export default CartTop;
