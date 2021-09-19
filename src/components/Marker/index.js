import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Marker.module.css";

const Marker = ({ isActive = false }) => {
  return (
    <span
      className={classNames(styles.marker, { [styles.active]: isActive })}
    />
  );
};

Marker.propTypes = {
  isActive: PropTypes.bool,
};

export default Marker;
