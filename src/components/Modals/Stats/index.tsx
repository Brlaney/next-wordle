import styles from '@/styles/Modals/StatsModal.module.scss';

export default function Stats({onClose}) {
  return (
    <div onClick={onClose} className={styles.overlay}>
      <div className={styles['modal-container']} onClick={(e) => { e.stopPropagation(); }}>
        <div className={styles['modal-right']}>
          <p className={styles.closeBtn} onClick={onClose}>X</p>
          <div className={styles.content}>
            <h1>Stats Modal</h1>
          </div>
          <div className={styles['btn-container']}>
            <button className={styles['btn-primary']}>
              <span className={styles.bold}>YES</span>, I love NFT's
            </button>
            <button className={styles['btn-outline']}>
              <span className={styles.bold}>NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
