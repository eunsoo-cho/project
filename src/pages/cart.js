import "./cart.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CartHeader from "./cartHeader";

const Cart = () => {
  return (
    <>
      <CartHeader />
      <section className="cart-product-list">
        <input type="checkbox" />
        <div className="cart-product-wrap">
          <div className="cart-product-image">
            <img src="./image/candy.jpg" alt="캔디이미지" />
          </div>

          <div className="cart-product-info">
            <p className="product-name">주사위캔디 33g</p>
            <p className="price">100원</p>
            <p className="delivery">택배배송/ 3000원</p>
          </div>

          <div className="amount">
            <AiOutlineMinus className="minus" />
            <span>1개</span>
            <AiOutlinePlus className="plus" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
