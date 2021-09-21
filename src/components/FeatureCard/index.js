import { useState } from "react";

import PropTypes from "prop-types";

import styles from "./FeatureCard.module.css";

const FeatureCard = ({ title, text, image, imageHover }) => {
  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(!hover);
  };

  return (
    <div
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      className={styles.featureCard}
    >
      <img className={styles.cardImg} src={hover ? imageHover : image} alt="" />
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
