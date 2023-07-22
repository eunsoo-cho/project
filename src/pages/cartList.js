import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import "./cart.css";

const CartList = () => {
  return (
    <section className="cart-product-list">
      <input type="checkbox" />
      <div className="cart-product-wrap">
        <div className="cart-product-image">
          <img src="./image/candy.jpg" alt="캔디이미지" />
        </div>

        <div className="cart-product-info">
          <p className="product-name">주사위캔디 33g</p>
          <p className="basket-price">100원</p>
          <p className="delivery">택배배송/ 3000원</p>
        </div>
      </div>

      <div className="amount">
        <AiOutlineMinus className="minus" />
        <span>1개</span>
        <AiOutlinePlus className="plus" />
      </div>
      <div className="cart-product-price">
        <p className="total-price"></p>
        <button className="btn-submit">주문하기</button>

        <div className="product-remove">
          <TiDelete className="delete" />
        </div>
      </div>
    </section>
  );
};
export default CartList;
