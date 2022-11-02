import { useContext } from "react";
import AppContext from "../context";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);

  return { totalPrice, cartItems, setCartItems };
};
