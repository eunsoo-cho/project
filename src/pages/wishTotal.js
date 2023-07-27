const WishTotal = ({ cart, setCart, setCheckLists, checkLists }) => {
  const handleOrder = () => {
    alert("전체상품을 주문합니다!");
  };
  const handleAddToCart = () => {
    const selectedItems = cart.filter((item) => checkLists.includes(item.id));
    setCart((prevCart) => [...prevCart, ...selectedItems]);
    setCheckLists([]);
  };
  const handleClearWishlist = () => {
    setCart([]);
    setCheckLists([]);
  };
  return (
    <div>
      <button onClick={handleClearWishlist}>관심상품 비우기</button>
      <button onClick={handleAddToCart}>장바구니에 담기</button>
      <button onClick={handleOrder}>전체상품 주문하기</button>
    </div>
  );
};

export default WishTotal;
