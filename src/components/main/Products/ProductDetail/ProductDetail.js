import "./ProductDetail.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data));
  }, [productId]);

  const subtractNumberProduct = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addNumberProduct = () => {
    setCount(count + 1);
  };

  return (
    <Card className="text-center productDetail">
      <Card.Header>{productInfo.title}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={productInfo.image} className="cardImage" />
        <Card.Text>{productInfo.description}</Card.Text>
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
        <Button className="addToCart">Add to cart</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Link to={`/products`}>Go back to products</Link>
      </Card.Footer>
    </Card>
  );
};

export default ProductDetail;
