import "./cart.css";

const WishTotal = ({
  setCart,
  wishList,
  setWishList,
  setCheckLists,
  checkLists,
}) => {
  const handleOrder = () => {
    alert("전체상품을 주문합니다!");
  };
  const handleAddToCart = () => {
    const selectedItems = wishList.filter((item) =>
      checkLists.includes(item.id)
    );
    setWishList((prevWishlist) =>
      prevWishlist.filter((item) => !checkLists.includes(item.id))
    );
    setCheckLists([]);
    setCart((prevCart) => [...prevCart, ...selectedItems]);
  };
  const handleClearWishlist = () => {
    setWishList([]);
    setCheckLists([]);
  };
  return (
    <div className="button-container">
      <button className="order-button" onClick={handleClearWishlist}>
        관심상품 비우기
      </button>
      <button className="order-button" onClick={handleAddToCart}>
        장바구니에 담기
      </button>
      <button className="order-button" onClick={handleOrder}>
        전체상품 주문하기
      </button>
    </div>
  );
};

export default WishTotal;
