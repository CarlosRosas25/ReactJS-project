import { createContext, useState, useReducer } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const countReducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return { count: state.count + 1 };
      }
      case "decrement": {
        return { count: state.count - 1 };
      }
      case "clear": {
        return { count: 0 };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  };

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const addItem = (data) => {
    if (isInCart(data.id)) {
      Toast.fire({
        icon: "error",
        title: "You already added the product to your cart.",
      });
    } else {
      cartItems.push(data);
      dispatch({ type: "increment" });
      Toast.fire({
        icon: "success",
        title: "Added product",
      });
    }
  };

  const deleteItem = (id) => {
    const newCartList = cartItems.filter((e) => e.id !== id);
    setCartItems(newCartList);
    dispatch({ type: "decrement" });
  };

  const clearCart = () => {
    setCartItems([]);
    dispatch({ type: "clear" });
  };

  const isInCart = (id) => {
    if (cartItems.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, clearCart, deleteItem, state }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
