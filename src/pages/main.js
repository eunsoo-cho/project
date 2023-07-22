import { useEffect } from "react";
import Product from "../component/product";
import { getProducts } from "../service/fetcher";

const Main = ({ products, setProducts, categoryName }) => {
  useEffect(() => {
    getProducts().then((data) => {
      /*  const categoryName = ["event", "food"];*/
      const categoryItems = data.data.categories[categoryName];
      setProducts(categoryItems);
    });
  }, [categoryName, setProducts]);

  useEffect(() => {
    console.log(products);
  }, [products]);

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
