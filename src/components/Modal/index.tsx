import { useRef } from 'react';
import { Dialog } from '@headlessui/react';
import styles from '@/styles/components/Modal.module.scss';

export default function Modal({ onClose = () => { }, children }) {
  let overlayRef = useRef();

  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className={styles['modal-container']}
    >
      <Dialog.Overlay ref={overlayRef} className={styles.overlay} />
      <div className={styles.content}>
        {children}
      </div>
    </Dialog>
  );
}
