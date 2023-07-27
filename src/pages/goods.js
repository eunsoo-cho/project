import Detail from "./detail";

const Goods = ({ cart, setCart, wishList, setWishList }) => {
  return (
    <Detail
      cart={cart}
      setCart={setCart}
      wishList={wishList}
      setWishList={setWishList}
    />
  );
};

export default Goods;
