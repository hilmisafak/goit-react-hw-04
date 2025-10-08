import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Circles ariaLabel="loading" height={80} width={80} />
    </div>
  );
};

export default Loader;
