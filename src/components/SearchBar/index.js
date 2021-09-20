import { useState } from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search.."
        className={styles.searchInput}
      />
      <button type="button" className={styles.searchBtn}>
        <i className="fas fa-search fa-rotate-90"></i>
      </button>
    </div>
  );
};

export default SearchBar;
