import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import CartContext from "../../Store/CartContext";

export default function Index() {
  const ctx = useContext(CartContext);

  const handleOpen = (e) => {
    e.preventDefault();
    ctx.setHiddenModal("");
  };

  return (
    <>
      <div className="flex bg-amber-700">
        <div className="p-6 ml-10 text-white font-bold text-2xl">
          ReactMeals
        </div>
        <div className="flex-grow"></div>
        <button className="p-3 mr-10 mt-1" onClick={handleOpen}>
          <div className="p-3 pl-8 pr-8 bg-black border-amber-900 rounded-3xl text-white font-bold">
            <span className="pr-2">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            <span>Your cart</span>
            <span className="bg-amber-600 ml-2 pl-3 pr-3 rounded-xl p-1">
              {ctx.cartAmount}
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
