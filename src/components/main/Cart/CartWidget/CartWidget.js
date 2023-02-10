import "./CartWidget.scss";
import cart from "../../../../images/home/cart.svg";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to={`/cart`} className="nav-item">
      <img className="cartIcon" src={cart} alt="cart" />
      {cartItems.length > 0 && (
        <span className="numOfItems">{cartItems.length}</span>
      )}
    </Link>
  );
};

export default CartWidget;
