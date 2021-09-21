import NavItem from "../NavItem";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={styles.nav}>
      <NavItem title={"HOMEPAGE"} />
      <hr />
      <NavItem title={"SIMPLE PAGE"} />
      <hr />
      <NavItem title={"SHORTCODES"} />
      <hr />
      <NavItem title={"DROPDOWN ONE"} isDropdown />
      <hr />
      <NavItem title={"DROPDOWN TWO"} isDropdown />
      <hr />
      <NavItem title={"EXTERNAL LINK"} />
    </ul>
  );
};

export default Nav;
