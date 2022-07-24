// import Link from 'next/link';
import { useState, useEffect } from 'react';
import Menu from '@/components/Icons/Menu';
import Help from '@/components/Icons/Help';
import Stats from '@/components/Icons/Stats';
import Settings from '@/components/Icons/Settings';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar({ openState, theModalType }) {
  const [btnState, setBtnState] = useState<boolean>(false);

  useEffect(() => {
    if (theModalType > 0) {
      openState(true);
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  }, [theModalType]);

  return (
    <div id={styles.navbar} className={styles['nav-container']}>
      <div className={styles['nav-row']}>

        {/* Left-end of Navbar */}
        <div id={styles.menu} className={styles['nav-section']}>
          <div className={styles.item}>
            <Menu display={btnState} />
          </div>
        </div>

        {/* Navbar center title */}
        <div id={styles.title} className={styles['nav-section']}>
          Wordle
        </div>

        {/* Right-end of Navbar */}
        <div id={styles.options} className={styles['nav-section']}>
          <div
            id={styles['help-modal']}
            className={styles.item}
            onClick={() => theModalType(1)}
          >
            <Help display={btnState} />
          </div>
          <div
            id={styles['stats-modal']}
            className={styles.item}
            onClick={() => theModalType(2)}
          >
            <Stats display={btnState} />
          </div>
          <div
            id={styles['settings-modal']}
            className={styles.item}
            onClick={() => theModalType(3)}
          >
            <Settings display={btnState} />
          </div>
        </div>
      </div>
    </div>
  )
};
