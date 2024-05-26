import Card from "../ProductCard/ProductCard";
import styles from "./Homepage.module.css";

import { useOutletContext } from "react-router-dom";

function HomePage() {
  const [products, setCart, cart] = useOutletContext();

  function handleClickAdd(e) {
    const currentValue = +e.target.dataset.value;

    const productInCart = cart.find((product) => product.id === currentValue);

    if (productInCart) {
      setCart(
        cart.map((product) =>
          product.id === currentValue
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : product
        )
      );
    } else {
      let targetProduct = products.filter((product) => {
        return product.id === currentValue;
      });
      targetProduct = { ...targetProduct[0], quantity: 1 };
      setCart([...cart, targetProduct]);
    }
  }
}
 