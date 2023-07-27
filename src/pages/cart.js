import "./cart.css";
import CartList from "./cartList";
import CartHeader from "./cartHeader";
import CartTotal from "./cartTotal";
import { useState } from "react";

const Cart = ({ cart, setCart, checkLists, setCheckLists }) => {
  const [total, setTotal] = useState(0);

  const handleQuantity = (type, id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: found.id,
      image: found.image,
      name: found.name,
      price: found.price,
      quantity: quantity,
    };
    if (type === "plus") {
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    } else {
      if (quantity === 0) return;
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((el) => el.id !== id));
    setCheckLists(checkLists.filter((check) => check !== id));
  };

  const handleCheckList = (checked, id) => {
    if (checked) {
      setCheckLists([...checkLists, id]);
    } else {
      setCheckLists(checkLists.filter((check) => check !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const checkItems = [];
      cart.map((cart) => checkItems.push(cart.id));
      setCheckLists(checkItems);
    } else {
      setCheckLists([]);
    }
  };

  const isAllChecked =
    cart.length === checkLists.length && checkLists.length !== 0;

  const found = checkLists.map((checkList) =>
    cart.filter((el) => el.id === checkList)
  );

  return (
    <>
      <div className="header">장바구니</div>
      <CartHeader handleAllCheck={handleAllCheck} isAllChecked={isAllChecked} />
      {cart.length === 0 ? (
        <div className="empty">
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
        </div>
      ) : (
        cart.map((cart) => {
          return (
            <CartList
              key={`key-${cart.id}`}
              cart={cart}
              handleQuantity={handleQuantity}
              handleRemove={handleRemove}
              handleCheckList={handleCheckList}
              checkLists={checkLists}
            />
          );
        })
      )}

      {cart.length === 0 ? (
        ""
      ) : (
        <CartTotal
          total={total}
          setTotal={setTotal}
          found={found}
          cart={cart}
        />
      )}
    </>
  );
};

export default Cart;
