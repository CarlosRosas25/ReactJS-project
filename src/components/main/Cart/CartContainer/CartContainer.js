import "./CartContainer.scss";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../../../context/CartContext";
import React, { useContext } from "react";

const CartContainer = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <div className="cartContainer">
      {cartItems.length > 0 ? (
        <>
          <div className="cartSubtitles">
            <h5>Products</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Subtotal</h5>
            <div></div>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
          <button onClick={clearCart}>Empty cart</button>
        </>
      ) : (
        <p>You didn't add products to your cart.</p>
      )}
    </div>
  );
};

export default CartContainer;
