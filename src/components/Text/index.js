import PropTypes from "prop-types";

import styles from "./Text.module.css";

const Text = ({ text }) => {
  <p class={styles.text}>{text}</p>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
