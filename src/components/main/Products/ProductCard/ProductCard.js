import "./ProductCard.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ props }) => {
  const { title, shortDescription, price, id, image } = props;

  return (
    <Card key={id} className="cardClassname">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{shortDescription}</Card.Text>
        <Card.Text>{`Price: US$ ${price}`}</Card.Text>
        <Link to={`/product/${id}`}>
          <Button variant="primary">Check details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
