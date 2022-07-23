// import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/components/Modal.module.scss';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className={styles.overlay}>
      <div className={styles.modalContainer} onClick={(e) => { e.stopPropagation(); }}>

        <div className={styles.modalRight}>
          <p className={styles.closeBtn} onClick={onClose}>X</p>
          
          <div className={styles.content}>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>

          <div className={styles.btnContainer}>
            
            <button className={styles.btnPrimary}>
              <span className={styles.bold}>YES</span>, I love NFT's
            </button>
            
            <button className={styles.btnOutline}>
              <span className={styles.bold}>NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
