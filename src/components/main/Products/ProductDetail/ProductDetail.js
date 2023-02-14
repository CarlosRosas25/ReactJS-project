import "./ProductDetail.scss";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../services/firebase";

import { CartContext } from "../../../../context/CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState([]);
  const [count, setCount] = useState(0);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      const queryRef = doc(db, "coffeeProducts", productId);
      const response = await getDoc(queryRef);
      const newDoc = {
        id: response.id,
        ...response.data(),
      };
      setProductInfo(newDoc);
    };
    getProducts();
  }, [productId]);

  const subtractNumberProduct = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addNumberProduct = () => {
    if (count < productInfo.stock) {
      setCount(count + 1);
    }
  };

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

  const addCart = () => {
    if (count !== 0) {
      addItem({
        id: productInfo.id,
        title: productInfo.title,
        price: productInfo.price,
        quantity: count,
        totalPrice: count * productInfo.price,
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "Don't forget to specify the quantity",
      });
    }
  };

  return (
    <Card className="text-center productDetail">
      <Card.Header>{productInfo.title}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={productInfo.image} className="cardImage" />
        <Card.Text>{productInfo.longDescription}</Card.Text>
        <Card.Text>{`Price: US$ ${productInfo.price}`}</Card.Text>
        <Card className="addingButtons">
          <Button id="btnGroupAddon" onClick={subtractNumberProduct}>
            -
          </Button>
          <Card.Body>{count}</Card.Body>
          <Button id="btnGroupAddon" onClick={addNumberProduct}>
            +
          </Button>
        </Card>
        <Button className="addToCart" onClick={addCart}>
          Add to cart
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Link to={`/products`}>Go back to products</Link>
      </Card.Footer>
    </Card>
  );
};

export default ProductDetail;
