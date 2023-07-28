import { TiDelete } from "react-icons/ti";
import "./cart.css";

const WishListList = ({
  wishList,
  handleWishRemove,
  handleCheckList,
  checkLists,
}) => {
  return (
    <section className="cart-product-list">
      <input
        type="checkbox"
        onChange={(e) => {
          handleCheckList(e.currentTarget.checked, wishList.id);
        }}
        checked={checkLists.includes(wishList.id) ? true : false}
      />
      <div className="cart-product-wrap">
        <div className="cart-product-image">
          <img src={wishList.image} alt="캔디이미지" />
        </div>

        <div className="cart-product-info">
          <p className="product-name">{wishList.name}</p>
          <p className="basket-price">{wishList.price}</p>
          <p className="delivery">택배배송/ 3000원</p>
        </div>
      </div>

      <div className="product-remove">
        <TiDelete
          className="delete"
          onClick={() => handleWishRemove(wishList.id)}
        />
      </div>
    </section>
  );
};
export default WishListList;
