import Modal from "react-modal";
import { useState, useEffect } from "react";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({
  isOpen,
  onRequestClose,
  image,
  images = [],
  currentIndex = 0,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);

  useEffect(() => {
    setSelectedIndex(currentIndex);
  }, [currentIndex, isOpen]);

  const handlePrevious = () => {
    if (images.length > 0) {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    }
  };

  const handleNext = () => {
    if (images.length > 0) {
      setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }
  };

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const currentImage = images.length > 0 ? images[selectedIndex] : image;

  const getThumbnails = () => {
    if (images.length <= 6) {
      return {
        left: images.slice(0, Math.ceil(images.length / 2)),
        right: images.slice(Math.ceil(images.length / 2)),
      };
    }

    const startIndex = Math.max(0, selectedIndex - 3);
    const endIndex = Math.min(images.length, startIndex + 6);
    const visibleImages = images.slice(startIndex, endIndex);

    return {
      left: visibleImages.slice(0, 3),
      right: visibleImages.slice(3, 6),
    };
  };

  const { left: leftThumbnails, right: rightThumbnails } = getThumbnails();

  if (!currentImage) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        {images.length > 0 && leftThumbnails.length > 0 && (
          <div className={styles.leftThumbnails}>
            {leftThumbnails.map((img, index) => {
              const actualIndex = images.findIndex(
                (image) => image.id === img.id
              );
              return (
                <div
                  key={img.id}
                  className={`${styles.thumbnail} ${actualIndex === selectedIndex ? styles.active : ""}`}
                  onClick={() => handleThumbnailClick(actualIndex)}
                >
                  <img
                    src={img.urls.small}
                    alt={img.alt_description || "Thumbnail"}
                    className={styles.thumbnailImage}
                  />
                </div>
              );
            })}
          </div>
        )}

        <div className={styles.mainImageContainer}>
          <img
            src={currentImage.urls.regular}
            alt={currentImage.alt_description || "Image"}
            className={styles.mainImage}
          />

          {images.length > 1 && (
            <>
              <button className={styles.navButton} onClick={handlePrevious}>
                ‹
              </button>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={handleNext}
              >
                ›
              </button>
            </>
          )}
        </div>

        {images.length > 0 && rightThumbnails.length > 0 && (
          <div className={styles.rightThumbnails}>
            {rightThumbnails.map((img, index) => {
              const actualIndex = images.findIndex(
                (image) => image.id === img.id
              );
              return (
                <div
                  key={img.id}
                  className={`${styles.thumbnail} ${actualIndex === selectedIndex ? styles.active : ""}`}
                  onClick={() => handleThumbnailClick(actualIndex)}
                >
                  <img
                    src={img.urls.small}
                    alt={img.alt_description || "Thumbnail"}
                    className={styles.thumbnailImage}
                  />
                </div>
              );
            })}
          </div>
        )}

        <button className={styles.closeButton} onClick={onRequestClose}>
          ✕
        </button>

        <div className={styles.imageInfo}>
          <h3 className={styles.authorName}>{currentImage.user.name}</h3>
          <p className={styles.likes}>❤️ {currentImage.likes} likes</p>
          {currentImage.description && (
            <p className={styles.description}>{currentImage.description}</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
