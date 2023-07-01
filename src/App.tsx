import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Checkout from "./components/CheckOut";
import Login from "./components/Login";
import Footer from "./components/Footer";

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
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
