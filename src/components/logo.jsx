import React from "react";
import * as styles from "./logo.module.scss";

function Logo(props) {
  return (
    <img
      className={`${styles.logo} ${props.className}`}
      src={require("../assets/logo.png").default}
      alt="LOGO"
    />
  );
}

export default Logo;
export { Logo };
