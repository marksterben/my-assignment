import PropTypes from "prop-types";
import classNames from "classnames";

import SearchBar from "../SearchBar";
import Nav from "../Nav";
import NavFeature from "../NavFeature";

import styles from "./Navbar.module.css";

const Navbar = ({ click }) => {
  return (
    <nav className={classNames(styles.navbar, { [styles.toggle]: click })}>
      <SearchBar />
      <Nav />
      <NavFeature />
    </nav>
  );
};

Navbar.propTypes = {
  click: PropTypes.bool.isRequired,
};

export default Navbar;
