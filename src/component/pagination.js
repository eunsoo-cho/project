import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={currentPage === number ? "active" : ""}
          onClick={() => onChangePage(number)}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
