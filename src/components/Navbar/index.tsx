import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar() {
  return (
    <div id={styles.navbar} className={styles['nav-container']}>
      <div className={styles['nav-row']}>
        <div id={styles.menu} className={styles['nav-section']}>
          lhs icons
        </div>
        <div id={styles.title} className={styles['nav-section']}>
          Wordle
        </div>
        <div id={styles.options} className={styles['nav-section']}>
          rhs icons
        </div>
      </div>
    </div>
  )
};
