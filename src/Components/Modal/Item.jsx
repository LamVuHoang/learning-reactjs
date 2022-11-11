import { useContext } from "react";
import CartContext from "../../Store/CartContext";

export default function Item({ product, quantity }) {
  const cartCtx = useContext(CartContext);

  const handleIncrease = () => {
    let index = cartCtx.cart.findIndex((item) => item.id === product.id);
    let newArray = [...cartCtx.cart];
    newArray[index].quantity += 1;

    cartCtx.setCart(newArray);
    cartCtx.setCartAmount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    let index = cartCtx.cart.findIndex((item) => item.id === product.id);
    let checkQuantity = cartCtx.cart[index].quantity;
    let newArray = [...cartCtx.cart];
    if (checkQuantity > 1) {
      newArray[index].quantity -= 1;
    } else {
      newArray.splice(index, 1);
    }
    cartCtx.setCart(newArray);
    cartCtx.setCartAmount((prev) => prev - 1);
  };

  return (
    <>
      <div key={product.id}>
        <div className="flex pb-3">
          <div className="grow">
            <div className="text-xl font-bold pb-1">{product.title}</div>
            <div className="flex">
              <div className="text-amber-700 font-bold">${product.price}</div>
              <span>x</span>
              <span>
                <input
                  className="w-10 rounded-sm text-center border border-gray-300"
                  value={quantity}
                  type="number"
                  readOnly
                />
              </span>
            </div>
          </div>
          <div className="mr-0 ml-auto">
            <div className="text-right pt-2 flex">
              <button
                onClick={handleIncrease}
                className="border bg-green-700 p-1 pb-1 pl-4 pr-4 rounded-xl font-bold text-white text-2xl mr-1"
              >
                +
              </button>
              <button
                onClick={handleDecrease}
                className="border bg-orange-500 p-1 pb-1 pl-4 pr-4 rounded-xl font-bold text-white text-2xl"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
