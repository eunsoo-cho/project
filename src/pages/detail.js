import { useEffect } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getProducts } from "../service/fetcher";

const Detail = ({ cart, setCart, wishList, setWishList }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const price = parseFloat(product.price);

  const handleAmount = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };
  //장바구니에 물건 중복된 물건
  const setQuantity = (id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: quantity,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const handleCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: count,
    };
    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart([...cart, cartItem]);
  };

  console.log(cart);

  const setWishQuantity = (id, quantity) => {
    const found = wishList.filter((el) => el.id === id)[0];
    const idx = wishList.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: quantity,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const handleWishlist = () => {
    const wishlistItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: count,
    };
    const found = wishList.find((item) => item.id === wishlistItem.id);
    if (found) setWishQuantity(wishlistItem.id, found.quantity + count);
    setWishList([...wishList, wishlistItem]);
  };

  useEffect(() => {
    getProducts().then((data) => {
      const allItems = [
        ...data.data.categories["event"],
        ...data.data.categories["cookie"],
      ];
      setProduct(allItems.find((product) => product.id === parseInt(id)));
    });
  }, [id]);

  return (
    product && (
      <>
        <div className="product-detail-container">
          <div className="product-image">
            <img src={product.image} alt="주사위캔디" />
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">{product.dsc}</p>
            <div className="divider-line"></div>
            <div className="product-discount">할인율 {product.discount}</div>
            <p className="product-price">판매가 {product.price}</p>
            <p className="delivery">
              배송비 3000원 (50,000원 이상 구매 시 무료배송)
            </p>
            <div className="divider-line"></div>
            <div className="amount">
              <AiOutlineMinus
                className="minus"
                onClick={() => handleAmount("minus")}
              />
              <span>{count}</span>
              <AiOutlinePlus
                className="plus"
                onClick={() => handleAmount("plus")}
              />
            </div>
            <div className="divider-line"></div>
            <div className="total-price">
              총상품금액
              <div className="total-count">
                총수량 {count}개<p>{price * count}원</p>
              </div>
            </div>
            <button
              className="wishlist-button"
              onClick={() => handleWishlist()}
            >
              <BsFillSuitHeartFill className="wish-Heart" />
            </button>
            <button className="purchase">구매하기</button>/
            <button className="basket-button" onClick={() => handleCart()}>
              장바구니
            </button>
          </div>
        </div>
      </>
    )
  );
};
export default Detail;
