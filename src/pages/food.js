import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../component/product";
import Pagination from "../component/pagination";

const Food = ({ products, setProducts, categoryName, converPrice }) => {
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

export default Food;
