import { useEffect } from "react";
import axios from "axios";
import Product from "../component/product";

const Main = ({ products, setProducts, categoryName }) => {
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      const categoryItems = data.data.categories[categoryName];
      setProducts(categoryItems);
    });
  }, [categoryName, setProducts]);
  console.log(products);

  return (
    <>
      <div className="title">전체상품</div>
      <div className="flex-container">
        {products.map((product) => {
          return <Product key={`key-${product.id}`} product={product} />;
        })}
      </div>
    </>
  );
};
export default Main;
