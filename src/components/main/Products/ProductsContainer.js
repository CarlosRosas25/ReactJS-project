import "./ProductsContainer.scss";
import ProductCard from "./ProductCard/ProductCard.js";
import { useState, useEffect } from "react";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="productsContainerClassname">
      {products.map((product) => (
        <ProductCard props={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsContainer;
