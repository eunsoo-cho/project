import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Wishlist from "./pages/wishlist";
import Home from "./pages/home";
import Header from "./component/header";
import Register from "./pages/register";
import { useState, useEffect } from "react";
import Phome from "./pages/phome";
import Goods from "./pages/goods";
import Event from "./pages/event";
import Food from "./pages/food";
import Basket from "./pages/basket";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [checkLists, setCheckLists] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [total, setTotal] = useState(0);
  const converPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          handleLogout={handleLogout}
          products={products}
          setProducts={setProducts}
        />
        <Routes>
          <Route
            path="/"
            element={<Home products={products} setProducts={setProducts} />}
          />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart"
            element={
              <Basket
                cart={cart}
                setCart={setCart}
                checkLists={checkLists}
                setCheckLists={setCheckLists}
                total={total}
                setTotal={setTotal}
              />
            }
          />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishList={wishList}
                setWishList={setWishList}
                checkLists={checkLists}
                setCheckLists={setCheckLists}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/phome"
            element={
              <Phome
                products={products}
                setProducts={setProducts}
                converPrice={converPrice}
              />
            }
          />
          <Route
            path="/event"
            element={
              <Event
                products={products}
                setProducts={setProducts}
                converPrice={converPrice}
              />
            }
          />
          <Route
            path="/food"
            element={
              <Food
                products={products}
                setProducts={setProducts}
                converPrice={converPrice}
              />
            }
          />
          <Route
            path="/goods/:id"
            element={
              <Goods
                cart={cart}
                setCart={setCart}
                wishList={wishList}
                setWishList={setWishList}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
