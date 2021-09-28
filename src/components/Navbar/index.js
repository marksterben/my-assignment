import SearchBar from "../SearchBar";
import Nav from "../Nav";
import NavFeature from "../NavFeature";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <SearchBar />
      <Nav />
      <NavFeature />
    </nav>
  );
};

export default Navbar;
