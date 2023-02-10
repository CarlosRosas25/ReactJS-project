import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (data) => {
    if (isInCart(data.id)) {
      alert("You already added the product to your cart.");
    } else {
      const cartList = cartItems;
      cartList.push(data);
      setCartItems(cartList);
      console.log(cartItems);
    }
  };

  const deleteItem = (id) => {
    const newCartList = cartItems.filter((e) => e.id !== id);
    setCartItems(newCartList);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    if (cartItems.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, clearCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
