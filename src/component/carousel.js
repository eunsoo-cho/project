import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button className="arrow-button prev-button" onClick={onClickHandler}>
            <FaChevronLeft className="arrow-icon" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <button className="arrow-button next-button" onClick={onClickHandler}>
            <FaChevronRight className="arrow-icon" />
          </button>
        )
      }
      showThumbs={false}
      autoPlay={true}
    >
      <div className="carousel-slide">
        <div className="image-wrapper">
          <p className="price">깜짝할인특가</p>
          <div className="discount-icon">90% 할인</div>
          <div className="img-container">
            <img
              src="/image/candy.jpg"
              alt="이미지1"
              style={{ width: "200px", height: "200px" }}
            />
            <div className="dsc">
              <p className="discount-price">100원</p>
              <p className="main-price">1000원</p>
              <p className="name">주사위캔디 33g</p>
              <p className="period">유통기한:2024-08-26</p>
            </div>
            <Link to="/goods/1">
              <button className="gobutton">바로구매하기</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="carousel-slide">
        <div className="image-wrapper">
          <p className="price">깜짝할인특가</p>
          <div className="discount-icon">68% 할인</div>
          <div className="img-container">
            <img
              src="/image/longcandy.jpg"
              alt="이미지2"
              style={{ width: "200px", height: "200px" }}
            />
            <div className="dsc">
              <p className="discount-price">38,900원</p>
              <p className="main-price">120,000원</p>
              <p className="name">프루트팝 롤리팝 막대사탕 2kg*6봉</p>
              <p className="period">유통기한:2024-08-26</p>
            </div>
            <Link to="/goods/2">
              <button className="gobutton">바로구매하기</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="carousel-slide">
        <div className="image-wrapper">
          <p className="price">깜짝할인특가</p>
          <div className="discount-icon">54% 할인</div>
          <div className="img-container">
            <img
              src="/image/milk.jpg"
              alt="이미지3"
              style={{ width: "200px", height: "200px" }}
            />
            <div className="dsc">
              <p className="discount-price">32,900원</p>
              <p className="main-price">72,000원</p>
              <p className="name">쵸키 밀크 30g*144개</p>
              <p className="period">유통기한:2024-08-26</p>
            </div>
            <Link to="/goods/3">
              <button className="gobutton">바로구매하기</button>
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
