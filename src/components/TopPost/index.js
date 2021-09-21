import styles from "./TopPost.module.css";

import topImage from "../../assets/images/top-image.jpg";

const TopPost = () => {
  return (
    <div>
      <img className={styles.imgFluid} src={topImage} alt="" />
      <p className={styles.title}>Ante Interdum Chambray</p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est risus,
        sollicitudin vel urna quis, ultricies iaculis nisi. Morbi eleifend nulla
        sed urna fermentum, in luctus nisl tempor. Ut aliquam pharetra est eget
        vehicula. Pellentesque nibh quam, consequat pharetra pretium ac,
        fringilla non lacus. Nulla facilisi. Duis condimentum, mauris sit amet
        bibendum convallis, tortor eros aliquam diam, sit amet laoreet urna leo
        a ipsum.
      </p>
      <button className={styles.btn}>READ MORE</button>
    </div>
  );
};

export default TopPost;
