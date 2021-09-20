import PropTypes from "prop-types";

import styles from "./Title.module.css";

const Title = ({ title }) => {
  <p class={styles.title}>{title}</p>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
