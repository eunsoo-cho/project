import React from "react";
import "../component/header.css";
import { BiMenu } from "react-icons/bi";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../service/fetcher";

const Header = ({
  isLoggedIn,
  setIsLoggedIn,
  categoryName,
  products,
  setProducts,
}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      const allItems = [
        ...data.data.categories["event"],
        ...data.data.categories["cookie"],
      ];
      setProducts(allItems);
    });
  }, [categoryName, setProducts]);

  const handleLogout = () => {
    alert("로그아웃 하시겠습니까?");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    if (value.trim() !== "") {
      const filteredOptions = products.filter((product) =>
        product.name.includes(value)
      );
      setAutoCompleteOptions(filteredOptions);
    } else {
      setAutoCompleteOptions([]);
    }
  };

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.includes(searchTerm)
    );
    setProducts(filteredProducts);
  };
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/rabbit.png"}
            style={{ width: "50px", height: "50px" }}
            alt="이미지"
          />
          YumYum
        </Link>

        <div className="login">
          {isLoggedIn ? (
            <>
              <div className="logout" onClick={handleLogout}>
                로그아웃
              </div>
              <Link to="/register">회원가입</Link>
              <Link to="/cart">장바구니</Link>
              <Link to="/wishlist">위시리스트</Link>
            </>
          ) : (
            <>
              <Link to="/login">로그인</Link>
              <Link to="/register">회원가입</Link>
              <Link to="/cart">장바구니</Link>
              <Link to="/wishlist">위시리스트</Link>
            </>
          )}
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <BiMenu />
            </a>
          </li>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/phome">전체상품</a>
          </li>
          <li>
            <a href="/event">이벤트상품</a>
          </li>
          <li>
            <a href="/food">식품/간식</a>
          </li>
        </ul>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {autoCompleteOptions.length > 0 && (
          <div className="autoWord">
            {autoCompleteOptions.map((option) => (
              <div className="autoword-key" key={option.id}>
                {option.name}
              </div>
            ))}
          </div>
        )}
        <button type="submit" onClick={handleSearch}>
          <BsFillSearchHeartFill className="search" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
