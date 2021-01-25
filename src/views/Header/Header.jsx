import React from "react";
import * as styles from "./Header.module.scss";

import { Logo, SearchInput, Profile, ShopCart } from "../../components";

class Header extends React.Component {
  render() {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        <Logo />
        <SearchInput className={styles.customSearchInput} />
        <Profile userName={"Pepe"} />
        <ShopCart numberOfItems={4} />
      </div>
    );
  }
}

export default Header;
export { Header };
