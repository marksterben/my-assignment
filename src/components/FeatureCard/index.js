import PropTypes from "prop-types";

import styles from "./FeatureCard.module.css";

const FeatureCard = ({ title, text, image }) => {
  return (
    <div className={styles.featureCard}>
      <img className={styles.cardImg} src={image} alt="" />
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

export default FeatureCard;
