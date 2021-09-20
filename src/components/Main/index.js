import Body from "../Body";
import Header from "../Header";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Body />
    </div>
  );
};

export default Main;
