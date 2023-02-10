import "./ProductsContainer.scss";
import ProductCard from "./ProductCard/ProductCard.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase.js";

const ProductsContainer = () => {
  const { productCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const queryRef = productCategory
        ? query(
            collection(db, "coffeeProducts"),
            where("category", "==", productCategory)
          )
        : collection(db, "coffeeProducts");
      const response = await getDocs(queryRef);
      const docsInfo = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docsInfo);
    };
    getProducts();
  }, [productCategory]);

  return (
    <div className="productsContainerClassname">
      {products.map((product) => (
        <ProductCard props={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsContainer;
