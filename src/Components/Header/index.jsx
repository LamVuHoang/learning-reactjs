import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  return (
    <>
      <div className="flex bg-amber-700">
        <div className="p-6 ml-10 text-white font-bold text-2xl">
          ReactMeals
        </div>
        <div className="flex-grow"></div>
        <div className="p-3 mr-10 mt-1">
          <div className="p-3 pl-8 pr-8 bg-black border-amber-900 rounded-3xl text-white font-bold">
            <span className="pr-2">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            <span>Your cart</span>
            <span className="bg-amber-600 ml-2 pl-3 pr-3 rounded-xl p-1">
              12
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
