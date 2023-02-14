import "./CartWidget.scss";
import cart from "../../../../images/home/cart.svg";
import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const CartWidget = () => {
  const { state } = useContext(CartContext);

  return (
    <>
      <img className="cartIcon" src={cart} alt="cart" />
      {state.count > 0 && <span className="numOfItems">{state.count}</span>}
    </>
  );
};

export default CartWidget;
