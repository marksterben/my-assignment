import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroCard}>
        <p className={styles.cardTitle}>
          Hello, this is your <br />
          <span className={styles.textColor}>Ramayana</span> Theme.
        </p>
        <p className={styles.cardSubtitle}>AWESOME HTML5 & CSS3 TEMPLATE</p>
        <p className={styles.cardText}>
          Do you know that Ramayana is a free to use <br />
          Bootstrap 4 CSS template by templatemo? You can <br />
          edit and add more pages as you wanted for your <br />
          personal or corporate websites
        </p>
        <button className={styles.btn}>READ MORE</button>
      </div>
    </div>
  );
};

export default Hero;
