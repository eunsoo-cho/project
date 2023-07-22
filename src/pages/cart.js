import "./cart.css";
import CartList from "./cartList";
import CartHeader from "./cartHeader";
import CartTotal from "./cartTotal";

const Cart = ({ cart }) => {
  if (!cart || cart.length === 0) {
    return <p>장바구니가 비어있습니다.</p>;
  }
  return (
    <>
      <CartHeader />
      {cart.map((cart) => {
        return <CartList />;
      })}
      <CartTotal />
    </>
  );
};

export default Cart;
