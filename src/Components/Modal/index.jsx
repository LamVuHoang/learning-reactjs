import CartContext from "../../Store/CartContext";
import { useContext } from "react";
import food from "../../food.json";
import Item from "./Item";

export default function Index() {
  const cartCtx = useContext(CartContext);

  const handleCloseModal = (e) => {
    e.preventDefault();
    cartCtx.setHiddenModal("hidden");
  };

  return (
    <>
      <div
        className={`modal fixed top-1/4 left-1/4 w-1/2 h-full overflow-x-hidden overflow-y-auto ${cartCtx.hiddenModal}`}
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="flex modal-header flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-gray-800 grow">
                Modal title
              </h5>
              <button
                className="shrink border rounded-md bg-red-600 text-white font-bold p-1 pr-4 pl-4"
                onClick={handleCloseModal}
              >
                X
              </button>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              {cartCtx.cartAmount === 0
                ? " There is no Cart"
                : cartCtx.cart.map((item) => {
                    let product = food.find((el) => el.id === item.id);
                    return <Item key={product.id} product={product} quantity={item.quantity} />;
                  })}
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
