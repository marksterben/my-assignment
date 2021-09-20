import Marker from "../Marker";

import styles from "./NavFeatureHeader.module.css";

const NavFeatureHeader = () => {
  return (
    <div className={styles.header}>
      <div>Featured Post</div>
      <div>
        <Marker isActive />
        <Marker />
        <Marker />
      </div>
    </div>
  );
};

export default NavFeatureHeader;
