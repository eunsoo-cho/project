const CartHeader = () => {
  return (
    <>
      <div className="header">장바구니</div>
      <div className="title-wrap">
        <div className="title-table">
          <input type="checkbox" />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>
        </div>
      </div>
    </>
  );
};

export default CartHeader;
