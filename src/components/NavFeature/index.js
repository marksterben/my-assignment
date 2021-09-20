import FeatureHeader from "../FeatureHeader";
import FeatureBody from "../FeatureBody";

import styles from "./NavFeature.module.css";

const NavFeature = () => {
  return (
    <div className={styles.featured}>
      <FeatureHeader />
      <hr />
      <FeatureBody />
    </div>
  );
};

export default NavFeature;
