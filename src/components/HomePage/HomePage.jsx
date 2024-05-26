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

  return (
    <div>
      <h2>Welcome to our store!</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            handleClickAdd={handleClickAdd}
            data={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
