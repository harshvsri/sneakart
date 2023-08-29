import "./App.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  interface CartItem {
    name: string;
    price: number;
    img: string;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      name: "Test Item",
      price: 10,
      img: "",
    },
  ]);

  function handleAddToCart(item: CartItem) {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route
          path="/shop"
          element={<Shop handleAddToCart={handleAddToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
