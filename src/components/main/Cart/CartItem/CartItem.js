import "./CartItem.scss";
import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext.js";
import bin from "../../../../images/cart/bin.png";

const CartItem = ({ product }) => {
  const { deleteItem } = useContext(CartContext);

  return (
    <div className="itemContainer">
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{product.quantity}</div>
      <div>{product.totalPrice}</div>
      <div>
        <img src={bin} onClick={() => deleteItem(product.id)} alt="trash can" />
      </div>
    </div>
  );
};

export default CartItem;
