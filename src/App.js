import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import Home from "./pages/home";
import Header from "./component/header";
import Register from "./pages/register";
import { useState } from "react";
import Main from "./pages/main";
import Goods from "./pages/goods";
import Event from "./pages/event";
import Food from "./pages/food";
import Basket from "./pages/basket";

function App() {
  const [products, setProducts] = useState([]);
  const categoryName = "event";
  const [cart, setCart] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home products={products} setProducts={setProducts} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/main"
            element={
              <Main
                products={products}
                setProducts={setProducts}
                categoryName={categoryName}
              />
            }
          />
          <Route
            path="/event"
            element={
              <Event
                products={products}
                setProducts={setProducts}
                categoryName={categoryName}
              />
            }
          />
          <Route
            path="/food"
            element={
              <Food
                products={products}
                setProducts={setProducts}
                categoryName={categoryName}
              />
            }
          />
          <Route
            path="/goods/:id"
            element={<Goods cart={cart} setCart={setCart} />}
          />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
