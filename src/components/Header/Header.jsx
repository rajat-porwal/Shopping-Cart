import styles from "./Header.module.css";

import PropTypes from "prop-types";
import cartIcon from "/src/assets/cart.svg";
import { Link } from "react-router-dom";

function Header(props) {
  function handleCheckout() {
    if (props.cartItems === 0) return;
    props.changeCart([]);
  }

  return (
    <div className={styles.header}>
      <div className="header-left-section">
        <Link to="/homepage" className={styles.logo}>
          W@lterComp
        </Link>
      </div>
      <div className={styles.headerRightSection}>
        <div className={styles.cart}>
          <Link to="/cart" className={styles.countItems}>
            <img className={styles.cartLogo} src={cartIcon} alt="cart icon" />{" "}
            {props.cartItems} Items
          </Link>
          <Link to="/checkout" state={{ count: props.cartItems }}>
            <button className={styles.buttonHeader} onClick={handleCheckout}>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
Header.propTypes = {
  cartItems: PropTypes.number,
  changeCart: PropTypes.func,
};

export default Header;
