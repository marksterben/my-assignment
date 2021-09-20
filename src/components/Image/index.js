import styles from "./Image.module.css";

const Image = ({ image }) => {
  return <img className={styles.imgFluid} src={image} alt="" />;
};

export default Image;
