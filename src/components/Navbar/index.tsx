// import Link from 'next/link';
import Menu from '@/components/Icons/Menu';
import Help from '@/components/Icons/Help';
import Graph from '@/components/Icons/Graph';
import Settings from '@/components/Icons/Settings';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar() {
  return (
    <div id={styles.navbar} className={styles['nav-container']}>
      <div className={styles['nav-row']}>
        <div id={styles.menu} className={styles['nav-section']}>
          <div className={styles.item}><Menu /></div>
        </div>
        <div id={styles.title} className={styles['nav-section']}>
          Wordle
        </div>
        <div id={styles.options} className={styles['nav-section']}>
          <div className={styles.item}><Help /></div>
          <div className={styles.item}><Graph /></div>
          <div className={styles.item}><Settings /></div>
        </div>
      </div>
    </div>
  )
};
