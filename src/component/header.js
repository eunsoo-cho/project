import React from "react";
import "../component/header.css";
import { BiMenu } from "react-icons/bi";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/rabbit.png"}
            style={{ width: "50px", height: "50px" }}
            alt="이미지"
          />
          냠냠마켓
        </Link>

        <div className="login">
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
          <Link to="/cart">장바구니</Link>
          <Link to="/wishlist">위시리스트</Link>
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
        <input type="text" placeholder="검색어를 입력하세요" />
        <button type="submit">
          <BsFillSearchHeartFill className="search" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
