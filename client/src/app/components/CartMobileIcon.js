// icons
import { BsHandbagFill } from "react-icons/bs";

const CartMobileIcon = () => {
  return (
    <div className="bg-tertiary w-[72px] h-[72px] rounded-full flex items-center justify-center text-white cursor-pointer fixed right-[10%] bottom-[5%] z-20">
      <BsHandbagFill className="text-4xl" />
      {/* amount */}
      <span className="absolute text-white bottom-3 right-4 gradient w-5 h-5 flex items-center justify-center rounded-full font-robotoCondensed text-[13px]">
        3
      </span>
    </div>
  );
};

export default CartMobileIcon;
