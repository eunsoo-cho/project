import { Link } from "react-router-dom";

const Product = ({ product, converPrice }) => {
  return (
    <div className="products-container">
      <Link to={`/goods/${product.id}`}>
        <div className="image-box">
          <img src={product.image} alt="이미지1"></img>
        </div>
      </Link>
      <div className="dsc-product">
        <p className="total-name">{product.name}</p>
        <div className="dsc-product-two">
          <p className="total-discount">{product.discount}</p>
          <p className="total-price">{converPrice(product.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
