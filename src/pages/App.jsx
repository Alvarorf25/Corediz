import React from "react";
import Header from "../views/Header/Header";
import BodyItems from "../views/BodyItems/BodyItems";
import Footer from '../views/Footer/Footer';

import { SlideShow } from "../components";
import * as styles from "./App.module.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header className={styles.appLayout} />
        <SlideShow />
        <BodyItems className={styles.appLayout} />
        <Footer />  
      </div>
    );
  }
}

export default App;
