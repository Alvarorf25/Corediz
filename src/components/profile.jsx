import React from "react";
import * as styles from "./profile.module.scss";

function Profile(props) {
  return (
    <div className={`${styles.profile} ${props.className}`}>
      <img src={require("../assets/account.png").default} alt="USER" />
      <span>{props.userName}</span>
    </div>
  );
}

export default Profile;
export { Profile };
