import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Wishlist from "./pages/wishlist";
import Home from "./pages/home";
import Header from "./component/header";
import Register from "./pages/register";
import { useState } from "react";
import Phome from "./pages/phome";
import Goods from "./pages/goods";
import Event from "./pages/event";
import Food from "./pages/food";
import Basket from "./pages/basket";
import Cart from "./pages/cart";

function App() {
  const [products, setProducts] = useState([]);

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
            path="/phome"
            element={<Phome products={products} setProducts={setProducts} />}
          />
          <Route
            path="/event"
            element={<Event products={products} setProducts={setProducts} />}
          />
          <Route
            path="/food"
            element={<Food products={products} setProducts={setProducts} />}
          />
          <Route
            path="/goods/:id"
            element={<Goods cart={cart} setCart={setCart} />}
          />
          <Route
            path="/basket"
            element={<Basket cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
