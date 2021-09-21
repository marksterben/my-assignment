import FeatureCard from "../FeatureCard";

import styles from "./Feature.module.css";

import icon1 from "../../assets/images/icon_01.png";
import icon2 from "../../assets/images/icon_02.png";
import icon3 from "../../assets/images/icon_03.png";
import icon4 from "../../assets/images/icon_04.png";
import icon5 from "../../assets/images/icon_05.png";
import icon6 from "../../assets/images/icon_06.png";

import iconHover1 from "../../assets/images/icon_hover_01.png";
import iconHover2 from "../../assets/images/icon_hover_02.png";
import iconHover3 from "../../assets/images/icon_hover_03.png";
import iconHover4 from "../../assets/images/icon_hover_04.png";
import iconHover5 from "../../assets/images/icon_hover_05.png";
import iconHover6 from "../../assets/images/icon_hover_06.png";

const Feature = () => {
  return (
    <div className={styles.feature}>
      <FeatureCard
        title={"Web Design"}
        image={icon1}
        imageHover={iconHover1}
        text={
          <>
            Credit goes to <span className={styles.textColor}>Pexels</span> and{" "}
            <span className={styles.textColor}>Raw Pixel</span> for
            <br /> images used in this template. Thank you.
          </>
        }
      />
      <FeatureCard
        title={"Bootstrap 4"}
        image={icon2}
        imageHover={iconHover2}
        text={
          <>
            Proin aliquam facilisis ante interdum. <br />
            Sed nulla feugiat tempus aliquam.
          </>
        }
      />
      <FeatureCard
        title={"HTML CSS"}
        image={icon3}
        imageHover={iconHover3}
        text={
          <>
            Proin aliquam facilisis ante interdum. <br />
            Sed nulla feugiat tempus aliquam.
          </>
        }
      />
      <FeatureCard
        title={"Download Free"}
        image={icon4}
        imageHover={iconHover4}
        text={
          <>
            We have many free to use CSS web <br />
            templates on our site for you.
          </>
        }
      />
      <FeatureCard
        title={"Get in touch"}
        image={icon5}
        imageHover={iconHover5}
        text={
          <>
            You can get the fastest response from <br />
            <span className={styles.textColor}>templatemo</span> facebook page.
          </>
        }
      />
      <FeatureCard
        title={"Spread a word"}
        image={icon6}
        imageHover={iconHover6}
        text={
          <>
            Please tell your friends about our <br />
            webiste. This is very helpful.
          </>
        }
      />
    </div>
  );
};

export default Feature;
