import { useEffect, useState } from "react";
import Product from "../component/product";
import { getProducts } from "../service/fetcher";
import Pagination from "../component/pagination";

const Event = ({ products, setProducts, categoryName, converPrice }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  };
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(products.length / productsPerPage);
  useEffect(() => {
    getProducts().then((data) => {
      const categoryName = "event";
      const categoryItems = data.data.categories[categoryName];
      setProducts(categoryItems);
    });
  }, [categoryName, setProducts]);

  return (
    <>
      <div className="title">이벤트 상품</div>
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

export default Event;
