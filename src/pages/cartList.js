import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import "./cart.css";

const CartList = ({
  cart,
  handleQuantity,
  handleRemove,
  handleCheckList,
  checkLists,
}) => {
  return (
    <section className="cart-product-list">
      <input
        type="checkbox"
        onChange={(e) => {
          handleCheckList(e.currentTarget.checked, cart.id);
        }}
        checked={checkLists.includes(cart.id) ? true : false}
      />
      <div className="cart-product-wrap">
        <div className="cart-product-image">
          <img
            className="cart-product-image-img"
            src={cart.image}
            alt="캔디이미지"
          />
        </div>

        <div className="cart-product-info">
          <p className="product-name">{cart.name}</p>
          <p className="basket-price">{cart.price}</p>
        </div>
      </div>

      <div className="amount">
        <AiOutlineMinus
          className="minus"
          onClick={() => handleQuantity("minus", cart.id, cart.quantity - 1)}
        />
        <span>{cart.quantity}</span>
        <AiOutlinePlus
          className="plus"
          onClick={() => handleQuantity("minus", cart.id, cart.quantity + 1)}
        />
      </div>
      <div className="cart-product-price">
        <p className="total-price"></p>
        <button className="btn-submit">주문하기</button>

        <div className="product-remove">
          <TiDelete className="delete" onClick={() => handleRemove(cart.id)} />
        </div>
      </div>
    </section>
  );
};
export default CartList;
