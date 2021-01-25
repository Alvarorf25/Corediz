import React from "react";
import * as styles from "./searchInput.module.scss";

class SearchInput extends React.Component {
  render() {
    return (
      <div className={`${styles.search_input} ${this.props.className}`}>
        <input type="text" placeholder="que estas buscando?..." />
        <img src={require("../assets/loupe.png").default} alt="LUPA" />
      </div>
    );
  }
}

export default SearchInput;
export { SearchInput };
