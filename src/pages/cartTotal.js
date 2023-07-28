import { useEffect } from "react";

const CartTotal = ({ total, setTotal, found, cart }) => {
  const handleOrder = () => {
    alert("전체상품을 주문합니다!");
  };
  useEffect(() => {
    if (found) {
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.map(
        (item) => parseFloat(item[0].price) * item[0].quantity
      );
      const reducer = (acc, cur) => acc + cur;
      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [cart, found, setTotal, total]);
  return (
    <>
      <div className="total">
        <div className="cart-total">
          <p className="cart-total-name">총 상품금액</p>
          <p className="cart-product-price">{total} </p>
        </div>
        <div className="total-delivery">
          <p className="total-delivert-name">총 배송비</p>
          <p className="total-delivery-price">0</p>
        </div>
        <div className="payment">
          <p className="total-payment">결제예정금액</p>
          <p className="total-payment-price">{total}</p>
        </div>
        <div className="handleorder" onClick={handleOrder}>
          전체상품주문하기
        </div>
      </div>
    </>
  );
};
export default CartTotal;
