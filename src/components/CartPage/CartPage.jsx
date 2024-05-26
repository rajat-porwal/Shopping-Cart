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