import React from 'react';

import * as styles from "./Footer.module.scss";

function Footer(props) {
    return (
      <footer className={`${styles.footer}`}>
          <div className={`${styles.information}`}>
                <h2>Localización</h2>             
                <span>Avenida Andromeda 2000 Bloco 6 y 8</span>
                <span>Alphavile SP</span>
                <span>brasil@corebiz.ag </span>
                <span>+55 11 3090 1039</span>            
          </div>
          <div>

          </div>
          <div>

          </div>
      </footer>
    );
}

export default Footer;