import PropTypes from "prop-types";

import Body from "../Body";
import Header from "../Header";

import styles from "./Main.module.css";

const Main = ({ sidebarHandler }) => {
  return (
    <div className={styles.main}>
      <Header sidebarHandler={sidebarHandler} />
      <Body />
    </div>
  );
};

Main.propTypes = {
  sidebarHandler: PropTypes.func.isRequired,
};

export default Main;
