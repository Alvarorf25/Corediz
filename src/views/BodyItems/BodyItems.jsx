import React from "react";
import axios from "axios";

import * as styles from "./BodyItems.module.scss";

class BodyItems extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isFetching: true
    };
  }

  async fetchData() {
    // delay timer for see the loading experience
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // call to the api to get data
    const resp = await axios.get(
      "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products"
    );

    this.setState({ products: resp.data, isFetching: false });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        {this.state.isFetching ? (
          <div>Loading...</div>
        ) : (
          <pre>{JSON.stringify(this.state.products, null, 2)}</pre>
        )}
      </div>
    );
  }
}

export default BodyItems;
export { BodyItems };
