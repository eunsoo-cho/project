import { useEffect } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);

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
    const found = cart.filter((el) => el.id === id[0]);
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
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

  useEffect(() => {
    axios
      .get("/data/products.json")
      .then((data) => {
        const categoryNames = ["event", "cookie"];
        const foundProduct = categoryNames
          .map((categoryName) => data.data.categories[categoryName])
          .flat()
          .find((item) => item.id === parseInt(id));

        if (foundProduct) {
          foundProduct.price = parseInt(foundProduct.price);
          setProduct(foundProduct);
        } else {
          console.error("Product not found!");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
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
            총수량 {count}개<p>{product.price * count}원</p>
          </div>
        </div>
        <Link to="/wishlist">
          <button className="wishlist-button">
            <BsFillSuitHeartFill className="wish-Heart" />
          </button>
        </Link>
        <button className="purchase">구매하기</button>/
        <button className="basket-button" onClick={() => handleCart()}>
          장바구니
        </button>
        /
      </div>
    </div>
  );
};
export default Detail;
