import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description || "Image"}
        className={styles.image}
      />
      <div className={styles.info}>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        {image.description && <p>{image.description}</p>}
      </div>
      <button className={styles.close} onClick={onRequestClose}>
        Kapat
      </button>
    </Modal>
  );
};

export default ImageModal;
