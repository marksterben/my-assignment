import Feature from "../Feature";
import Hero from "../Hero";
import LeftPost from "../LeftPost";
import RightPost from "../RightPost";
import TopPost from "../TopPost";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <div className={styles.body}>
      <Hero />
      <hr />
      <Feature />
      <hr />
      <TopPost />
      <hr />
      <LeftPost />
      <hr />
      <RightPost />
    </div>
  );
};

export default Body;
