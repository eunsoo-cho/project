import { useEffect } from "react";

import Product from "../component/product";
import { getProducts } from "../service/fetcher";

const Event = ({ products, setProducts, categoryName }) => {
  useEffect(() => {
    getProducts().then((data) => {
      const categoryName = "event";
      const categoryItems = data.data.categories[categoryName];
      setProducts(categoryItems);
    });
  }, [categoryName, setProducts]);

  console.log(products);

  return (
    <>
      <div className="title">이벤트 상품</div>
      <div className="flex-container">
        {products.map((product) => {
          return <Product key={`key-${product.id}`} product={product} />;
        })}
      </div>
    </>
  );
};

export default Event;
