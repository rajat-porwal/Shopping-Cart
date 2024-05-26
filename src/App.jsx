import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import fetchProducts from "./components/FetchProducts/fetchProducts";
import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((result) => {
      setProducts(result);
    });
    return () => {
      setProducts([]);
    };
  }, []);

  const itemsInCart = cart.reduce((total, currentItem) => {
    return total + +currentItem.quantity;
  }, 0);

  return (
    <div className="main-div">
      <Header cartItems={itemsInCart} changeCart={setCart} />
      <div>
        <Outlet context={[products, setCart, cart]} />
      </div>
    </div>
  );
}

export default App;
