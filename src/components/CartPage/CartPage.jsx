import styles from "./CartPage.module.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import PropTypes from "prop-types";

function CartPage() {
  const [, setCart, cart] = useOutletContext();

  const initialInputValue = cart.reduce((prev, currentValue) => {
    return { ...prev, [currentValue.id]: currentValue.quantity };
  }, {});

  const [inputs, setInputs] = useState(initialInputValue);

  function handleSubmit(e) {
    e.preventDefault();

    const newArray = cart.map((product) => {
      if (product.id in inputs) {
        product.quantity = inputs[product.id];
        return product;
      } else {
        return product;
      }
    });

    setCart(newArray);
  }

  function handleChange(e) {
    e.preventDefault();
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleDelete(e) {
    const currentDataValue = +e.target.dataset.value;
    setCart(
      cart.filter((product) => {
        return product.id !== currentDataValue;
      })
    );
  }
  let totalPrice = cart.reduce((total, currentItem) => {
    return (
      Math.round((total + currentItem.price * currentItem.quantity) * 100) / 100
    );
  }, 0);
  return (
    <div>
      <h2>Your added products:</h2>
      <ProductTable
        cart={cart}
        handleDelete={handleDelete}
        inputHandler={handleChange}
        handleSubmit={handleSubmit}
        totalPrice={totalPrice}
        inputs={inputs}
      />
    </div>
  );
}

function ProductTable(props) {
  return (
    <form onSubmit={props.handleSubmit} action="/">
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <input
                  className={styles.quantityInput}
                  type="number"
                  name={product.id}
                  value={props.inputs[product.id] || ""}
                  onChange={props.inputHandler}
                />
              </td>
              <td>{product.price.toFixed(2)}</td>
              <td>
                <button
                  type="button"
                  data-value={product.id}
                  onClick={props.handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>TOTAL</td>
            <td colSpan={2}>{props.totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
      <button type="submit" hidden></button>
    </form>
  );
}

ProductTable.propTypes = {
  cart: PropTypes.array,
  handleDelete: PropTypes.func,
  inputHandler: PropTypes.func,
  handleSubmit: PropTypes.func,
  totalPrice: PropTypes.number,
};

export default CartPage;
