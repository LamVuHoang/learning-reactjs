import { useContext, useState } from "react";
import CartContext from "../../Store/CartContext";
export default function Item({ item }) {
  const ctx = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handlleAddButton = () => {
    ctx.setCart((prev) => {
      const idx = prev.findIndex((e) => e.id === item.id);
      // React Strictmode make input 1 become 2 
      // console.log(idx);
      if (idx !== -1) {
        let newArray = [...prev];
        newArray[idx].quantity += parseInt(qty);
        return newArray;
      } else {
        return [...prev, { id: item.id, quantity: parseInt(qty) }];
      }
    });

    ctx.setCartAmount((prev) => {
      return prev + parseInt(qty);
    });

    setQty(1);
  };
  return (
    <>
      <div className="flex pb-3">
        <div className="grow">
          <div className="text-xl font-bold pb-1">{item.title}</div>
          <div className="text-xs font-serif italic">{item.content}</div>
          <div className="text-amber-700 font-bold">${item.price}</div>
        </div>
        <div className="mr-0 ml-auto">
          <div className="flex w-auto text-right">
            <span className="pr-2 font-bold">Amount</span>
            <span>
              <input
                className="w-10 rounded-sm text-center border border-gray-300"
                type="number"
                min={1}
                max={5}
                step={1}
                value={qty}
                onChange={handleQty}
              />
            </span>
          </div>
          <div className="text-right pt-2">
            <button
              onClick={handlleAddButton}
              className="border bg-amber-700 p-2 pl-6 pr-6 rounded-xl font-bold text-white text-xs"
            >
              + Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
