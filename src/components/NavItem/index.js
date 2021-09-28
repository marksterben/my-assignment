import { useState } from "react";

import PropTypes from "prop-types";

import styles from "./NavItem.module.css";

const NavItem = ({ title, isDropdown = false }) => {
  const [visible, setVisible] = useState(false);

  return (
    <li>
      <div className={styles.navItem} onClick={() => setVisible(!visible)}>
        <span>{title}</span>{" "}
        {isDropdown && <i className="fas fa-caret-down"></i>}
      </div>
      {isDropdown
        ? visible && (
            <div className={styles.collapse}>
              <span className={styles.dropDownItem}>MENU 1</span>
              <span className={styles.dropDownItem}>MENU 2</span>
            </div>
          )
        : ""}
    </li>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  isDropdown: PropTypes.bool,
};

export default NavItem;
