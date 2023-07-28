import { useEffect, useState } from "react";
import Product from "../component/product";
import { getProducts } from "../service/fetcher";
import "../App.css";
import Pagination from "../component/pagination";

const Main = ({ products, setProducts, categoryName, converPrice }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
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
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
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
        {getCurrentProducts().map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              converPrice={converPrice}
            />
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export default Main;
