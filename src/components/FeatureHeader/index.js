import Marker from "../Marker";

import styles from "./FeatureHeader.module.css";

const FeatureHeader = () => {
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

export default FeatureHeader;
