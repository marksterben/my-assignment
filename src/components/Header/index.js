import PropTypes from "prop-types";

import styles from "./Header.module.css";

const Header = ({ sidebarHandler }) => {
  return (
    <div className={styles.header}>
      <button
        onClick={sidebarHandler}
        className={styles.sidebarToggle}
        type="button"
      >
        <i className="fas fa-bars"></i>
      </button>
      <span className={styles.brand}>RAMAYANA</span>
    </div>
  );
};

Header.propTypes = {
  sidebarHandler: PropTypes.func.isRequired,
};

export default Header;
