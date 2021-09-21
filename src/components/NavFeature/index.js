import NavFeatureBody from "../NavFeatureBody";
import NavFeatureHeader from "../NavFeatureHeader";

import styles from "./NavFeature.module.css";

const NavFeature = () => {
  return (
    <div className={styles.featured}>
      <NavFeatureHeader />
      <hr />
      <NavFeatureBody />
    </div>
  );
};

export default NavFeature;
