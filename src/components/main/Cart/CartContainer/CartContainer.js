import "./CartContainer.scss";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../../../context/CartContext";
import React, { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../services/firebase.js";

const CartContainer = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(undefined);

  const orderTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const sendOrder = async (event) => {
    const newOrder = {
      buyer: {
        name: "Carlos Rosas",
        phone: 913492302,
        email: "carlos_rosas@gmail.com",
      },
      items: cartItems,
      total: orderTotal,
    };
    const queryRef = collection(db, "orders");
    const response = await addDoc(queryRef, newOrder);
    setOrderId(response.id);
    clearCart();
  };

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
          <div className="buttons-style">
            <Button
              variant="outline-success"
              onClick={clearCart}
              className="button"
            >
              Empty cart
            </Button>
            <Button
              variant="outline-success"
              onClick={sendOrder}
              className="button"
            >
              Buy
            </Button>
          </div>
        </>
      ) : (
        <p>You didn't add products to your cart.</p>
      )}
      {orderId &&
        Swal.fire({
          icon: "success",
          title: "Thanks for your purchase",
          text: `Your order number is ${orderId}`,
          showConfirmButton: false,
          timer: 4000,
        })}
    </div>
  );
};

export default CartContainer;
