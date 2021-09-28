import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Container.module.css";

const Container = ({ children, hide }) => {
  return (
    <div
      className={classNames(styles.container, { [styles.hideNavbar]: hide })}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  hide: PropTypes.bool.isRequired,
};

export default Container;
