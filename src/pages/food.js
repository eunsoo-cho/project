import { useEffect } from "react";
import axios from "axios";
import Product from "../component/product";

const Food = ({ products, setProducts, categoryName, converPrice }) => {
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      const categoryName = "cookie";
      const categoryItems = data.data.categories[categoryName];
      setProducts(categoryItems);
    });
  }, [categoryName, setProducts]);

  return (
    <>
      <div className="title">식품/간식</div>
      <div className="flex-container">
        {products.map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              converPrice={converPrice}
            />
          );
        })}
      </div>
    </>
  );
};

export default Food;
