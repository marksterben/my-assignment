import FeatureBody from "../FeatureBody";
import NavFeatureHeader from "../NavFeatureHeader";

import styles from "./NavFeature.module.css";

const NavFeature = () => {
  return (
    <div className={styles.featured}>
      <NavFeatureHeader />
      <hr />
      <FeatureBody />
    </div>
  );
};

export default NavFeature;
