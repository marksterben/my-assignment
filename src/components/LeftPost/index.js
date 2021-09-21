import classNames from "classnames";

import styles from "./LeftPost.module.css";
import leftImage from "../../assets/images/left-image.jpg";

const LeftPost = () => {
  return (
    <div className={styles.left}>
      <div className={classNames(styles.col, styles.space)}>
        <img className={styles.imgFluid} src={leftImage} alt="" />
      </div>
      <div className={styles.col}>
        <p className={styles.title}>Ante Interdum Raclette</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est
          risus, sollicitudin vel urna quis, ultricies iaculis nisi. Morbi
          eleifend nulla sed urna fermentum, in luctus nisl tempor. Ut aliquam
          pharetra est eget vehicula. Pellentesque nibh quam, consequat pharetra
          pretium ac, fringilla non lacus. Nulla facilisi. Duis condimentum,
          mauris sit amet bibendum convallis, tortor eros aliquam diam, sit amet
          laoreet urna leo a ipsum. Mauris quam urna, faucibus eget euismod nec,
          ullamcorper sit amet mi.
        </p>
        <p className={styles.text}>
          Suspendisse posuere suscipit sodales. Suspendisse quis erat tincidunt,
          auctor ex sed, rhoncus velit. Donec convallis magna leo, congue varius
          tortor mattis ut. Suspendisse sed est non ipsum ullamcorper vehicula.
          Mauris dictum enim ante, ut cursus odio blandit eu.
        </p>
        <button className={styles.btn}>READ MORE</button>
      </div>
    </div>
  );
};

export default LeftPost;
