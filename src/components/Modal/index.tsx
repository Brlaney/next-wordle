// import React, { useEffect, useRef, useState } from 'react';
import Help from '@/components/Modals/Help'
import Stats from '@/components/Modals/Stats'
import Settings from '@/components/Modals/Settings'
import styles from '@/styles/components/Modal.module.scss';

const Modal = ({ open, onClose, displayType }) => {
  // Null display state:
  // if (!open) return null;

  // Display help modal:
  if (displayType == 1) return <Help onClose={onClose} />;

  // Display stats modal:
  if (displayType == 2) return <Stats onClose={onClose} />;

  // Display setting modal:
  if (displayType == 3) return <Settings onClose={onClose} />;

  return null;
}


export default Modal;
