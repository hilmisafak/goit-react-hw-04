import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        Daha Fazla Yükle
      </button>
    </div>
  );
};

export default LoadMoreBtn;
