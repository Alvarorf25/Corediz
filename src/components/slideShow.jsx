import React from "react";

import * as styles from "./slideShow.module.scss";

function SlideShow(props) {
  return (
    <img
      className={`${styles.slideShow} ${props.className}`}
      src={require("../assets/Banner.jpg").default}
      alt="BANNER"
    />
  );
}

export default SlideShow;
export { SlideShow };
