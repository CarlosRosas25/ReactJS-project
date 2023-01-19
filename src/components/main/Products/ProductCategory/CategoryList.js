import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const CategoryList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products, props.category]);

  return (
    <div className="productsContainerClassname">
      {products.map((product) => (
        <ProductCard props={product} key={product.id} />
      ))}
    </div>
  );
};

export default CategoryList;
