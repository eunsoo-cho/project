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
    setCart((prevCart) => [...prevCart, ...selectedItems]); // 장바구니를 관리하는 상태 변수 'cart'와 해당 상태를 업데이트하는 setter 함수 'setCart'가 있다고 가정합니다.
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
