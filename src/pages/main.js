import { useEffect } from "react";
import Product from "../component/product";
import { getProducts } from "../service/fetcher";
import "../App.css";

const Main = ({ products, setProducts, categoryName, converPrice }) => {
  useEffect(() => {
    getProducts().then((data) => {
      const allItems = [
        ...data.data.categories["event"],
        ...data.data.categories["cookie"],
      ];
      setProducts(allItems);
    });
  }, [categoryName, setProducts]);

  const sortProduct = (type) => {
    const newProduct = [...products];
    if (type === "recent") {
      newProduct.sort((a, b) => a.id - b.id);
      setProducts(newProduct);
    } else if (type === "row") {
      newProduct.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setProducts(newProduct);
    } else if (type === "high") {
      newProduct.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setProducts(newProduct);
    }
  };

  return (
    <>
      <div className="title">전체상품</div>
      <div className="filter-container">
        <p className="filtername" onClick={() => sortProduct("recent")}>
          최신순 |
        </p>
        <p className="filtername" onClick={() => sortProduct("row")}>
          낮은 가격 |
        </p>
        <p className="filtername" onClick={() => sortProduct("high")}>
          높은 가격
        </p>
      </div>
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
export default Main;
