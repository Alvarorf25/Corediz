import React from "react";
import * as styles from "./shopCart.module.scss";

function ShopCart(props) {
  return (
    <div className={`${styles.shopCart} ${props.className}`}>
      <img src={require("../assets/shopping-cart.png").default} alt="CART" />
      <div>{props.numberOfItems}</div>
    </div>
  );
}

export default ShopCart;
export { ShopCart };
