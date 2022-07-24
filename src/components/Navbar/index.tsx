// import Link from 'next/link';
import { useEffect } from 'react';
import Menu from '@/components/Icons/Menu';
import Help from '@/components/Icons/Help';
import Graph from '@/components/Icons/Graph';
import Settings from '@/components/Icons/Settings';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar({ openState, open, theModalType, helpModal, statsModal, settingsModal }) {

  useEffect(() => {
    if (theModalType > 0) {
      openState(true)
    }
  }, [theModalType])

  return (
    <div id={styles.navbar} className={styles['nav-container']}>
      <div className={styles['nav-row']}>

        {/* Left-end of Navbar */}
        <div id={styles.menu} className={styles['nav-section']}>
          <div className={styles.item}><Menu /></div>
        </div>

        {/* Navbar center title */}
        <div id={styles.title} className={styles['nav-section']}>
          Wordle
        </div>

        {/* Right-end of Navbar */}
        <div id={styles.options} className={styles['nav-section']}>
          <div
            id='help-modal'
            className={styles.item}
            onClick={() => theModalType(1)}
          >
            <Help />
          </div>
          <div
            id='stats-modal'
            className={styles.item}
            onClick={() => theModalType(2)}
          >
            <Graph />
          </div>
          <div
            id='settings-modal'
            className={styles.item}
            onClick={() => theModalType(3)}
          >
            <Settings />
          </div>
        </div>
      </div>
    </div>
  )
};
