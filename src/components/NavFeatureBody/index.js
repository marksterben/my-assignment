import styles from "./NavFeatureBody.module.css";
import featuredPost from "../../assets/images/featured_post_01.jpg";

const NavFeatureBody = () => {
  return (
    <div className={styles.body}>
      <div>
        <img className={styles.img} src={featuredPost} alt="" />
      </div>
      <p className={styles.description}>
        Aliquam egestas convallis eros sed gravida. Curabitur consequat sit
      </p>
    </div>
  );
};

export default NavFeatureBody;
