import { useState } from "react";
import CartContext from "./CartContext";
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [hiddenModal, setHiddenModal] = useState("hidden");

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        cartAmount: cartAmount,
        setCartAmount: setCartAmount,
        hiddenModal: hiddenModal,
        setHiddenModal: setHiddenModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
