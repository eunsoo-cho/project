const CartTotal = () => {
  return (
    <div className="total">
      <div className="cart-total">
        <p className="cart-total-name">총 상품금액</p>
        <p className="cart-product-price">0</p>
      </div>
      <div className="total-delivery">
        <p className="total-delivert-name">총 배송비</p>
        <p className="total-delivery-price">0</p>
      </div>
      <div className="payment">
        <p className="total-payment">결제예정금액</p>
        <p className="total-payment-price">0</p>
      </div>
    </div>
  );
};
export default CartTotal;
