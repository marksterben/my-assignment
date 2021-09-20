import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <button className={styles.sidebarToggle} type="button">
        <i className="fas fa-bars"></i>
      </button>
      <span className={styles.brand}>RAMAYANA</span>
    </div>
  );
};

export default Header;
